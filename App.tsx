
import React, { useState } from 'react';
import Login from './components/Login';
import GiftContent from './components/GiftContent';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="transition-all duration-1000">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <GiftContent />
      )}
    </div>
  );
};

export default App;
