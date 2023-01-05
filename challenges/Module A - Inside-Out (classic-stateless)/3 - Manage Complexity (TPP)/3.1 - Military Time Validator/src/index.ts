const isATimeRange = (time: string) => {
    return /^((?:[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])(?:\s?) - (?:\s?)(?:[01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])(?:\s?,\s?)?)+$/gm.test(time);
}

export class MilitaryTimeValidator {
    validate(time: string) {
        if (!isATimeRange(time)) {
            return false;
        }
        return true;
    }
}