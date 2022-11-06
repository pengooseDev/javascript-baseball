/* Select Continue Option */
const isValidContinueOption = (option) => {
  if (option === '1') return true;
  if (option === '2') return false;

  throw new Error('옵션에 없는 값입니다.');
};

/* Check userInput is valid */
const isValidUserInput = (userInput) => {
  isValidLength(userInput);
  isValidNumber(userInput);
  isValidRange(userInput);
  isDuplicated(userInput);

  return true;
};

const isValidLength = (userInput) => {
  if (userInput.length === 3) return;

  throw new Error('세 개의 숫자만 입력해주세요.');
};

const isValidNumber = (userInput) => {
  if (!isNaN(userInput)) return;

  throw new Error('숫자만 입력해주세요.');
};

const isValidRange = (userInput) => {
  if (!userInput.includes(0)) return;

  throw new Error('0은 입력할 수 없는 숫자입니다.');
};

const isDuplicated = (userInput) => {
  const userInputArray = userInput.split('');
  const duplicatedNumbers = userInputArray.filter(
    (number, index) => userInputArray.indexOf(number) !== index,
  );
  if (duplicatedNumbers.length === 0) return;

  throw new Error('중복된 숫자는 사용할 수 없습니다.');
};

/* Compare UserNumbers with ComputerNumbers */
const checkAnswer = (userNumbers, computerNumbers) => {
  let strike = 0;
  let ball = 0;
  userNumbers.forEach((number) => {
    const sameIndex = isSameIndex(number, userNumbers, computerNumbers);
    if (!computerNumbers.includes(number)) return;

    if (sameIndex) return (strike += 1);

    ball += 1;
  });

  return { strike, ball };
};

const isSameIndex = (number, userNumbers, computerNumbers) => {
  const resultValue = userNumbers.indexOf(number) === computerNumbers.indexOf(number);

  return resultValue;
};

module.exports = { isValidContinueOption, isValidUserInput, checkAnswer };
