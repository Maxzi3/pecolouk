const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">
              200+
            </div>
            <p className="text-muted-foreground">Properties Managed</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">
              98%
            </div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">
              4+
            </div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="animate-fade-in">
            <div className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">
              100+
            </div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
