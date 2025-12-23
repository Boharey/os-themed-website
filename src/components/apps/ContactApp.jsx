import React from 'react';
import { mockData } from '../../mock';
import { Mail, MapPin, Github, Linkedin, Twitter, Copy } from 'lucide-react';

const ContactApp = () => {
  const { user } = mockData;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto h-full overflow-y-auto overflow-x-hidden">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Get In Touch
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Open to collaborations, opportunities, or a friendly conversation.
      </p>

      {/* Contact Cards */}
      <div className="space-y-5 mb-12">
        {/* Email */}
        <div className="group bg-white dark:bg-[#2C2C2C] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E95420] to-[#DD4814] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </div>
                <div className="text-base font-medium text-gray-900 dark:text-white">
                  {user.email}
                </div>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(user.email)}
              className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center justify-center"
            >
              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-[#2C2C2C] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Location
              </div>
              <div className="text-base font-medium text-gray-900 dark:text-white">
                {user.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
          Connect with me
        </h2>

        <div className="space-y-3">
          <a
            href={user.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href={user.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href={user.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition"
          >
            <Twitter className="w-5 h-5" />
            <span className="font-medium">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
