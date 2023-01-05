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
})
