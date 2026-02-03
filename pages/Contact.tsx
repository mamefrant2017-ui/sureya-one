
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Get in Touch</h1>
          <p className="text-slate-600 text-lg mb-12">
            Have questions about admissions, courses, or life at Sureya? Our team is here to help you navigate your educational path.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mr-6 flex-shrink-0">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Main Campus</h4>
                <p className="text-slate-600">123 Academic Way, Education District<br />New Horizon City, NH 54321</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mr-6 flex-shrink-0">
                <i className="fas fa-phone text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600">Admissions: +1 (555) 123-4567<br />General: +1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mr-6 flex-shrink-0">
                <i className="fas fa-envelope text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-600">admissions@sureya.edu<br />support@sureya.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
          <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>Admissions Inquiry</option>
                <option>Academic Support</option>
                <option>Career Services</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
