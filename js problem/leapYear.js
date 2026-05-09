function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else{
        return false;
    }

}

const islipi = isLeapYear(2072);
console.log(islipi);

function isLeapYear2(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isleap = isLeapYear2(1900);
const isleap2 = isLeapYear2(2000);
const isleap3 = isLeapYear2(2024);
const isleap4 = isLeapYear2(2023);
console.log(isleap, isleap2, isleap3, isleap4);