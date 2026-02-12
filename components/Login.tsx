
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === 'autumn') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/50 z-20 transition-all transform hover:scale-[1.01]">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">Welcome</h1>
          <p className="text-amber-700/80 font-medium">Please enter your name to unlock this little gift.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full px-6 py-4 rounded-2xl bg-white/80 border-2 outline-none transition-all duration-300 font-medium text-amber-900 ${
                error ? 'border-red-400 shake shadow-red-100' : 'border-orange-100 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100'
              }`}
            />
            {error && (
              <p className="absolute -bottom-6 left-2 text-xs text-red-500 font-semibold italic">
                Only your special name can unlock this...
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 transform"
          >
            Unlock My Gift
          </button>
        </form>

        <p className="mt-8 text-center text-amber-900/40 text-sm font-medium italic">
          Hints of golden leaves await you
        </p>
      </div>

      <style>{`
        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Login;
