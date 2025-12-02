import { DATA } from './constants';
import { VocabItem, QuizQuestion } from './types';

// Fisher-Yates shuffle algorithm
export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  let currentIndex = arr.length, randomIndex;
  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

export function generateQuiz(): QuizQuestion[] {
  const allVocab: VocabItem[] = [];
  // Collect all vocabulary items
  for (const key in DATA) {
    allVocab.push(...DATA[key].items);
  }

  const shuffledVocab = shuffle(allVocab);
  // Select 10 unique items
  const quizItems = shuffledVocab.slice(0, 10);

  return quizItems.map(item => {
    const correct = item.es;
    
    // Default Question Type: Translate Word
    let questionText = `Traduce la palabra: "${item.it}"`;
    let correctAnswer = correct;
    let distractorSource = allVocab.map(v => v.es);

    // 50% chance for "Phrase Meaning" question if phrase exists
    if (Math.random() < 0.5 && item.fraseIt && item.fraseEs) {
      questionText = `Si alguien dice: "${item.fraseIt}", ¿cuál es el significado más cercano?`;
      correctAnswer = item.fraseEs;
      distractorSource = allVocab
        .filter(v => v.fraseEs)
        .map(v => v.fraseEs as string);
    }

    // Generate Distractors
    // Exclude correct answer
    const pool = distractorSource.filter(ans => ans !== correctAnswer);
    // Shuffle and pick 2
    const incorrectOptions = shuffle(pool).slice(0, 2);
    
    // Fill if not enough options (fallback)
    while (incorrectOptions.length < 2) {
        incorrectOptions.push("Respuesta alternativa");
    }

    const options = shuffle([...incorrectOptions, correctAnswer]);

    return {
      question: questionText,
      correctAnswer: correctAnswer,
      options: options
    };
  });
}
