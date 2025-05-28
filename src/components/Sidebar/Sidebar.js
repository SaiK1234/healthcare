import React from 'react';
import { Calendar, MessageCircle, HelpCircle, Settings } from 'lucide-react';
import NavItem from './NavItem';
import Logo from './Logo';

const Sidebar = ({ isMobileMenuOpen, onCloseMobileMenu }) => {
  const generalMenuItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      isActive: true
    },
    {
      title: 'History',
      icon: 'history'
    },
    {
      title: 'Calendar',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: 'Appointments',
      icon: 'calendar'
    },
    {
      title: 'Statistics',
      icon: 'stats'
    }
  ];

  const toolsMenuItems = [
    {
      title: 'Chat',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      title: 'Support',
      icon: <HelpCircle className="w-5 h-5" />
    }
  ];

  const sidebarClasses = `
    w-64 bg-white shadow-sm flex flex-col fixed h-screen z-30
    md:translate-x-0 transition-transform duration-300
    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
            onClick={onCloseMobileMenu}
          />
          <style jsx global>{`
            body { overflow: hidden; }
          `}</style>
        </>
      )}

      <div className={sidebarClasses}>
        <div className="p-6">
          <Logo />
        </div>
        
        <div className="flex-1 md:overflow-visible overflow-y-auto">
          <nav>
            <div className="px-6 mb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">GENERAL</p>
            </div>
            
            <div className="space-y-1">
              {generalMenuItems.map((item) => (
                <NavItem 
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  isActive={item.isActive}
                />
              ))}
            </div>
            
            <div className="px-6 mt-8 mb-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">TOOLS</p>
            </div>
            
            <div className="space-y-1">
              {toolsMenuItems.map((item) => (
                <NavItem 
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-gray-100 p-4 bg-white mt-auto">
          <a href="#" className="flex items-center text-gray-600 hover:bg-gray-50 p-2 rounded">
            <Settings className="w-5 h-5 mr-3" />
            <span>Setting</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 