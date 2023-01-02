export class PasswordValidator {
    validate (password: string) {
        return {
            success: false,
            errors: [
                {
                    code: 'INVALID_LENGTH'
                }
            ]
        }
    }
}