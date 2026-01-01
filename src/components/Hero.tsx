import heroImage from "@/assets/hero-asmara.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Asmara, the capital city of Eritrea with Art Deco architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/80 via-earth/30 to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span 
          className="inline-block text-gold font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          East Africa's Hidden Gem
        </span>
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sand-light mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Discover Eritrea
        </h1>
        <p 
          className="font-body text-lg md:text-xl text-sand/90 max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          From ancient ruins to pristine Red Sea beaches, explore a land of 
          breathtaking landscapes, rich history, and warm hospitality.
        </p>
        <a
          href="#destinations"
          className="inline-block bg-primary hover:bg-terracotta-light text-primary-foreground font-body font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-elevated animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Explore Destinations
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sand/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-sand/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
