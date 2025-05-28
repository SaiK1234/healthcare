import React from 'react';

const NavItem = ({ title, icon, isActive }) => {
  const getIcon = (icon) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { className: 'w-5 h-5 mr-3' });
    }

    switch (icon) {
      case 'dashboard':
        return (
          <div className="w-5 h-5 mr-3">
            <div className="grid grid-cols-2 gap-0.5 w-full h-full">
              <div className={`${isActive ? 'bg-blue-600' : 'bg-gray-600'} rounded-sm`}></div>
              <div className={`${isActive ? 'bg-blue-600' : 'bg-gray-600'} rounded-sm`}></div>
              <div className={`${isActive ? 'bg-blue-600' : 'bg-gray-600'} rounded-sm`}></div>
              <div className={`${isActive ? 'bg-blue-600' : 'bg-gray-600'} rounded-sm`}></div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="w-5 h-5 mr-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'calendar':
        return (
          <div className="w-5 h-5 mr-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'stats':
        return (
          <div className="w-5 h-5 mr-3">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const classes = `
    flex items-center px-6 py-3
    ${isActive 
      ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600' 
      : 'text-gray-600 hover:bg-gray-50'
    }
  `;

  return (
    <a href="#" className={classes}>
      {getIcon(icon)}
      <span className={isActive ? 'font-medium' : ''}>{title}</span>
    </a>
  );
};

export default NavItem; 