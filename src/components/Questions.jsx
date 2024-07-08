
import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <ul className="w-full">
        {options.map((option, index) => (
          <li 
            key={index} 
            onClick={() => onAnswer(option)} 
            className="bg-blue-500 text-white p-2 my-2 rounded cursor-pointer hover:bg-green-700 transition duration-300"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
