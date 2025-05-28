import React, { useState } from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';
import Sidebar from './Sidebar/Sidebar';
import BodyChart from './Charts/BodyChart';
import ActivityChart from './Charts/ActivityChart';
import Calendar from './Calendar/Calendar';
import AppointmentsList from './Appointments/AppointmentsList';
import UpcomingSchedule from './Schedule/UpcomingSchedule';

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E2EBF8] p-2 sm:p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-[20px] min-h-[calc(100vh-48px)]">
        {/* Mobile Menu and Profile Row */}
        <div className="lg:hidden flex items-center justify-between p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Profile Section for Mobile */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-[#0DBBFC] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://res.cloudinary.com/disrohkeg/image/upload/v1748337429/avatar_uz5elv.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-9 h-9 bg-[#2B3674] rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Sidebar - 20% */}
        <div className={`
          fixed inset-0 z-20 bg-white lg:static lg:w-[20%] transition-transform duration-300 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
        `} style={{borderRadius: '20px'}}>
          <Sidebar 
            isMobileMenuOpen={isMobileMenuOpen} 
            onCloseMobileMenu={() => setIsMobileMenuOpen(false)}  
          />
        </div>

        {/* Main Content - 45% */}
        <div className="w-full lg:w-[45%] min-h-0">
          {/* Header Row */}
          <div className="p-4 lg:p-6 pb-4">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-12 py-2 border border-gray-100 rounded-lg text-sm outline-none"
              />
              {/* Bell Icon */}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#2B3674] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Body Chart Section */}
          <div className="px-4 lg:px-6 mb-6">
            <BodyChart />
          </div>

          {/* Activity Chart */}
          <div className="px-4 lg:px-6">
            <ActivityChart />
          </div>
        </div>

        {/* Right Section - 35% */}
        <div className="w-full lg:w-[35%] bg-[#F6FAFF] lg:rounded-r-[20px]">
          {/* Profile Section - Only visible on desktop */}
          <div className="hidden lg:flex justify-end p-4 lg:p-6 mb-4 lg:mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#0DBBFC] rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/disrohkeg/image/upload/v1748337429/avatar_uz5elv.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="w-9 h-9 bg-[#2B3674] rounded-full flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Calendar */}
          <div className="px-4 lg:px-6">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <Calendar />
            </div>

            {/* Appointments */}
            <div className="space-y-4 mb-6">
              <AppointmentsList />
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6 lg:mb-0">
              <UpcomingSchedule />
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;