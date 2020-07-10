export const getPrimes = (to: number) => {
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
