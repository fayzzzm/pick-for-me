const getRandomNumber = <K extends 'string' | 'number'>(length: number, type: K) => {
  const number = Math.random() * 10 ** length;
  if (type === 'string') {
    return String(number);
  } else {
    return number;
  }
};

const getPrimes = (to: number) => {
  const primes: number[] = [];
  const notprime: boolean[] = [];

  for (let i = 2; i <= to; i++) {
    if (!notprime[i]) {
      primes.push(i);
      for (let j = i ** 2; j <= to; j += i) notprime[j] = true;
    }
  }

  return primes;
};

export = {
  getRandomNumber,
  getPrimes,
};
