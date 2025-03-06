const getRandomTSCode = () => {
  const codes = ['123', '456', '789', '098', 'abc'];
  return codes[Math.floor(Math.random() * codes.length)];
};

console.log(getRandomTSCode());