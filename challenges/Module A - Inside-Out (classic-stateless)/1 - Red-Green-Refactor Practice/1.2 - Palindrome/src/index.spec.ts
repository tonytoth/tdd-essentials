import { PalindromeChecker } from './';

describe('palindrome checker', () => {
    let palindromeChecker: PalindromeChecker;

    beforeEach(() => {
        palindromeChecker = new PalindromeChecker();
    })

    it('class should exist', () => {
        expect(palindromeChecker).toBeDefined();
    })

    it('should have a method to check if a string is palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome).toBeDefined();
    })

    it('should be able to tell us that mom is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("mom")).toBeTruthy();
    })
})