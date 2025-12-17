import React from 'react';
import {
  User,
  Terminal,
  Globe,
  Calendar,
  FileText,
  Mail,
  Grid3x3
} from 'lucide-react';

const Dock = ({ onAppOpen, activeApps }) => {
  const dockApps = [
    { id: 'about', name: 'About Me', icon: User, color: 'from-blue-500 to-blue-600' },
    { id: 'skills', name: 'Skills', icon: Terminal, color: 'from-green-500 to-green-600' },
    { id: 'projects', name: 'Projects', icon: Globe, color: 'from-purple-500 to-purple-600' },
    { id: 'timeline', name: 'Timeline', icon: Calendar, color: 'from-orange-500 to-orange-600' },
    { id: 'resume', name: 'Resume', icon: FileText, color: 'from-red-500 to-red-600' },
    { id: 'contact', name: 'Contact', icon: Mail, color: 'from-pink-500 to-pink-600' },
    { id: 'activities', name: 'Show Apps', icon: Grid3x3, color: 'from-gray-500 to-gray-600' }
  ];

  return (
    <div className="fixed left-0 top-8 bottom-0 w-16 bg-[#2C2C2C]/95 backdrop-blur-sm flex flex-col items-center py-4 gap-2 shadow-xl z-[150]">
      {dockApps.map((app) => {
        const Icon = app.icon;
        const isActive = activeApps.includes(app.id);

        return (
          <div key={app.id} className="relative group">
            <button
              onClick={() => onAppOpen(app.id)}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-lg ${
                isActive ? 'ring-2 ring-white/50' : ''
              }`}
              title={app.name}
            >
              <Icon className="w-6 h-6 text-white" />
            </button>
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#E95420] rounded-r"></div>
            )}
            {/* Tooltip */}
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {app.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dock;
