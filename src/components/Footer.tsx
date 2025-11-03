
import { Mail, Phone, MapPin, Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-6 sm:py-8 px-4 sm:px-6 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Address</h3>
              <p className="text-xs sm:text-sm text-white/80">
                Kulladalsgatan 18<br />
                352 36 Växjö<br />
                Sweden
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Phone</h3>
              <p className="text-xs sm:text-sm text-white/80">
                +46 8 123 456 78
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Email</h3>
              <p className="text-xs sm:text-sm text-white/80">
                info@chatbotcompass.se
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Building className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Organization</h3>
              <p className="text-xs sm:text-sm text-white/80">
                Org.nr: 556123-4567
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            © 2024 ChatBot Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
