const Banner = () => {
    return (
        <section className="relative py-16 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url('/banner-1.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    Alles aus einer Hand
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Professionelle Reinigung und stressfreie Umzüge –
                    T&B macht Ihren Alltag leichter
                </p>
            </div>
        </section>
    );
};

export default Banner;
