export class PalindromeChecker {
    checkIfIsAPalindrome(input: string) {
        return input.split("").reverse().join("").toLowerCase().replaceAll(" ", "") === input.toLowerCase().split(" ").join("");
    }
}

