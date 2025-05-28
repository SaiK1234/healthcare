import React from 'react';
import { Bell, Plus } from 'lucide-react';

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <button className="relative p-2">
        <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
        <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full"></div>
      </button>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-400 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">JD</span>
        </div>
        <button className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default UserMenu; 