import { MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-sand-light py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold">Discover Eritrea</span>
          </div>
          
          <p className="font-body text-sand/60 text-sm text-center">
            Explore the hidden treasures of the Horn of Africa
          </p>

          <p className="font-body text-sand/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> for travelers
          </p>
        </div>

        <div className="border-t border-sand-light/10 mt-10 pt-6 text-center">
          <p className="font-body text-sand/40 text-xs">
            © 2025 Discover Eritrea. Images are for illustrative purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
