export interface PasswordRule {
  rule: number;
  description: string;
  validatePassword: (passWordValue: string) => boolean;
}
