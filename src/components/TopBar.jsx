import React, { useState, useEffect } from 'react';
import { Sun, Moon, Power } from 'lucide-react';
import { mockData } from '../mock';

const TopBar = ({ onActivitiesClick, onThemeToggle, isDark, onPowerClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

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
    <div className="h-8 bg-[#2C2C2C] text-white flex items-center justify-between px-2 shadow-md z-[200]">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <button
          onClick={onActivitiesClick}
          className="px-3 py-1 text-sm hover:bg-white/10 rounded transition-colors"
        >
          Activities
        </button>
        <span className="text-sm font-medium">{mockData.user.name}</span>
      </div>

      {/* Center Section - Time */}
      <div className="flex flex-col items-center text-xs leading-tight">
        <div className="font-medium">{formatTime(currentTime)}</div>
        <div className="text-gray-400 text-[10px]">{formatDate(currentTime)}</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1">
        <button
          onClick={onThemeToggle}
          className="w-7 h-7 hover:bg-white/10 rounded flex items-center justify-center transition-colors"
          title="Toggle Theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button
          onClick={onPowerClick}
          className="w-7 h-7 hover:bg-white/10 rounded flex items-center justify-center transition-colors"
          title="Power Options"
        >
          <Power className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
