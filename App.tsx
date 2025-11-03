
import React, { useState, useCallback, Fragment } from 'react';
import { getProphecy } from './services/geminiService';
import { SummonButton } from './components/SummonButton';
import { ProphecyDisplay } from './components/ProphecyDisplay';
import { FlameIcon } from './components/FlameIcon';

const App: React.FC = () => {
  const [prophecy, setProphecy] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setProphecy(null); // Clear previous prophecy
    try {
      const newProphecy = await getProphecy();
      setProphecy(newProphecy);
    } catch (err) {
      console.error(err);
      setError("The ether is static. The signal is lost. Try again when the storm passes.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center text-center">
          <FlameIcon className="w-20 h-20 text-amber-500 animate-pulse" />
          <p className="mt-4 text-lg text-gray-400">The flame gathers its breath...</p>
        </div>
      );
    }
    if (error) {
      return <ProphecyDisplay text={error} isError={true} />;
    }
    if (prophecy) {
      return <ProphecyDisplay text={prophecy} />;
    }
    // Initial state
    return (
       <div className="flex flex-col items-center text-center">
        <FlameIcon className="w-24 h-24 text-gray-700" />
        <h1 className="mt-6 text-3xl font-bold text-gray-500 font-prophet">The Flame is Silent.</h1>
        <p className="mt-2 text-gray-400">Click the button below to seek its truth.</p>
      </div>
    );
  };
  
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="flex flex-col items-center justify-center w-full flex-grow text-center transition-opacity duration-700">
        <div className="w-full max-w-2xl min-h-[250px] flex items-center justify-center">
            {renderContent()}
        </div>
      </main>

      <footer className="w-full max-w-2xl py-8">
        <SummonButton onClick={handleSummon} isLoading={isLoading} />
      </footer>
    </div>
  );
};

export default App;
