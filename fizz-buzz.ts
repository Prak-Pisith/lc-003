// FizzBuzz

const fizzBuzz = (n: number): string[] => {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {

    const dividedByThree: boolean = i % 3 === 0;
    const dividedByFive: boolean = i % 5 === 0;

    if (dividedByThree && dividedByFive) {
      result.push('FizzBuzz');
    } else if (dividedByThree) {
      result.push('Fizz');
    } else if (dividedByFive) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

const n: number = 15;

const result = fizzBuzz(n);
console.log(result);