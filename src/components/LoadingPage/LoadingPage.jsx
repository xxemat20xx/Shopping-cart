import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white via-orange-50 to-yellow-100">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
       
          <div className="absolute inset-0 rounded-full bg-orange-400 opacity-30 blur-xl animate-ping" />

       
          <div className="w-20 h-20 border-[6px] border-orange-400 border-t-transparent border-b-transparent rounded-full animate-spin shadow-lg" />

     
        </div>

        <p className="text-xl font-medium text-gray-400 animate-pulse tracking-wide">
          Product Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
