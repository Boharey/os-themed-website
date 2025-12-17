import React, { useEffect, useRef } from 'react';
import { Info, Terminal, Image, Monitor } from 'lucide-react';

const ContextMenu = ({ x, y, onClose, onAction }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const menuItems = [
    { id: 'about-os', label: 'About This OS', icon: Info },
    { id: 'terminal', label: 'Open Terminal', icon: Terminal },
    { id: 'wallpaper', label: 'Change Wallpaper', icon: Image },
    { id: 'system-info', label: 'System Info', icon: Monitor }
  ];

  return (
    <div
      ref={menuRef}
      className="fixed bg-white dark:bg-[#2C2C2C] rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 py-2 min-w-[200px] z-[300] animate-fadeIn"
      style={{ left: x, top: y }}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              onAction(item.id);
              onClose();
            }}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
          >
            <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ContextMenu;
