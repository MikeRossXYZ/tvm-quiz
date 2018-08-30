enum QuestionType {
  PvOrdinaryAmt,
  PvOrdinaryPmt,
  PvDueAmt,
  PvDuePmt,
  FvOrdinaryAmt,
  FvOrdinaryPmt,
  FvDueAmt,
  FvDuePmt,
}

// Constants
const MAX_PMT_AMT: number = 1000;
const MIN_PMT_AMT: number = 10;
const MAX_PV: number = 2000000;
const MIN_PV: number = 5000;
const MAX_FV: number = 3000000;
const MIN_FV: number = 10000;
const MAX_RATE: number = 0.089;
const MIN_RATE: number = 0.015;
const MAX_DURATION_YRS: number = 12;
const MIN_DURATION_YRS: number = 1;

// Financial formulas
function calcPvAnnuityOrd(pmt: number, rate: number, periods: number): number {
  return pmt * (1 - Math.pow(1 + rate, -periods)) / rate;
}
function calcPmtPvAnnuityOrd(pv: number, rate: number, periods: number): number {
  return pv / ((1 - Math.pow(1 + rate, -periods)) / rate);
}
function calcPvAnnuityDue(pmt: number, rate: number, periods: number): number {
  return pmt * (1 + rate) * ((1 - Math.pow(1 + rate, -periods)) / rate);
}
function calcPmtPvAnnuityDue(pv: number, rate: number, periods: number): number {
  return pv / ((1 + rate) * ((1 - Math.pow(1 + rate, -periods)) / rate));
}
function calcFvAnnuityOrd(pmt: number, rate: number, periods: number): number {
  return pmt * ((Math.pow(1 + rate, periods) - 1) / rate);
}
function calcPmtFvAnnuityOrd(fv: number, rate: number, periods: number): number {
  return fv / ((Math.pow(1 + rate, periods) - 1) / rate);
}
function calcFvAnnuityDue(pmt: number, rate: number, periods: number): number {
  return pmt * (1 + rate) * (( Math.pow(1 + rate, periods) - 1) / rate);
}
function calcPmtFvAnnuityDue(fv: number, rate: number, periods: number): number {
  return fv / ((1 + rate) * (( Math.pow(1 + rate, periods) - 1) / rate));
}

function roundTo(org: number, decimalPlaces?: number): number {
  return Math.round(org * Math.pow(10, decimalPlaces || 0)) / Math.pow(10, decimalPlaces || 0);
}

// Variable generators
function getAName(): string {
  const options = ['Mike', 'Robert', 'David', 'Patrica', 'Alexa', 'Erica'];
  return options[Math.floor(Math.random() * options.length)];
}

function getDurationTypePair(): [string, number] {
  const options: Array<[string, number]> = [['month', 12], ['year', 1]];
  const randIdx: number = Math.floor(Math.random() * options.length);
  return options[randIdx];
}

function getRate(minRate: number, maxRate: number): number {
  return Math.random() * (maxRate - minRate) + minRate;
}

function genVars(type: QuestionType, params?: {[key: string]: number}):
  {answer: number, variables: {[key: string]: any}} {
  // Define common variables for function
  const maxFV = params ? params.fvMax || MAX_FV : MAX_FV;
  const minFV = params ? params.fvMin || MIN_FV : MIN_FV;
  const maxPV = params ? params.pvMax || MAX_PV : MAX_PV;
  const minPV = params ? params.pvMin || MIN_PV : MIN_PV;
  const maxPmt = params ? params.pmtMax || MAX_PMT_AMT : MAX_PMT_AMT;
  const minPmt = params ? params.pmtMin || MIN_PMT_AMT : MIN_PMT_AMT;
  const maxRate = params ? params.rateMax || MAX_RATE : MAX_RATE;
  const minRate = params ? params.rateMin || MIN_RATE : MIN_RATE;
  const durationTypePair: [string, number] = getDurationTypePair();
  const periodTypePair: [string, number] = getDurationTypePair();
  const durationInYears: number =
    Math.round(Math.random() * (MAX_DURATION_YRS - MIN_DURATION_YRS) + MIN_DURATION_YRS);
  const fvAmount: number = roundTo((Math.random() * (maxFV - minFV) + minFV), 2);
  const pvAmount: number = roundTo((Math.random() * (maxPV - minPV) + minPV), 2);
  const pmtAmount: number = roundTo((Math.random() * (maxPmt - minPmt) + minPmt), 2);
  const rate: number = roundTo(getRate(minRate, maxRate), 3);

  // Calculate the answer depending on the question type
  let answer: number;
  switch (type) {
    case QuestionType.PvOrdinaryAmt: {
      answer = calcPvAnnuityOrd(pmtAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.PvOrdinaryPmt: {
      answer = calcPmtPvAnnuityOrd(pvAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.PvDueAmt: {
      answer = calcPvAnnuityDue(pmtAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.PvDuePmt: {
      answer = calcPmtPvAnnuityDue(pvAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.FvOrdinaryAmt: {
      answer = calcFvAnnuityOrd(pmtAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.FvOrdinaryPmt: {
      answer = calcPmtFvAnnuityOrd(fvAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.FvDueAmt: {
      answer = calcFvAnnuityDue(pmtAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    case QuestionType.FvDuePmt: {
      answer = calcPmtFvAnnuityDue(fvAmount, rate / periodTypePair[1], durationInYears * periodTypePair[1]);
      break;
    }
    default:
      answer = 0;
  }

  return {
    variables: {
      name: getAName(),
      fvAmount,
      pvAmount,
      pmtAmount,
      durationLength: (durationInYears * durationTypePair[1]).toFixed(0),
      durationType: durationTypePair[0],
      periodType: periodTypePair[0],
      rate: (100 * rate).toFixed(1),
    },
    answer,
  };
}

export {
  QuestionType,
  genVars,
};