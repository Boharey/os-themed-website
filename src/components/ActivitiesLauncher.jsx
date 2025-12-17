import React from 'react';
import {
  User,
  Terminal,
  Globe,
  Calendar,
  FileText,
  Mail,
  X
} from 'lucide-react';

const ActivitiesLauncher = ({ isOpen, onClose, onAppOpen }) => {
  if (!isOpen) return null;

  const apps = [
    { id: 'about', name: 'About Me', icon: User, color: 'from-blue-500 to-blue-600', description: 'Learn about me' },
    { id: 'skills', name: 'Skills Terminal', icon: Terminal, color: 'from-green-500 to-green-600', description: 'Technical expertise' },
    { id: 'projects', name: 'Projects Browser', icon: Globe, color: 'from-purple-500 to-purple-600', description: 'View my work' },
    { id: 'timeline', name: 'Career Timeline', icon: Calendar, color: 'from-orange-500 to-orange-600', description: 'Professional journey' },
    { id: 'resume', name: 'Resume Viewer', icon: FileText, color: 'from-red-500 to-red-600', description: 'Download my CV' },
    { id: 'contact', name: 'Contact Info', icon: Mail, color: 'from-pink-500 to-pink-600', description: 'Get in touch' }
  ];

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[250] animate-fadeIn"
      onClick={onClose}
    >
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Applications</h2>
            <p className="text-gray-400">Click an app to open</p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onAppOpen(app.id);
                  onClose();
                }}
                className="bg-white/5 hover:bg-white/10 rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-200 hover:scale-105 group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-white font-medium mb-1">{app.name}</div>
                  <div className="text-gray-400 text-xs">{app.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesLauncher;
