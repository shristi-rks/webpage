function number(num) {
    let num = string;
    if (num[0] != "+") {
        return "Invalid number, use +";
    } else if (num >= "a" && num <="z" || num >= "A" && num <="Z") {
        return "Invalid, use numbers"
    } else if (num.length != 11) {
        return "Invalid, enter 10 digits";
    } else {
        return num;
        console.log(num);
    }
}

number(9841302440);
