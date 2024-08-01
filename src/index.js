module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result;
    let index = 0;

    const thousands = ["hundred", "thousand", "million", "billion"];

    if (typeof number !== "number" || isNaN(number) || number < 0) {
        return "Enter a non-negative number";
    }

    if (number < 10) {
        result = units[number];
        return result.trim();
    }

    if (number >= 10 && number < 20) {
        result = teens[number % 10];
        return result.trim();
    }

    if (number >= 20 && number < 100) {
        let ten = tens[(number - (number % 10)) / 10];
        let unit;
        result;
        if (number % 10 !== 0) {
            unit = toReadable(number % 10);
            result = `${ten} ${unit}`;
        } else {
            result = `${ten}`;
        }
        return result.trim();
    }

    if (number >= 100) {
        let unit = units[Math.floor(number / 100)];
        let rest = toReadable(number % 100);

        if (number % 100 !== 0) {
            result = `${unit} hundred ${rest}`;
            return result;
        } else if (number % 100 === 0) {
            result = `${unit} hundred`;
            return result.trim();
        }
    }
};
