import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted text-lg">Have questions? We're here to help you in your career journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="glass p-8 rounded-3xl text-center hover:border-primary/50 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Email Us</h3>
          <p className="text-muted text-sm">support@placementindia.dev</p>
        </div>

        <div className="glass p-8 rounded-3xl text-center hover:border-primary/50 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Call Us</h3>
          <p className="text-muted text-sm">+91 123 456 7890</p>
        </div>

        <div className="glass p-8 rounded-3xl text-center hover:border-primary/50 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold mb-2">Visit Us</h3>
          <p className="text-muted text-sm">Hyderabad, Telangana, India</p>
        </div>
      </div>

      <div className="glass p-8 md:p-12 rounded-[3rem]">
        <h2 className="text-2xl font-bold mb-8 text-center">Send us a Message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="glass px-6 py-4 rounded-2xl outline-none focus:border-primary" />
          <input type="email" placeholder="Your Email" className="glass px-6 py-4 rounded-2xl outline-none focus:border-primary" />
          <div className="md:col-span-2">
            <textarea placeholder="Your Message" rows={6} className="w-full glass px-6 py-4 rounded-2xl outline-none focus:border-primary resize-none"></textarea>
          </div>
          <div className="md:col-span-2">
            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
