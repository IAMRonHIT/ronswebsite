import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              Ready to Transform Your Healthcare Operations?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contact us today to learn how Ron AI can help you achieve greater efficiency, reduce costs, and improve patient outcomes
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#001f3f]/50 border border-[#39CCCC]/20 rounded-lg focus:outline-none focus:border-[#39CCCC] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#001f3f]/50 border border-[#39CCCC]/20 rounded-lg focus:outline-none focus:border-[#39CCCC] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
              <input
                type="text"
                id="organization"
                className="w-full px-4 py-3 bg-[#001f3f]/50 border border-[#39CCCC]/20 rounded-lg focus:outline-none focus:border-[#39CCCC] transition-colors"
                placeholder="Your organization"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#001f3f]/50 border border-[#39CCCC]/20 rounded-lg focus:outline-none focus:border-[#39CCCC] transition-colors"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#39CCCC] text-[#001f3f] rounded-lg font-semibold hover:bg-[#01FF70] transition-colors duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;