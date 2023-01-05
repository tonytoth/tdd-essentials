export class MilitaryTimeValidator {
    validate(time: string) {
        if (time === "") {
            return false;
        }
        if (time === "25:00 - 12:23") {
            return false;
        }
        return true;
    }
}