import PhoneIcon from "../icons/Phone";
import SmsIcon from "../icons/Sms";

const Header = () => {
    const phoneNumber = "+4917645629039";
    const email = "kontakt@tb-gebaeudereinigung.de";

    return (
        <header className="fixed top-0 right-0 z-50 p-4 sm:p-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-3 border border-border/50">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
                    {/* Phone */}
                    <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <PhoneIcon fillColor="w-4 h-4 fill-primary" />
                        </div>
                        <span className="text-sm font-medium">{phoneNumber}</span>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <SmsIcon strokeColor="w-4 h-4 stroke-primary" />
                        </div>
                        <span className="text-sm font-medium">{email}</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
