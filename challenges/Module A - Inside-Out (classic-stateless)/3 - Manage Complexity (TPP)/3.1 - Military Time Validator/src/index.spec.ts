import { MilitaryTimeValidator } from './';

describe('military time validator', () => {
    it('should exist', () => {
        const militaryTimeValidator = new MilitaryTimeValidator();

        expect(militaryTimeValidator).toBeDefined();
    })

    it('should have a validation method', () => {
        const militaryTimeValidator = new MilitaryTimeValidator();

        expect(militaryTimeValidator.validate).toBeDefined();
    })

    it('should be able to tell us that "01:12 - 14:32" is a valid military time', () => {
        const militaryTimeValidator = new MilitaryTimeValidator();

        expect(militaryTimeValidator.validate("01:12 - 14:32")).toBeTruthy();
    })
})
