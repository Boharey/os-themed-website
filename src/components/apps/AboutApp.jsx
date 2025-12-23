import React from 'react';
import { mockData } from '../../mock';
import { Github, Linkedin, Twitter, MapPin, Mail, Code } from 'lucide-react';

const AboutApp = () => {
  const { user } = mockData;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start gap-6 mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full border-4 border-[#E95420] shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {user.name}
          </h1>
          <p className="text-xl text-[#E95420] font-medium mb-3">{user.title}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {user.tagline}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bg-gray-50 dark:bg-[#2C2C2C] rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {user.bio}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-[#2C2C2C] rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#E95420] rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Email</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                <a href={`mailto:${user.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E95420] hover:underline"
                >
                  {user.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#2C2C2C] rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#E95420] rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">leetcode</div>
              <div className="flex items-center gap-2">
                <a
                  href={user.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#E95420] hover:underline"
                >
                  leetcode/u/boharey
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-[#2C2C2C] rounded-lg p-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E95420] rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.location}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <a
          href={user.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-lg p-4 flex items-center justify-center gap-2 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="font-medium">GitHub</span>
        </a>
        <a
          href={user.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex items-center justify-center gap-2 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-medium">LinkedIn</span>
        </a>
        <a
          href={user.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-sky-500 hover:bg-sky-600 text-white rounded-lg p-4 flex items-center justify-center gap-2 transition-colors"
        >
          <Twitter className="w-5 h-5" />
          <span className="font-medium">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default AboutApp;
