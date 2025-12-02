import React, { useState, useEffect } from 'react';
import { generateQuiz } from '../utils';
import { QuizQuestion } from '../types';

export const QuizView: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // State for answer interaction
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    setQuestions(generateQuiz());
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    setIsAnswered(true);
    setSelectedOption(option);
    
    const currentQ = questions[currentIndex];
    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Auto advance
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        resetQuestionState();
      } else {
        setIsFinished(true);
      }
    }, 1200);
  };

  // Rendering Results
  if (isFinished) {
    const percentage = (score / questions.length) * 100;
    let feedback = '';
    if (percentage >= 80) {
        feedback = '¡Felicidades! Tienes un excelente dominio del vocabulario. ¡Sigue así!';
    } else if (percentage >= 50) {
        feedback = '¡Buen trabajo! Estás en el camino correcto. Revisa las tarjetas que fallaste.';
    } else {
        feedback = 'Necesitas un poco más de práctica. Vuelve a explorar las tarjetas de vocabulario.';
    }

    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#1E3A8A] text-center">
        <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">Test Completado</h3>
        <p className="text-2xl mb-4">Tu puntuación final es:</p>
        <p className="text-6xl font-extrabold text-[#3B82F6] mb-2">{score}/{questions.length}</p>
        <p className="text-lg text-gray-700 mb-6">({percentage.toFixed(0)}%)</p>
        <p className="mt-6 text-xl text-gray-800 font-medium mb-8">{feedback}</p>
        
        <div className="pt-6 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-[#3B82F6] mb-4">¡Lleva tu inglés al siguiente nivel!</h4>
            <p className="text-lg text-gray-700 mb-6">¿Quieres dominar estas palabras y muchas más con fluidez? Nuestro curso digital te espera.</p>
            <a href="https://go.hotmart.com/C103156556U" target="_blank" rel="noreferrer" className="block w-full text-center bg-[#3B82F6] text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:bg-[#2563EB] transition-colors text-xl mb-6">
                📚 Iniciar Curso Digital
            </a>
            
            <button 
              onClick={startQuiz}
              className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 transition-colors"
            >
                Reiniciar Test
            </button>
        </div>
      </div>
    );
  }

  // Rendering Question
  const currentQ = questions[currentIndex];
  if (!currentQ) return <div className="text-center p-10">Cargando test...</div>;

  return (
    <section className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg border-t-4 border-[#1E3A8A]">
      <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4 text-center">🧠 Test de Vocabulario</h2>
      
      <div className="mb-6">
        <p className="text-lg font-bold mb-4">Pregunta {currentIndex + 1} de {questions.length}</p>
        <p className="text-xl mb-6 font-semibold text-[#1E3A8A]">{currentQ.question}</p>
        
        <div className="flex flex-col space-y-3">
          {currentQ.options.map((option, idx) => {
            // Determine styles based on state
            let optionClass = "w-full text-left p-3 mb-1 bg-gray-100 rounded-lg cursor-pointer transition-colors duration-200 shadow-sm border-2 border-transparent";
            
            if (isAnswered) {
              if (option === currentQ.correctAnswer) {
                optionClass = "w-full text-left p-3 mb-1 bg-green-100 rounded-lg shadow-lg border-2 border-green-500";
              } else if (option === selectedOption) {
                optionClass = "w-full text-left p-3 mb-1 bg-red-100 rounded-lg shadow-lg border-2 border-red-500";
              } else {
                optionClass = "w-full text-left p-3 mb-1 bg-gray-50 opacity-50 border-2 border-transparent";
              }
            } else {
              optionClass += " hover:bg-gray-200";
            }

            return (
              <button 
                key={idx} 
                className={optionClass}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 h-6">
        <p className="text-sm font-semibold text-gray-600">
            {isAnswered 
              ? `Puntuación: ${score} ${selectedOption === currentQ.correctAnswer ? '(¡Correcto!)' : '(Incorrecto)'}` 
              : `Puntuación actual: ${score}`}
        </p>
      </div>
    </section>
  );
};
