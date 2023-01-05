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

    it('should be able to tell us that "01:12 - 14:32" is a valid military time', () => {
        expect(militaryTimeValidator.validate("01:12 - 14:32")).toBeTruthy();
    })

    it('should be able to tell us that "25:00 - 12:23" is not a valid military time', () => {
        expect(militaryTimeValidator.validate("25:00 - 12:23")).toBeFalsy();
    })
})
