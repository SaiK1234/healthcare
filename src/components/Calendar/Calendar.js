import React from 'react';

const Calendar = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = ['25', '26', '27', '28', '29', '30', '31'];
  const timeSlots = [
    ['10:00', '08:00', '12:00', '10:00', '', '12:00', '09:00'],
    ['11:00', '09:00', '', '11:00', '14:00', '14:00', '10:00'],
    ['12:00', '10:00', '13:00', '', '16:00', '15:00', '11:00']
  ];

  return (
    <div className="p-4 rounded-lg" style={{ backgroundColor: '#F6FAFF',  }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">May 2025</h2>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600">&#8592;</button>
          <button className="text-gray-400 hover:text-gray-600">&#8594;</button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-1">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-sm mb-2">
        {dates.map((date, idx) => (
          <div
            key={idx}
            className={`py-1 rounded-lg ${
              date === '26'
                ? 'bg-blue-100 text-blue-800 font-bold'
                : date === '30'
                ? 'bg-purple-100 text-purple-700 font-medium'
                : 'text-gray-700'
            }`}
          >
            {date}
          </div>
        ))}
      </div>

      <div className="space-y-2 text-xs">
        {timeSlots.map((slots, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-7 gap-1">
            {slots.map((time, colIdx) => {
              const isSelected = rowIdx === 1 && colIdx === 1; // 09:00 blue selected
              const isPurpleSlot =
                time && (time === '11:00' || time === '12:00' || time === '14:00' || time === '15:00');

              return (
                <div
                  key={colIdx}
                  className={`text-center py-0.5 rounded-lg ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : isPurpleSlot
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-500'
                  }`}
                >
                  {time || '—'}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
