import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  initialSeconds?: number;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds = 10 }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      if (interval) clearInterval(interval);
      setIsRunning(false);
      audioRef.current?.play(); // Play sound when done
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds]);

  const startTimer = () => {
    setSeconds(initialSeconds);
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">⏰ Countdown Timer</h1>
      <div className="text-6xl font-bold text-emerald-600 mb-4">{seconds}s</div>
      <button
        onClick={startTimer}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition"
      >
        Start Timer
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef}>
        <source src="https://www.soundjay.com/button/beep-07.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Timer;
