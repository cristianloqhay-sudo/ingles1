export interface VocabItem {
  it: string;
  pron: string;
  es: string;
  context: string;
  fraseIt?: string;
  fraseEs?: string;
  frasePron?: string;
  color?: string;
  text?: 'white' | 'black';
  border?: boolean;
  icon?: string;
}

export interface Category {
  title: string;
  desc: string;
  items: VocabItem[];
}

export type CategoryKey = 
  | 'saludos'
  | 'presentacion'
  | 'numeros'
  | 'colores'
  | 'animales'
  | 'viajes'
  | 'clima';

export type ViewState = 'home' | 'quiz' | CategoryKey;

export interface DataStore {
  [key: string]: Category;
}

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}
