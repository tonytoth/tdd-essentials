import { PalindromeChecker } from './';

describe('palindrome checker', () => {
    it('class should exist', () => {
        const palindromCheker = new PalindromeChecker();
        expect(palindromCheker).toBeDefined();
    })

    it('should have a method to check if a string is palindrome', () => {
        const palindromCheker = new PalindromeChecker();
        console.log('palindromCheker: ', palindromCheker);
        expect(palindromCheker.checkIfIsAPalindrome).toBeDefined();
    })
})