import { Compass, Mountain, Waves, Building2 } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Art Deco Architecture",
    description: "Asmara features one of the world's finest collections of early 20th-century modernist architecture, earning UNESCO World Heritage status."
  },
  {
    icon: Waves,
    title: "Red Sea Diving",
    description: "Explore pristine coral reefs teeming with marine life, shipwrecks, and crystal-clear waters in one of the world's last unspoiled diving destinations."
  },
  {
    icon: Mountain,
    title: "Highland Adventures",
    description: "Trek through dramatic escarpments, ancient monasteries, and traditional villages in the breathtaking Central Highlands."
  },
  {
    icon: Compass,
    title: "Rich Cultural Heritage",
    description: "Experience diverse traditions, ancient Orthodox Christian and Islamic heritage, and centuries-old customs preserved through generations."
  }
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-earth text-sand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">
            Why Visit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Unforgettable Experiences
          </h2>
          <p className="font-body text-sand/80 mt-4 max-w-2xl mx-auto">
            Discover what makes Eritrea a truly unique destination for 
            travelers seeking authentic adventures off the beaten path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="text-center p-8 rounded-2xl bg-sand-light/5 border border-sand-light/10 hover:bg-sand-light/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sand/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
