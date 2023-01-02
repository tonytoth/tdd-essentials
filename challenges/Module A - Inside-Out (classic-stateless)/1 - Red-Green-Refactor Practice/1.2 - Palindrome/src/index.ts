export class PalindromeChecker {
    checkIfIsAPalindrome(input: string) {
        const reversedInitialStringWithNoSpaces = input.split("").reverse().join("").toLowerCase().replaceAll(" ", "");
        const loweredCaseInitialStringWithNoSpaces = input.toLowerCase().split(" ").join("");
        
        return reversedInitialStringWithNoSpaces === loweredCaseInitialStringWithNoSpaces;
    }
}

