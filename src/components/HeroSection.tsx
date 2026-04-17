import React, { useRef, useEffect, forwardRef } from "react";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import heroBgVideo from "@/assets/hero-bg-video.webm";
import ludivinaImg from "@/assets/ludivina.png";
import ludivinaLogo from "@/assets/ludivina-logo.png";

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Force play programmatically
    videoElement.play().catch((err) => console.error("Video autoplay failed:", err));

    // Fade-out near end of loop, fade-in on restart
    const handleTimeUpdate = () => {
      if (!videoElement.duration) return;

      // Si estamos en el último segundo del video, fade-out
      if (videoElement.currentTime >= videoElement.duration - 0.5) {
        videoElement.style.opacity = "0";
      }
      // Si estamos en cualquier otro momento (incluyendo cuando vuelve a 0), fade-in
      else {
        videoElement.style.opacity = "1";
      }
    };

    const handlePlaying = () => {
      videoElement.style.opacity = "1";
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("playing", handlePlaying);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background image (mobile/tablet) */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Background video (desktop only) */}
      <video
        ref={videoRef}
        className="hidden lg:block absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroBgVideo} type="video/webm" />
      </video>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-dark/0 via-dark/70 to-dark z-[5]" />

      {/* Two-column layout */}
      <div className=" container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 items-center min-h-screen pt-24 pb-0">
        {/* Left — Ludivina photo (hidden on mobile/tablet) */}
        <div className="hidden lg:flex justify-start items-end self-end">
          <div className="relative w-[32rem]">
            <img
              src={ludivinaImg}
              alt="Ludivina Lugo — Guía Espiritual Angelical"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right — Info (centered vertically) */}
        <div className=" relative z-10 text-center lg:text-left animate-fade-in-up self-center">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-cinzel text-sm md:text-base tracking-[0.3em] uppercase text-foreground/70">
              Guía Espiritual Angelical · Te acompaño en tu camino
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <img src={ludivinaLogo} alt="Ludivina Lugo" className="w-full h-auto mb-1 md:mb-6" />

          <p className="font-cinzel text-base md:text-lg tracking-[0.2em] uppercase text-gold-dark mb-8">
            Lectura de Ángeles · Amuletos · Guía Espiritual
          </p>

          <p className="font-outfit text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12">
            Descubre los mensajes que los ángeles tienen para ti. Te guío en tu camino hacia la paz interior, la
            claridad y la protección divina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Descubre tus Mensajes
            </a>
            <a
              href="#tienda"
              className="inline-block font-cinzel text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full border transition-all duration-300 text-gold border-gold-dark"
            >
              Ver Amuletos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
