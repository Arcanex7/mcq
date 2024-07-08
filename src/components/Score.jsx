
import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Game Over</h2>
      <p className="text-lg">
        You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{total}</span>
      </p>
    </div>
  );
};

export default Score;
