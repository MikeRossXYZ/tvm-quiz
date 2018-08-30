import { questionTemplates } from './questionList';
import { genVars } from './genQuestionVariables';

function generateQuestionAndAnswer(disallowedTypes: string[]): [string, number] {
  // TODO: Randomly select one of the allowed types of questions
  const randIdx = Math.floor(Math.random() * questionTemplates.length);
  // Generate the question text and answer(s)
  const question = questionTemplates[randIdx];
  const calculatedQuestion = genVars(question.type, question.parameters);
  const questionText = question.template(calculatedQuestion.variables);
  const answer = calculatedQuestion.answer;
  return [questionText, answer];
}

export {
  generateQuestionAndAnswer,
};
