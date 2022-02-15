declare interface Excersices {
  excersices: Excersice[];
}

declare interface Excersice {
  language: string;
  questions: Question[];
}

declare interface Question {
  choices: string[];
  correct_answer: string;
  question: string;
}
