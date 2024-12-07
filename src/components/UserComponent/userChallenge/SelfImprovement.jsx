"use client";

import React, { useState, useEffect } from 'react';

const SelfImprovementChallenge = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(30); // 30 seconds timer

  const questions = [
    {
      question: "What is the correct form of 'to be' in the present tense for 'he'?",
      options: ["am", "is", "are"],
      answer: "is",
    },
    {
      question: "Which of the following is a sign of emotional intelligence?",
      options: ["Ignoring others' feelings", "Empathizing with others", "Being overly critical"],
      answer: "Empathizing with others",
    },
    {
      question: "What should you do when receiving a business card?",
      options: ["Put it in your pocket immediately", "Read it and acknowledge the person", "Throw it away"],
      answer: "Read it and acknowledge the person",
    },
    {
      question: "What is the best way to handle criticism?",
      options: ["Ignore it", "Take it personally", "Reflect and learn from it"],
      answer: "Reflect and learn from it",
    },
    {
      question: "In a business meeting, what is the appropriate way to address someone?",
      options: ["By their first name", "By their title and last name", "By their nickname"],
      answer: "By their title and last name",
    },
  ];

  useEffect(() => {
    if (timer > 0 && !isGameOver) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsGameOver(true);
    }
  }, [timer, isGameOver]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsGameOver(false);
    setTimer(30);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Self-Improvement Challenge</h1>
        <div className="mb-4 text-center">
          <p className="text-lg">Time Left: {timer} seconds</p>
          <p className="text-lg">Score: {score}/{questions.length}</p>
        </div>
        {isGameOver ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Game Over!</h2>
            <h3 className="text-xl mb-2">Your final score: {score}/{questions.length}</h3>
            <button onClick={resetGame} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl mb-4">{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-blue-500 text-white p-2 rounded w-full mb-2 hover:bg-blue-600"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelfImprovementChallenge;