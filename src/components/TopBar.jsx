import React, { useState, useEffect } from 'react';
import { Sun, Moon, Power, User } from 'lucide-react';
import { mockData } from '../mock';

const TopBar = ({ onActivitiesClick, onThemeToggle, isDark, onPowerClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="h-10 bg-[#2C2C2C] text-white flex items-center justify-between px-4 shadow-lg z-[200] border-b border-gray-700">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onActivitiesClick}
          className="px-3 py-1.5 text-sm hover:bg-white/10 rounded transition-colors duration-200 font-medium"
          title="Show Activities"
        >
          Activities
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded transition-colors duration-200 cursor-default">
          <span className="text-lg">{mockData.user.avatarEmoji}</span>
          <span className="text-sm font-medium">{mockData.user.name}</span>
        </div>
      </div>

      {/* Center Section - Time */}
      <div className="flex flex-col items-center text-xs leading-tight">
        <div className="font-medium">{formatTime(currentTime)}</div>
        <div className="text-gray-400 text-[10px]">{formatDate(currentTime)}</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={onThemeToggle}
          className="w-8 h-8 hover:bg-white/10 rounded flex items-center justify-center transition-colors duration-200"
          title="Toggle Theme"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-8 h-8 hover:bg-white/10 rounded flex items-center justify-center transition-colors duration-200"
            title="Profile Settings"
            aria-label="Profile settings"
            aria-expanded={showProfileMenu}
          >
            <User className="w-4 h-4" />
          </button>
          
          {/* Profile Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1E1E1E] border border-gray-600 rounded-lg shadow-xl z-[210]">
              <div className="p-3 border-b border-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{mockData.user.avatarEmoji}</span>
                  <div>
                    <p className="font-semibold text-sm">{mockData.user.name}</p>
                    <p className="text-xs text-gray-400">{mockData.user.title}</p>
                  </div>
                </div>
              </div>
              <a
                href={`mailto:${mockData.user.email}`}
                className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
              >
                {mockData.user.email}
              </a>
              <a
                href={mockData.user.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors"
              >
                View GitHub Profile
              </a>
              <button
                onClick={() => setShowProfileMenu(false)}
                className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-white/10 transition-colors border-t border-gray-600"
              >
                Close Menu
              </button>
            </div>
          )}
        </div>

        <button
          onClick={onPowerClick}
          className="w-8 h-8 hover:bg-red-500/20 rounded flex items-center justify-center transition-colors duration-200"
          title="Power Options"
          aria-label="Power options"
        >
          <Power className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
