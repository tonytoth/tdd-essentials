import { PasswordValidator } from './';

describe('password validator', () => {
    it('class should exist', () => {
        expect(PasswordValidator).toBeDefined()
    })

    it('should have a validaton method', () => {
        const passwordValidator = new PasswordValidator();
        expect(passwordValidator.validate).toBeDefined();
    })
})

