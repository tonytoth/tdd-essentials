import { PasswordValidator } from './';

describe('password validator', () => {
    it('class should exist', () => {
        expect(PasswordValidator).toBeDefined()
    })

    it('should have a validaton method', () => {
        const passwordValidator = new PasswordValidator();
        expect(passwordValidator.validate).toBeDefined();
    })

    it('should return an error object if the string is less then 5', () => {
        const passwordValidator = new PasswordValidator();
        
        const result = passwordValidator.validate("mom");

        expect(result.success).toBeFalsy();
        expect(result.errors[0].code).toEqual('INVALID_LENGTH');
    })

    it("should return an error object if the string doesn't have one digit and is less then 5", () => {
        const passwordValidator = new PasswordValidator();
        
        const result = passwordValidator.validate("mom");

        expect(result.success).toBeFalsy();
        expect(result.errors[1].code).toEqual('NO_DIGIT');
    })
})

