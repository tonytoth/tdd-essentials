import { ErrorType, PasswordValidator } from './';

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

        expect(result.errors).toEqual(
            expect.arrayContaining([
                { type: ErrorType.invalidLength }
            ])
        )
    })

    it("should return an error object if the string doesn't have one digit and is less then 5", () => {
        const result = passwordValidator.validate("mom");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);

        expect(result.errors).toEqual(
            expect.arrayContaining([
                { type: ErrorType.noDigit }
            ])
        )
    })

    it("should return an error object if the string is longer then 15 characters", () => {
        const result = passwordValidator.validate("momisherewithyou");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);
        
        expect(result.errors).toEqual(
            expect.arrayContaining([
                { type: ErrorType.invalidLength }
            ])
        )
    })

    it("should return an error object if the string does not contain one upper case letter", () => {
        const result = passwordValidator.validate("anotherstring");

        expect(result.success).toBeFalsy();
        expect(result.errors.length).toBeGreaterThanOrEqual(1);

        expect(result.errors).toEqual(
            expect.arrayContaining([
                { type: ErrorType.noUppercaseLetter }
            ])
        )
    })

    it("should return an success object if the string is passing all validation rules", () => {
        const result = passwordValidator.validate("AnotherString1");

        expect(result.success).toBeTruthy();
        expect(result.errors.length).toBe(0);
    })
})

