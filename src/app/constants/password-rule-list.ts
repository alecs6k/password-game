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
      const regex: RegExp = /[IVXLCDM]/;
      return regex.test(pwd);
    }
  },
  {
    rule: 8,
    description: 'Your password must include a like emoji',
    validatePassword: (pwd: string): boolean => pwd.includes("👍")
  }
];
