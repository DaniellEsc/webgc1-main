import { Injectable } from '@angular/core';
import { ERRORS_VALIDATION } from 'src/app/data/constants/errors/errors-validation.const';
import { ENUM_VALIDATION_OPTIONS } from 'src/app/data/enums';
import { IResponseValidation } from 'src/app/data/interfaces/services/iresponse-validation.metadata';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateField(value: any, type: ENUM_VALIDATION_OPTIONS) {
    switch (type) {
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmail(value);
      case ENUM_VALIDATION_OPTIONS.PASSWORD:
        return this.validatePassword(value);
    }
  }
  private validateEmail(v: any): IResponseValidation {
    const r: IResponseValidation = { message: '', isValid: true };
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    r.isValid = pattern.test(v);
    r.message = (v === '') ? ERRORS_VALIDATION.EMAIL_REQUIRED_FIELD : ERRORS_VALIDATION.EMAIL_INVALID_ID;
    return r;
  }

  private validatePassword(v: any): IResponseValidation {
    const r: IResponseValidation = { message: '', isValid: true };

    const pattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).(8,20)$/;
    r.isValid = pattern.test(v);
    r.message = (v === '') ? ERRORS_VALIDATION.PASSWORD_REQUIRED_FIELD : ERRORS_VALIDATION.PASSWORD_REQUIRED_PATTERN;
    return r;
  }
}
