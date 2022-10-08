function number(phone) {
    if (phone[0] != "+") {
        return "Invalid number, use +";
    } else if (phone >= "a" && phone <="z" || phone >= "A" && phone <="Z") {
        return "Invalid, use numbers"
    } else if (phone.length != 11) {
        return "Invalid, enter 10 digits";
    } else {
        return phone;
    }
}
number(9841302440);

