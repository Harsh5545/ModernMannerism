import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Admin Dashboard</div>
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium">Bhavishm009@gmail.com</div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">Logout</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
