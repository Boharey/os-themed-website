import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square, Maximize2 } from 'lucide-react';

const Window = ({
  id,
  title,
  icon: Icon,
  children,
  onClose,
  onMinimize,
  onFocus,
  isActive,
  initialPosition = { x: 100, y: 80 },
  initialSize = { width: 800, height: 600 }
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [savedPosition, setSavedPosition] = useState(null);
  const [savedSize, setSavedSize] = useState(null);
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onFocus();
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: Math.max(0, e.clientY - dragStart.y)
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const handleMaximize = () => {
    if (isMaximized) {
      setPosition(savedPosition);
      setSize(savedSize);
      setIsMaximized(false);
    } else {
      setSavedPosition(position);
      setSavedSize(size);
      // Position below top bar (32px) and account for dock (64px left margin)
      setPosition({ x: 64, y: 32 });
      setSize({ width: window.innerWidth - 64, height: window.innerHeight - 32 });
      setIsMaximized(true);
    }
  };

  const windowStyle = {
    left: position.x,
    top: position.y,
    width: size.width,
    height: size.height,
    zIndex: isActive ? 100 : 50
  };

  return (
    <div
      ref={windowRef}
      className={`fixed bg-white dark:bg-[#2C2C2C] rounded-lg shadow-2xl overflow-hidden transition-shadow ${
        isActive ? 'shadow-2xl' : 'shadow-lg'
      }`}
      style={windowStyle}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-10 bg-gradient-to-r from-[#E95420] to-[#DD4814] flex items-center justify-between px-3 cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-white" />}
          <span className="text-white text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-1 window-controls">
          <button
            onClick={onMinimize}
            className="w-6 h-6 rounded hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-6 h-6 rounded hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {isMaximized ? (
              <Square className="w-3 h-3 text-white" />
            ) : (
              <Maximize2 className="w-3 h-3 text-white" />
            )}
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded hover:bg-red-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-2.5rem)] overflow-auto bg-white dark:bg-[#1E1E1E]">
        {children}
      </div>
    </div>
  );
};

export default Window;
