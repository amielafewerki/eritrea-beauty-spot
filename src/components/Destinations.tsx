import DestinationCard from "./DestinationCard";
import massawaImage from "@/assets/massawa.jpg";
import dahlakImage from "@/assets/dahlak.jpg";
import qohaitoImage from "@/assets/qohaito.jpg";
import filfilImage from "@/assets/filfil.jpg";
import dankaliaImage from "@/assets/dankalia.jpg";

const destinations = [
  {
    image: massawaImage,
    title: "Massawa",
    subtitle: "Historic Port City",
    description: "An ancient port city with Ottoman and Egyptian architecture, coral stone buildings, and stunning Red Sea views."
  },
  {
    image: dahlakImage,
    title: "Dahlak Archipelago",
    subtitle: "Island Paradise",
    description: "Over 200 pristine islands with crystal-clear waters, vibrant coral reefs, and untouched white sand beaches."
  },
  {
    image: qohaitoImage,
    title: "Qohaito",
    subtitle: "Ancient Ruins",
    description: "Remarkable archaeological site featuring pre-Aksumite ruins, ancient temples, and breathtaking highland views."
  },
  {
    image: filfilImage,
    title: "Filfil Rainforest",
    subtitle: "Natural Wonder",
    description: "Eritrea's only tropical rainforest, home to diverse wildlife and lush vegetation in the highlands."
  },
  {
    image: dankaliaImage,
    title: "Danakil Depression",
    subtitle: "Otherworldly Landscape",
    description: "One of Earth's most extreme environments featuring sulfur springs, salt flats, and volcanic formations."
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Places to Visit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Iconic Destinations
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            From ancient archaeological sites to stunning natural wonders, 
            Eritrea offers a diverse array of experiences for every traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest, index) => (
            <DestinationCard 
              key={dest.title}
              {...dest}
              delay={0.2 + index * 0.15}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {destinations.slice(3).map((dest, index) => (
            <DestinationCard 
              key={dest.title}
              {...dest}
              delay={0.5 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
