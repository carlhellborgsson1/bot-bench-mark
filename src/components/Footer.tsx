
import { Mail, Phone, MapPin, Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 px-6 mt-auto">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-sm text-blue-100">
                Storgatan 12<br />
                111 51 Stockholm<br />
                Sweden
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-blue-100">
                +46 8 123 456 78
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-blue-100">
                info@chatbotcompass.se
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Building className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Organization</h3>
              <p className="text-sm text-blue-100">
                Org.nr: 556123-4567
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-6 pt-6 text-center">
          <p className="text-sm text-blue-100">
            © 2024 ChatBot Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
