import { PalindromeChecker } from './';

describe('palindrome checker', () => {
    let palindromeChecker: PalindromeChecker;

    beforeEach(() => {
        palindromeChecker = new PalindromeChecker();
    })

    it('palindrome checker should exist', () => {
        expect(palindromeChecker).toBeDefined();
    })

    it('should have a method to check if a string is palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome).toBeDefined();
    })

    it('should be able to tell us that mom is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("mom")).toBeTruthy();
    })

    it('should be able to tell us that wow is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("wow")).toBeTruthy();
    })

    it('should be able to tell us that bill is not a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("bill")).toBeFalsy();
    })

    it('should be able to tell us that Mom is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("Mom")).toBeTruthy();
    })

    it('should be able to tell us that Was It A Rat I Saw is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("Was It A Rat I Saw")).toBeTruthy();
    })

    it('shuld be able to tell us that Never Odd or Even is a palindrome', () => {
        expect(palindromeChecker.checkIfIsAPalindrome("Never Odd or Even")).toBeTruthy();
    })
})