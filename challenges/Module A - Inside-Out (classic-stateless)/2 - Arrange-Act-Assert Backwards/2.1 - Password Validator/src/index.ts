interface Error {
    type: string;
    message?: string;
}

export interface ValidatedResponse {
    success: boolean;
    errors: Error[];
}

export class PasswordValidator {
    validate (password: string): ValidatedResponse {
        const passwordIsLessThen5 = password.length < 5;
        const passwordIsLongerThen15 = password.length > 15;
        const doesNotContainOneDigit = /\d/.test(password) === false;
        const doesContainUppercaseLetter = /[A-Z]/.test(password) == false;

        const errors = [];

        if (passwordIsLessThen5 || passwordIsLongerThen15) {
            errors.push({
                type: 'INVALID_LENGTH'
            })
        }

        if (doesNotContainOneDigit) {
            errors.push({
                type: 'NO_DIGIT'
            })
        }

        if (doesContainUppercaseLetter) {
            errors.push({
                type: 'NO_UPPERCASE_LETTER'
            })    
        }
        
        return {
            success: false,
            errors
        }
    }
}