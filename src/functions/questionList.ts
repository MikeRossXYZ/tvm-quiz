import { QuestionType } from './genQuestionVariables';

const questionTemplates:
  Array<{
    type: QuestionType,
    difficulty: 'easy' | 'medium' | 'hard',
    template: (vs: {[key: string]: any}) => string,
    parameters?: {[key: string]: number},
  }> = [
  {
    type: QuestionType.PvOrdinaryAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} is offered $${vs.pmtAmount} ${vs.periodType}ly
      for the next ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}, with
      the first payment at the end of this ${vs.periodType}. The interest rate is
      ${vs.rate}% per annum. How much should ${vs.name} pay for this?`;
    },
  },
  {
    type: QuestionType.PvOrdinaryAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} is promised $${vs.pmtAmount} ${vs.periodType}ly
      for the next ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}, with the first
      payment at the end of this ${vs.periodType}. The interest rate is
      ${vs.rate}% per annum. How much is this worth to ${vs.name} today?`;
    },
  },
  {
    type: QuestionType.PvOrdinaryPmt,
    difficulty: 'easy',
    template: (vs) => {
      return `Laurier offers to accept your tuition in equal installments over the next
      ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}.
      Your tuition is $${vs.pvAmount}. The interest rate is ${vs.rate}% per annum.
      What is your ${vs.periodType}ly payment, paid at the end of each ${vs.periodType}?`;
    },
    parameters: {pvMax: 6000, pvMin: 4000},
  },
  {
    type: QuestionType.PvDueAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `For a birthday present, ${vs.name} is promised $${vs.pmtAmount} ${vs.periodType}ly
      for the next ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}, with the first
      payment at the beginning of this ${vs.periodType}. The interest rate is
      ${vs.rate}% per annum. How much is this worth to ${vs.name} today?`;
    },
  },
  {
    type: QuestionType.PvDueAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} is offered $${vs.pmtAmount} ${vs.periodType}ly
      for the next ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}, with
      the first payment at the beginning of this ${vs.periodType}. The interest rate is
      ${vs.rate}% per annum. How much should ${vs.name} pay for this?`;
    },
  },
  {
    type: QuestionType.PvDuePmt,
    difficulty: 'easy',
    template: (vs) => {
      return `You have just graduated with
      ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(vs.pvAmount)}
      in OSAP loans. You are required to pay off the balance within ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}.
      The interest rate on the loan is ${vs.rate}%, compounded ${vs.periodType}ly.
      What is your ${vs.periodType}ly payment, with the first payment due immediately?`;
    },
    parameters: {pvMax: 35000, pvMin: 20000},
  },
  {
    type: QuestionType.FvOrdinaryAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} just landed a job after graduation and wants to begin saving
      ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(vs.pmtAmount)}
      per ${vs.periodType}. After ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}, how much will have accumulated
      if the interest rate is ${vs.rate}%? Assume ${vs.name} begins to save at the end of this
      ${vs.periodType}.`;
    },
    parameters: {fvMax: 10000, fvMin: 5000},
  },
  {
    type: QuestionType.FvOrdinaryPmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} wants to go on a trip when finished university. The Cuban getaway
      is estimated to cost
      ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(vs.fvAmount)}.
      ${vs.name} will take the trip in
      ${vs.durationLength} ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}.
      How much must ${vs.name} save ${vs.periodType}ly, with
      the first deposit at the end of this ${vs.periodType}?
      The interest rate is ${vs.rate}% per annum.`;
    },
    parameters: { fvMax: 10000, fvMin: 5000 },
  },
  {
    type: QuestionType.FvDueAmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} is planning to retire in ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')} and wants to begin saving
      ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(vs.pmtAmount)}
      per ${vs.periodType}. How much will have accumulated by the time ${vs.name} retires
      if the interest rate is ${vs.rate}%? Assume ${vs.name} begins to save immediately.`;
    },
    parameters: { pmtMin: 100, pmtMax: 1000 },
  },
  {
    type: QuestionType.FvDuePmt,
    difficulty: 'easy',
    template: (vs) => {
      return `${vs.name} is engaged and wants to have a wedding with an estimated cost of
      ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(vs.fvAmount)}.
      ${vs.name} wants to get married in ${vs.durationLength}
      ${vs.durationType + (Number(vs.durationLength) > 1 ? 's' : '')}. How much does ${vs.name} need
      to save ${vs.periodType}ly in order to meet the goal? Assume an interest rate of
      ${vs.rate}% and the first deposit to be today.`;
    },
    parameters: { fvMin: 15000, fvMax: 40000 },
  },
];

export {
  questionTemplates,
};
