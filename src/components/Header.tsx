import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-foreground">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold">Discover Eritrea</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
            <li>
              <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
                Destinations
              </a>
            </li>
            <li>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#highlights" className="text-muted-foreground hover:text-primary transition-colors">
                Highlights
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
