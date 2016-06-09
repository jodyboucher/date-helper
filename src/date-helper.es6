export const dayIndexSunday = 0;
export const dayIndexMonday = 1;
export const dayIndexTuesday = 2;
export const dayIndexWednesday = 3;
export const dayIndexThursday = 4;
export const dayIndexFriday = 5;
export const dayIndexSaturday = 6;

export let dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export let dayNamesMinimum = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S'
];

export let dayNamesShort = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa'
];

export let dayNamesAbbreviated = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

export let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * Gets the name of the specified day
 * @param {int} day The day (zero based, Sunday=0)
 * @returns {string} The name of the day
 */
export const getDayName = (day) => dayNames[day];

/**
 * Gets the abbreviated name of the specified day.
 * This is a three character abbreviated day name.
 * @param {int} day The day (zero based, Sunday=0)
 * @returns {string} The abbreviated name of the day
 */
export const getDayNameAbbreviated = (day) => dayNamesAbbreviated[day];

/**
 * Gets the minimum name of the specified day.
 * This is a single character representation of the day name.
 * @param {int} day The day (zero based, Sunday=0)
 * @returns {string} The minimum name of the day
 */
export const getDayNameMinimum = (day) => dayNamesMinimum[day];

/**
 * Gets the short name of the specified day.
 * This is a 2 character representation of the day name.
 * @param {int} day The day (zero based, Sunday=0)
 * @returns {string} The short name of the day
 */
export const getDayNameShort = (day) => dayNamesShort[day];

/**
 * Gets an array of the days in the specified month
 * @param {int} year The four digit year
 * @param {int} month The month (zero based, January=0)
 * @returns {date[]} The days in the specified month
 */
export const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return days;
};

/**
 * Gets the name of the specified month
 * @param {int} month The month (zero based, January=0)
 * @returns {string} The name of the month
 */
export const getMonthName = (month) => monthNames[month];

/**
 * Calculate the next year/month
 * @param {int} year The year of the date the next month is calculated from
 * @param {int} month The month of the date the next month is calculated from (0 based, January=0)
 * @returns {{year: int, month: int}} Object containing the next year and month
 */
export const getNextMonth = (year, month) => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (nextMonth > 11) {
        nextYear = nextYear + 1;
        nextMonth = 0;
    }

    return { year: nextYear, month: nextMonth };
};

/**
 * Calculate the previous year/month
 * @param {int} year The year of the date the previous month is calculated from
 * @param {int} month The month of the date the previous month is calculated from (0 based, January=0)
 * @returns {{year: int, month: int}} Object containing the previous year and month
 */

export const getPreviousMonth = (year, month) => {
    let prevYear = year;
    let prevMonth = month - 1;
    if (prevMonth < 0) {
        prevYear = prevYear - 1;
        prevMonth = 11;
    }

    return { year: prevYear, month: prevMonth };
};

