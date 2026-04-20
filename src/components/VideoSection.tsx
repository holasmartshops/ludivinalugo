const VideoSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="eyebrow mb-4">✦ En video</p>
            <h2 className="font-display text-4xl md:text-5xl text-secondary leading-tight mb-6">
              Conoce mi mensaje en mis propias palabras
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Mira mi presentación y descubre cómo trabajo con la energía angelical para guiarte en tu despertar
              espiritual.
            </p>
            <a href="#servicios" className="btn-primary">
              Reserva tu lectura
            </a>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden card-elevated border border-gold/30">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C4-H_j6igN0?si=Zfj8WhLNJvyRvMiY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
