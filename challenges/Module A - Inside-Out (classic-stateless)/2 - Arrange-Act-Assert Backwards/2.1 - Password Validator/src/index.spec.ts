import { PasswordValidator } from './';

describe('password validator', () => {
    let passwordValidator: PasswordValidator;

    beforeEach(() => {
        passwordValidator = new PasswordValidator();
    })

    it('class should exist', () => {
        expect(PasswordValidator).toBeDefined()
    })

    it('should have a validaton method', () => {
        expect(passwordValidator.validate).toBeDefined();
    })

    it('should return an error object if the string is less then 5', () => {
        const result = passwordValidator.validate("mom");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        expect(result.errors[0].type).toEqual('INVALID_LENGTH');
    })

    it("should return an error object if the string doesn't have one digit and is less then 5", () => {
        const result = passwordValidator.validate("mom");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        expect(result.errors[1].type).toEqual('NO_DIGIT');
    })

    it("should return an error object if the string is longer then 15 characters", () => {
        const result = passwordValidator.validate("momisherewithyou");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        expect(result.errors[0].type).toEqual('INVALID_LENGTH');
    })

    it("should return an error object if the string does not contain one upper case letter", () => {
        const result = passwordValidator.validate("anotherstring");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        expect(result.errors[1].type).toEqual('NO_UPPERCASE_LETTER');
    })
})

