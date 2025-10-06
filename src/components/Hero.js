import { useEffect, useState } from "react";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // QR code data URL for phone dialer
    const phoneNumber = "+4917645629039";
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=tel:${phoneNumber}`;

    return (
        <section className="relative min-h-auto flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-center"
                style={{
                    backgroundImage: `url('/hero-bg.jpg')`,
                }}
            >
                <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-40 sm:pt-32 lg:pt-8 text-center">
                {/* Logo */}
                <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <img
                        src={'/logo.png'}
                        alt="T&B Gebäudereinigung Logo"
                        className="w-24 h-24 mx-auto drop-shadow-2xl"
                    />
                </div>

                {/* Headline */}
                <h1
                    className={`text-4xl lg:text-5xl max-w-8xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Willkommen bei T&B Gebäudereinigung
                </h1>

                {/* Tagline */}
                <p
                    className={`text-xl sm:text-2xl text-white/95 mb-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Sauberkeit ist unsere Leidenschaft – Ihr Vertrauen ist unser Antrieb.
                </p>

                {/* Description */}
                <p
                    className={`text-lg sm:text-xl text-white/90 mb-12 max-w-6xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Wir sind ein junges und neu gegründetes Reinigungsunternehmen, das mit viel Engagement, Zuverlässigkeit und Liebe zum Detail für Sie da ist.
                    Mit frischen Ideen, moderner Arbeitsweise und dem Blick für das Wesentliche sorgen wir dafür, dass Ihre Räume nicht nur sauber, sondern rundum gepflegt sind.
                </p>

                {/* QR Code CTA */}
                <div
                    className={`inline-block bg-white rounded-2xl p-8 shadow-2xl hover-lift transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    <p className="text-foreground font-semibold mb-4 text-lg">
                        Scannen Sie für direkten Kontakt
                    </p>
                    <img
                        src={qrCodeUrl}
                        alt="QR Code für Kontakt"
                        className="w-48 h-48 mx-auto rounded-lg"
                    />
                    <p className="text-muted-foreground mt-4 text-sm">
                        Rufen Sie uns direkt an
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
