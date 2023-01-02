export class PalindromeChecker {
    checkIfIsAPalindrome(input: string) {
        return input.split("").reverse().join("") === input;
    }
}

