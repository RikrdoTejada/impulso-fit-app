import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Conjunto de validadores reutilizables para el módulo de registro/auth
 */
export class RegisterValidators {

  // Validador para contraseñas que coinciden dentro de un FormGroup
  static passwordMatch(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordField)?.value;
      const confirmPassword = formGroup.get(confirmPasswordField)?.value;

      if (password == null || confirmPassword == null) return null;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  // Validador para contraseña fuerte (requisitos de seguridad)
  static strongPassword(minLength = 8): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasMinLength = value.length >= minLength;

  // Validador para formato de correo electrónico (requiere TLD, e.g. .com)
  static email(): ValidatorFn {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value == null || value === '') return null;
      return EMAIL_REGEX.test(value) ? null : { email: true };
    };
  }

  // Validador para contraseñas que coinciden en un FormGroup
  static passwordMatch(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordField)?.value;
      const confirmPassword = formGroup.get(confirmPasswordField)?.value;

      if (password == null || confirmPassword == null) return null;

      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

}

export default RegisterValidators;
