import { PalindromeChecker } from './';

describe('palindrome checker', () => {
    it('class should exist', () => {
        const palindromCheker = new PalindromeChecker();
        expect(palindromCheker).toBeDefined();
    })

    it('should have a method to check if a string is palindrome', () => {
        const palindromCheker = new PalindromeChecker();
        expect(palindromCheker.checkIfIsAPalindrome).toBeDefined();
    })

    it('should be able to tell us that mom is a palindrome', () => {
        const palindromCheker = new PalindromeChecker();
        expect(palindromCheker.checkIfIsAPalindrome("mom")).toBeTruthy();
    })
})