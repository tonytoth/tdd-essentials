import { MilitaryTimeValidator } from './';

describe('military time validator', () => {
    let militaryTimeValidator: MilitaryTimeValidator;

    beforeAll(() => {
        militaryTimeValidator = new MilitaryTimeValidator();
    })

    it('should exist', () => {
        expect(militaryTimeValidator).toBeDefined();
    })

    it('should have a validation method', () => {
        expect(militaryTimeValidator.validate).toBeDefined();
    })

    it('should be able to tell us that an empty string is not a valid military time range', () => {
        expect(militaryTimeValidator.validate("")).toBeFalsy();
    })

    it('should be able to tell us that "01:12 - 14:32" is a valid military time range', () => {
        expect(militaryTimeValidator.validate("01:12 - 14:32")).toBeTruthy();
    })

    it('should be able to tell us that "25:00 - 12:23" is not a valid military time range', () => {
        expect(militaryTimeValidator.validate("25:00 - 12:23")).toBeFalsy();
    })

    it('should be able to tell us that "19:00 - 24:00 is a valid military time range', () => {
        expect(militaryTimeValidator.validate("19:00 - 24:00")).toBeFalsy();
    })
})
