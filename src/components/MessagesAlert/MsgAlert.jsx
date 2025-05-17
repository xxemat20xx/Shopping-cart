import React from 'react'

const MsgAlert = ({ message = "Success!", type = "success" }) => {
  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className={`fixed bottom-5 right-5 z-[9999] ${getAlertStyle()} text-white px-6 py-3 rounded-lg shadow-lg`}>
      <p className="font-medium text-lg">{message}</p>
    </div>
  )
}

export default MsgAlert