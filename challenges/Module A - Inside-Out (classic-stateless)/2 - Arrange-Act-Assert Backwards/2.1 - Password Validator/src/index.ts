export class PasswordValidator {
    validate (password: string) {
        const lengthIsLessThen5 = password.length < 5;
        const doesNotContainOneDigit = /\d/.test(password) === false;

        const errors = [];

        if (lengthIsLessThen5) {
            errors.push({
                code: 'INVALID_LENGTH'
            })
        }

        if (doesNotContainOneDigit) {
            errors.push({
                code: 'NO_DIGIT'
            })
        }
        
        return {
            success: false,
            errors
        }
    }
}