import heroImage from "@/assets/hero-asmara.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
              About Eritrea
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              A Land of Timeless Beauty
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Nestled along the Red Sea coast of the Horn of Africa, Eritrea is a country 
                of extraordinary diversity. From the Art Deco splendor of its capital Asmara 
                — a UNESCO World Heritage site — to the ancient ruins that whisper of 
                civilizations past, every corner tells a story.
              </p>
              <p>
                The country boasts nine ethnic groups, each with unique traditions, languages, 
                and cultural practices. This rich tapestry of cultures is reflected in vibrant 
                festivals, distinctive cuisines, and warm hospitality that welcomes every visitor.
              </p>
              <p>
                Whether you seek adventure in the volcanic Danakil Depression, tranquility 
                on the pristine beaches of the Dahlak Islands, or cultural immersion in 
                historic towns, Eritrea offers experiences found nowhere else on Earth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-primary">9</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Ethnic Groups</p>
              </div>
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-primary">1,000+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">km Coastline</p>
              </div>
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-primary">200+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Islands</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Asmara cityscape at golden hour"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-card">
              <p className="font-display text-lg font-semibold">UNESCO Heritage</p>
              <p className="font-body text-sm opacity-90">Asmara: A Modernist City of Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
