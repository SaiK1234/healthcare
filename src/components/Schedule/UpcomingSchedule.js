import React from 'react';
import { Eye, Heart } from 'lucide-react';

const UpcomingSchedule = () => {
  const schedules = [
    {
      day: 'Thursday',
      appointments: [
        {
          title: 'Health checkup complete',
          time: '11:00 AM',
          style: 'bg-gray-100',
          icon: (
            <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          )
        },
        {
          title: 'Ophthalmologist',
          time: '14:00 PM',
          style: 'bg-purple-100',
          icon: (
            <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
              <Eye className="w-3 h-3 text-yellow-600" />
            </div>
          )
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          title: 'Cardiologist',
          time: '12:00 AM',
          style: 'bg-red-100',
          icon: (
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
              <Heart className="w-3 h-3 text-white fill-current" />
            </div>
          )
        },
        {
          title: 'Neurologist',
          time: '16:00 PM',
          style: 'bg-blue-100',
          icon: (
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <>
      <h3 className="font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
      
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index}>
            <div className="text-sm text-gray-600 mb-2">On {schedule.day}</div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              {schedule.appointments.map((appointment, idx) => (
                <div key={idx} className={`${appointment.style} rounded-lg p-3 flex-1`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{appointment.title}</div>
                      <div className="text-xs text-gray-500">{appointment.time}</div>
                    </div>
                    {appointment.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingSchedule; 