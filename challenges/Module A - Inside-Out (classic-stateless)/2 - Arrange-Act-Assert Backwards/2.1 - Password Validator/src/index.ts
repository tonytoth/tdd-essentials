export class PasswordValidator {
    validate (password: string) {
        const passwordIsLessThen5 = password.length < 5;
        const passwordIsLongerThen15 = password.length > 15;
        const doesNotContainOneDigit = /\d/.test(password) === false;

        const errors = [];

        if (passwordIsLessThen5 || passwordIsLongerThen15) {
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