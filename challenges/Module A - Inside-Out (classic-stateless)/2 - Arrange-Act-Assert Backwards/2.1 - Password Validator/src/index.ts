export class PasswordValidator {
    validate (password: string) {
        const errors = [{
            code: 'INVALID_LENGTH'
        }];

        if (/\d/.test(password) === false) {
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