import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Unsere Leistungen
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    {/* Gebäudereinigung */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift mb-6">
                            <img
                                src={'/cleaning-service.jpg'}
                                alt="Gebäudereinigung"
                                className="w-full h-[350px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Gebäudereinigung
                        </h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Büro- und Praxisreinigung</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Treppenhausreinigung</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Unterhaltsreinigung</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Grund- und Sonderreinigung</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Fenster- und Glasreinigung</span>
                            </li>
                        </ul>
                    </div>

                    {/* Umzüge */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                            }`}
                    >
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift mb-6">
                            <img
                                src={'/moving-service.jpg'}
                                alt="Umzüge"
                                className="w-full h-[350px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Umzüge
                        </h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>Privatumzüge & Firmenumzüge</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>Möbeltransport & Trageservice</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>Abbau & Aufbau von Möbeln</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>Entrümpelungen & Haushaltsauflösungen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-secondary mt-1">•</span>
                                <span>Individuelle Umzugslösungen nach Bedarf</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Warum T&B Section */}
                <div
                    className={`bg-white rounded-2xl shadow-lg p-8 lg:p-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                        }`}
                >
                    <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                        Warum T&B?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">Junges, engagiertes Team</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">Sauberkeit und Sorgfalt bis ins Detail</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">Persönlicher Service & faire Preise</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">Alles aus einer Hand: Reinigung & Umzug</p>
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                        Wir freuen uns, als neues Unternehmen Ihr Vertrauen zu gewinnen und Ihnen den Alltag leichter zu machen –
                        mit sauberer Umgebung und stressfreien Umzügen.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
