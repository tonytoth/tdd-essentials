export enum ErrorType {
    invalidLength = "INVALID_LENGTH",
    noDigit = "NO_DIGIT",
    noUppercaseLetter = "NO_UPPERCASE_LETTER"
}

interface Error {
    type: string;
    message?: string;
}

export interface ValidatedResponse {
    success: boolean;
    errors: Error[];
}

export class PasswordValidator {
    validate(password: string): ValidatedResponse {
        const passwordIsLessThen5 = password.length < 5;
        const passwordIsLongerThen15 = password.length > 15;
        const doesNotContainOneDigit = /\d/.test(password) === false;
        const doesNotContainUppercaseLetter = /[A-Z]/.test(password) == false;

        const errors = [];

        if (passwordIsLessThen5 || passwordIsLongerThen15) {
            errors.push({
                type: ErrorType.invalidLength
            })
        }

        if (doesNotContainOneDigit) {
            errors.push({
                type: ErrorType.noDigit
            })
        }

        if (doesNotContainUppercaseLetter) {
            errors.push({
                type: ErrorType.noUppercaseLetter
            })    
        }
        
        const thereAreNoErrors = errors.length === 0;

        return {
            success: thereAreNoErrors,
            errors
        }
    }
}