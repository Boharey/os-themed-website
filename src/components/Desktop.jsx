import React, { useState } from 'react';
import TopBar from './TopBar';
import Dock from './Dock';
import Window from './Window';
import ActivitiesLauncher from './ActivitiesLauncher';
import ContextMenu from './ContextMenu';
import AboutApp from './apps/AboutApp';
import SkillsApp from './apps/SkillsApp';
import ProjectsApp from './apps/ProjectsApp';
import TimelineApp from './apps/TimelineApp';
import ResumeApp from './apps/ResumeApp';
import ContactApp from './apps/ContactApp';
import {
  User,
  Terminal,
  Globe,
  Calendar,
  FileText,
  Mail
} from 'lucide-react';
import { mockData } from '../mock';

const Desktop = () => {
  const [isDark, setIsDark] = useState(true);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [showActivities, setShowActivities] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [wallpaper, setWallpaper] = useState(0);

  const wallpapers = [
    'linear-gradient(135deg, #2C2C2C 0%, #1E1E1E 100%)',
    'linear-gradient(135deg, #434343 0%, #000000 100%)',
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  ];

  const appConfigs = {
    about: { id: 'about', title: 'About Me', icon: User, component: AboutApp, position: { x: 200, y: 80 }, size: { width: 800, height: 600 } },
    skills: { id: 'skills', title: 'Skills Terminal', icon: Terminal, component: SkillsApp, position: { x: 150, y: 100 }, size: { width: 900, height: 650 } },
    projects: { id: 'projects', title: 'Projects Browser', icon: Globe, component: ProjectsApp, position: { x: 200, y: 120 }, size: { width: 1000, height: 700 } },
    timeline: { id: 'timeline', title: 'Career Timeline', icon: Calendar, component: TimelineApp, position: { x: 120, y: 90 }, size: { width: 850, height: 650 } },
    resume: { id: 'resume', title: 'Resume Viewer', icon: FileText, component: ResumeApp, position: { x: 180, y: 110 }, size: { width: 900, height: 700 } },
    contact: { id: 'contact', title: 'Contact Info', icon: Mail, component: ContactApp, position: { x: 250, y: 130 }, size: { width: 700, height: 600 } }
  };

  const handleAppOpen = (appId) => {
    if (appId === 'activities') {
      setShowActivities(true);
      return;
    }

    const existingWindow = openWindows.find(w => w.id === appId);
    if (existingWindow) {
      setActiveWindow(appId);
    } else {
      setOpenWindows([...openWindows, { id: appId }]);
      setActiveWindow(appId);
    }
  };

  const handleWindowClose = (windowId) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(openWindows[openWindows.length - 2]?.id || null);
    }
  };

  const handleWindowMinimize = (windowId) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowId));
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleContextAction = (actionId) => {
    switch (actionId) {
      case 'about-os':
        alert(`${mockData.systemInfo.os}\nKernel: ${mockData.systemInfo.kernel}\nShell: ${mockData.systemInfo.shell}`);
        break;
      case 'terminal':
        handleAppOpen('skills');
        break;
      case 'wallpaper':
        setWallpaper((prev) => (prev + 1) % wallpapers.length);
        break;
      case 'system-info':
        alert(`System Information:\n\nOS: ${mockData.systemInfo.os}\nKernel: ${mockData.systemInfo.kernel}\nUptime: ${mockData.systemInfo.uptime}\nTerminal: ${mockData.systemInfo.terminal}`);
        break;
      default:
        break;
    }
  };

  const handlePowerClick = () => {
    const confirmed = window.confirm('Are you sure you want to restart the system?');
    if (confirmed) {
      window.location.reload();
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Desktop */}
      <div
        className="h-screen overflow-hidden transition-colors duration-300"
        style={{ background: wallpapers[wallpaper] }}
        onContextMenu={handleContextMenu}
      >
        {/* Top Bar */}
        <TopBar
          onActivitiesClick={() => setShowActivities(true)}
          onThemeToggle={() => setIsDark(!isDark)}
          isDark={isDark}
          onPowerClick={handlePowerClick}
        />

        {/* Dock */}
        <Dock
          onAppOpen={handleAppOpen}
          activeApps={openWindows.map(w => w.id)}
        />

        {/* Windows */}
        <div className="ml-16">
          {openWindows.map((window) => {
            const config = appConfigs[window.id];
            if (!config) return null;
            const AppComponent = config.component;

            return (
              <Window
                key={window.id}
                id={window.id}
                title={config.title}
                icon={config.icon}
                onClose={() => handleWindowClose(window.id)}
                onMinimize={() => handleWindowMinimize(window.id)}
                onFocus={() => setActiveWindow(window.id)}
                isActive={activeWindow === window.id}
                initialPosition={config.position}
                initialSize={config.size}
              >
                <AppComponent />
              </Window>
            );
          })}
        </div>

        {/* Activities Launcher */}
        <ActivitiesLauncher
          isOpen={showActivities}
          onClose={() => setShowActivities(false)}
          onAppOpen={handleAppOpen}
        />

        {/* Context Menu */}
        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            onClose={() => setContextMenu(null)}
            onAction={handleContextAction}
          />
        )}
      </div>
    </div>
  );
};

export default Desktop;
