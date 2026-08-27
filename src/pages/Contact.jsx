import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFeedbackMsg(data.message || 'Thank you! Your message has been sent.');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setFeedbackMsg(data.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMsg('Network error. Please try again later.');
    }
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setFeedbackMsg('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-black pb-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center border-b border-white/10 mb-12">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/wire.png" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 mt-16 max-w-4xl bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-xl opacity-0 animate-fade-in-up delay-100">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-200 font-medium drop-shadow-md">
            Whether you have a question about our products, need a custom solution, or want to partner with us, we're ready to hear from you.
          </p>
        </div>
      </section>

      <section data-aos="fade-up" className="container mx-auto px-6 py-12">
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
                    <h3 className="font-semibold text-lg mb-1">Corporate Office & Factory</h3>
                    <p className="text-zinc-400">
                      <strong className="text-white">Marudhar Electricals</strong><br/>
                      Ground Floor No 54 4th Main 4th Cross<br/>
                      Near Rudhrappa Garden Ashwath Katte<br/>
                      Road Kasturiba Nagar Mysore Road<br/>
                      Bengaluru, Karnataka - 560026
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-sm border border-white/5">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-zinc-400">+91 7204301107</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-900/50 p-3 rounded-sm border border-white/5">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-zinc-400">murudharelectricals@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-sm flex items-start gap-3">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-medium">{feedbackMsg}</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-sm flex items-start gap-3">
                <AlertCircle className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm font-medium">{feedbackMsg}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">First Name</label>
                  <input required type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">Last Name</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                <input required type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea required id="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors rounded-sm resize-none" placeholder="Your message here..."></textarea>
              </div>
              
              <button disabled={status === 'loading'} type="submit" className={`w-full bg-gold text-black font-bold px-8 py-4 rounded-sm uppercase tracking-wider text-sm mt-4 transition-colors ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
