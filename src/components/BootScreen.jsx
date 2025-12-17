import React, { useEffect, useState } from 'react';

const BootScreen = ({ onBootComplete }) => {
  const [progress, setProgress] = useState(0);
  const [bootMessages, setBootMessages] = useState([]);
  const [showLogo, setShowLogo] = useState(false);

  const messages = [
    "Initializing Boharey OS...",
    "Loading kernel modules...",
    "Starting system services...",
    "Mounting file systems...",
    "Loading portfolio components...",
    "Initializing network interfaces...",
    "Starting desktop environment...",
    "System ready!"
  ];

  useEffect(() => {
    // Show logo with delay for entrance effect
    setTimeout(() => setShowLogo(true), 100);

    let currentMessage = 0;
    let progressInterval;
    let messageInterval;

    // Show messages
    messageInterval = setInterval(() => {
      if (currentMessage < messages.length) {
        setBootMessages(prev => [...prev, messages[currentMessage]]);
        currentMessage++;
      }
    }, 300);

    // Progress bar
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => onBootComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onBootComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2C2C2C] via-[#1E1E1E] to-[#2C2C2C] flex items-center justify-center z-[9999]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#E95420] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#E95420] rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#E95420] rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#E95420] rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-2xl w-full px-8 relative z-10">
        {/* Logo - More centered */}
        <div className={`flex items-center justify-center mb-16 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 -m-4">
              <div className="w-32 h-32 border-4 border-transparent border-t-[#E95420] rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            
            {/* Main logo circle */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#E95420] via-[#DD4814] to-[#E95420] flex items-center justify-center shadow-2xl animate-pulse" style={{ animationDuration: '2s' }}>
              <span className="text-5xl font-bold text-white">B</span>
              
              {/* Orbiting dots */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full animate-spin" style={{ animationDuration: '2s', transformOrigin: 'center 48px' }}></div>
              </div>
            </div>
            
            {/* Bottom right pulsing dot */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#E95420] animate-pulse shadow-lg shadow-[#E95420]/50"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#E95420] animate-ping"></div>
          </div>
        </div>

        {/* Title with typing effect */}
        <div className={`transition-all duration-700 delay-300 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl font-bold text-center mb-3 text-white">
            Boharey OS
          </h1>
          <p className="text-center text-[#E95420] font-medium text-lg mb-16">Computer Engineer Portfolio System</p>
        </div>

        {/* Boot Messages */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-5 mb-8 h-52 overflow-hidden font-mono text-sm border border-[#E95420]/20 shadow-xl">
          <div className="space-y-1">
            {bootMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className="text-green-400 animate-fadeIn flex items-center gap-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-green-500">✓</span>
                <span>{msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-600/30">
            <div
              className="h-full bg-gradient-to-r from-[#E95420] via-[#DD4814] to-[#E95420] transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="text-center mt-3 text-[#E95420] text-base font-bold">
            {progress}%
          </div>
        </div>

        {/* Loading text */}
        {progress < 100 && (
          <div className="text-center mt-4 text-gray-400 text-sm animate-pulse">
            Loading your portfolio experience...
          </div>
        )}
      </div>
    </div>
  );
};

export default BootScreen;
