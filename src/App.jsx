import React from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-72 md:ml-72">
        <MobileNav />
      </div>
    </div>
  );
};

export default App; // ✅ Make sure this line exists!
