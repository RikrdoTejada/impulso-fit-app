import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validadores comunes y genéricos reutilizables en toda la aplicación
 */
export class CommonValidators {

static url(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const urlPattern = /^https?:\/\/.+/;
      return urlPattern.test(control.value) ? null : { invalidUrl: true };
    };
  }
}