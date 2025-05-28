import React from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Header = ({ onOpenMobileMenu }) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            className="p-2 mr-2 text-gray-600 rounded-lg md:hidden hover:bg-gray-100"
            onClick={onOpenMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mr-4 md:mr-8">Dashboard</h2>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
        
        <UserMenu />
      </div>

      {/* Search bar - visible only on mobile */}
      <div className="p-4 md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header; 