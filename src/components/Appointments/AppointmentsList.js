import React from 'react';

const AppointmentsList = () => {
  const appointments = [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr Cameron Williamson',
      type: 'dental',
      style: 'bg-blue-600 text-white'
    },
    {
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr Kevin Djones',
      type: 'physio',
      style: 'bg-purple-100 text-purple-800'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'dental':
        return (
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <div className="w-4 h-5 bg-white rounded-t-full"></div>
          </div>
        );
      case 'physio':
        return (
          <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {appointments.map((appointment, index) => (
        <div key={index} className={`${appointment.style} rounded-xl p-4`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{appointment.title}</div>
              <div className="text-sm opacity-90">{appointment.time}</div>
              <div className="text-sm opacity-90">{appointment.doctor}</div>
            </div>
            {getIcon(appointment.type)}
          </div>
        </div>
      ))}
    </>
  );
};

export default AppointmentsList; 