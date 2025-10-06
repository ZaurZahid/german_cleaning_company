const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo */}
                    <img
                        src={'/logo.png'}
                        alt="T&B Gebäudereinigung Logo"
                        className="w-16 h-16 opacity-90"
                    />

                    {/* Company Info */}
                    <div>
                        <h3 className="text-white/70 text-xl font-semibold mb-2">T&B Gebäudereinigung</h3>
                        <p className="text-white/70 text-sm max-w-md">
                            Ihr zuverlässiger Partner für professionelle Reinigung und Umzugsdienstleistungen in Deutschland.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-white/20" />

                    {/* Copyright */}
                    <p className="text-white/60 text-sm">
                        © {currentYear} T&B Gebäudereinigung. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
