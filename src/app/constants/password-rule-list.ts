import {PasswordRule} from "../interfaces/password.rule.interface";

export const rulesList: PasswordRule[] = [
  {
    rule: 1,
    description: 'Your password must be at least 5 characters.',
    validatePassword: (pwd: string): boolean => pwd.length >= 5
  },
  {
    rule: 2,
    description: 'Your password must include a number.',
    validatePassword: (pwd: string): boolean => /\d/.test(pwd)
  },
  {
    rule: 3,
    description: 'Your password must include an uppercase letter.',
    validatePassword: (pwd: string): boolean => /[A-Z]/.test(pwd)
  },
  {
    rule: 4,
    description: 'Your password must include a special character.',
    validatePassword: (pwd: string): boolean => /[^a-zA-Z0-9]/.test(pwd)
  },
  {
    rule: 5,
    description: 'The digits in your password must add up to 25.',
    validatePassword: (pwd: string): boolean => {
      const digits: RegExpMatchArray | null = pwd.match(/\d/g);
      if (!digits) {
        return false;
      }
      const sum: number = digits.map(Number).reduce((a, b) => a + b, 0);
      return sum === 25;
    }
  },
  {
    rule: 6,
    description: 'Your password must include a any month of the year.',
    validatePassword: (pwd: string): boolean => {
      {
        const months: string[] = [
          'january', 'february', 'march', 'april', 'may', 'june',
          'july', 'august', 'september', 'october', 'november', 'december'
        ];

        return months.some(month => pwd.toLowerCase().includes(month));
      }
    }
  },
  {
    rule: 7,
    description: 'Your password must include a roman numeral.',
    validatePassword: (pwd: string): boolean => {
      const regex: RegExp = /\b(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))\b/i;
      return regex.test(pwd);
    }
  },
  {
    rule: 8,
    description: 'The roman numerals in your password should multiply to 35.',
    validatePassword: (pwd: string): boolean => {
      const regex: RegExp = /\b(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))\b/i;
      const match = pwd.match(regex);

      if (!match) return false;

      const roman = match[0].toUpperCase();
      const value = romanToInt(roman);
      return value % 35 === 0;
    }
  }
];

const romanToInt = (roman: string): number => {
  const map: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };
  let total = 0, prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const curr = map[roman[i]];
    total += (curr < prev) ? -curr : curr;
    prev = curr;
  }

  return total;
};
