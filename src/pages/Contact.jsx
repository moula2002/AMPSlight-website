import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in <span className="text-gold">Touch</span></h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Whether you have a question about our products, need a custom solution, or want to partner with us, we're ready to hear from you.
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8">
                Reach out to us through any of the channels below. Our support team is available Monday through Friday, 9am to 6pm.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-sm border border-white/5">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Headquarters</h3>
                    <p className="text-zinc-400">123 Innovation Drive<br />Tech Park, TP 45678<br />United States</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-sm border border-white/5">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-zinc-400">+1 (800) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-sm border border-white/5">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-zinc-400">info@ampslite.com<br />support@ampslite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                <input type="email" id="email" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                <input type="text" id="subject" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea id="message" rows="5" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm resize-none" placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gold text-black font-bold px-8 py-4 hover:bg-white transition-colors rounded-sm uppercase tracking-wider text-sm mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
