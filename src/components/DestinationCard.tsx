interface DestinationCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}

const DestinationCard = ({ image, title, subtitle, description, delay = 0 }: DestinationCardProps) => {
  return (
    <article 
      className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-earth/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-gold font-body text-xs tracking-widest uppercase">
          {subtitle}
        </span>
        <h3 className="font-display text-2xl font-semibold text-sand-light mt-1 mb-2">
          {title}
        </h3>
        <p className="font-body text-sand/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </article>
  );
};

export default DestinationCard;
