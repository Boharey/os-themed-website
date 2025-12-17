import React from 'react';
import { mockData } from '../../mock';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Copy } from 'lucide-react';

const ContactApp = () => {
  const { user } = mockData;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="p-8 max-w-2xl mx-auto h-full overflow-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      {/* Contact Cards */}
      <div className="space-y-4 mb-8">
        {/* Email */}
        <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">{user.email}</div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(user.email)}
              className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center justify-center transition-colors"
            >
              <Copy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                <div className="text-lg font-medium text-gray-900 dark:text-white">{user.phone}</div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(user.phone)}
              className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center justify-center transition-colors"
            >
              <Copy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
              <div className="text-lg font-medium text-gray-900 dark:text-white">{user.location}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect with me</h2>
        <div className="grid grid-cols-1 gap-3">
          <a
            href={user.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg p-4 flex items-center gap-3 transition-colors"
          >
            <Github className="w-6 h-6" />
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-gray-400">Check out my repositories</div>
            </div>
          </a>
          <a
            href={user.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex items-center gap-3 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-blue-100">Let's connect professionally</div>
            </div>
          </a>
          <a
            href={user.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg p-4 flex items-center gap-3 transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <div>
              <div className="font-medium">Twitter</div>
              <div className="text-sm text-sky-100">Follow for updates</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
