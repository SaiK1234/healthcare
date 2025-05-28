import React from 'react';

const ActivityChart = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getRandomHeight = (min, max) => {
    return min + Math.random() * (max - min);
  };

  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">Activity</h3>
        <div className="text-sm text-gray-500">3 appointments this week</div>
      </div>

      <div className="h-[200px] lg:h-[240px] border-t border-gray-200 pt-4 overflow-x-auto">
        <div className="flex items-end justify-between h-full min-w-[500px] lg:min-w-0">
          {days.map((day) => (
            <div key={day} className="flex flex-col items-center flex-1 min-w-[60px] lg:min-w-0">
              <div className="flex-1 flex flex-col justify-end w-full">
                <div className="flex items-end justify-center space-x-1">
                  <div 
                    className="w-2 sm:w-3 bg-[#0DBBFC] rounded-t transition-all duration-300" 
                    style={{ height: `${getRandomHeight(40, 100)}px` }}
                  ></div>
                  <div 
                    className="w-2 sm:w-3 bg-[#2B3674] rounded-t transition-all duration-300" 
                    style={{ height: `${getRandomHeight(40, 100)}px` }}
                  ></div>
                  <div 
                    className="w-2 sm:w-3 bg-[#6C49FF] rounded-t transition-all duration-300" 
                    style={{ height: `${getRandomHeight(40, 100)}px` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-2">{day}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#0DBBFC] rounded mr-2"></div>
          <span className="text-sm text-gray-600">Checkups</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#2B3674] rounded mr-2"></div>
          <span className="text-sm text-gray-600">Appointments</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#6C49FF] rounded mr-2"></div>
          <span className="text-sm text-gray-600">Tests</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
