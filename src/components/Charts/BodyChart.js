import React from 'react';
import { Heart} from 'lucide-react';

const BodyChart = () => {
  const healthStats = [
    {
      title: 'Lungs',
      date: 'Checkup - 06 Oct, 2021',
      progress: 85,
      color: 'red',
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/disrohkeg/image/upload/v1748328825/lungs_iirr4l.png"
            alt="Lungs"
            className="w-6 h-6 object-contain"
          />
        </div>
      )
    },
    {
      title: 'Teeth',
      date: 'Dentist - 06 Oct, 2021',
      progress: 70,
      color: 'cyan',
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/disrohkeg/image/upload/v1748328825/teeth_urpjsv.webp"
            alt="Teeth"
            className="w-6 h-6 object-contain"
          />
        </div>
      )
    },
    {
      title: 'Bone',
      date: 'Doctor - 06 Oct, 2021',
      progress: 60,
      color: 'orange',
      icon: (
        <div className="w-8 h-8 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/disrohkeg/image/upload/v1748328825/bone_sluiya.png"
            alt="Bone"
            className="w-6 h-6 object-contain"
          />
        </div>
      )
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="font-semibold" style={{ color: '#16235F', fontSize: '24px' }}>Dashboard</div>
        <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">This Week</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        {/* Human Body Image */}
        <div className="w-full md:w-[70%] relative mb-6 md:mb-0">
          <div className="relative h-72 md:h-96 mx-auto flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-md bg-[#F6FAFF] w-[350px] h-[370px] flex items-center rounded-[20px]">
                <img 
                  src="https://res.cloudinary.com/disrohkeg/image/upload/v1748263209/body-img-removebg-preview_jnx6j3.png"
                  alt="Human Body"
                  className="w-full h-full object-contain max-h-[350px]"
                />
                
                {/* Healthy Heart badge */}
                <div className="absolute top-16 right-1 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs flex items-center" >
                  <Heart className="w-3 h-3 mr-1 fill-current" />
                  Healthy Heart
                </div>
              </div>
            </div>
            
            {/* Health Log button */}
            <button className="absolute top-56 right-46 left-40 transform -translate-x-1/2 bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500 transition-colors">
              Healthy Log
            </button>
          </div>
        </div>

        {/* Health Stats */}
        <div className="w-full md:w-[30%] space-y-4" >
          {healthStats.map((stat, index) => (
            <div key={index} className="w-full bg-white p-4 rounded-[20px] border border-gray-100 bg-[#F6FAFF]">
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 bg-${stat.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                  {stat.icon}
                </div>
                <div > 
                  <div className="font-semibold text-gray-800">{stat.title}</div>
                  <div className="text-xs text-gray-500">{stat.date}</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                        className={`h-2 rounded-full transition-all duration-300`}
                        style={{
                          width: `${stat.progress}%`,
                          backgroundColor:
                            stat.color === 'red' ? '#EF4444' :
                            stat.color === 'cyan' ? '#06B6D4' :
                            '#F97316'
                        }}
                      />

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="text-blue-600 text-sm hover:underline">Details →</button>
      </div>
    </>
  );
};

export default BodyChart; 