(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("date-helper", [], factory);
	else if(typeof exports === 'object')
		exports["date-helper"] = factory();
	else
		root["date-helper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dayIndexSunday = exports.dayIndexSunday = 0;
	var dayIndexMonday = exports.dayIndexMonday = 1;
	var dayIndexTuesday = exports.dayIndexTuesday = 2;
	var dayIndexWednesday = exports.dayIndexWednesday = 3;
	var dayIndexThursday = exports.dayIndexThursday = 4;
	var dayIndexFriday = exports.dayIndexFriday = 5;
	var dayIndexSaturday = exports.dayIndexSaturday = 6;

	var dayNames = exports.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var dayNamesMinimum = exports.dayNamesMinimum = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

	var dayNamesShort = exports.dayNamesShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

	var dayNamesAbbreviated = exports.dayNamesAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	var monthNames = exports.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	/**
	 * Gets the name of the specified day
	 * @param {int} day The day (zero based, Sunday=0)
	 * @returns {string} The name of the day
	 */
	var getDayName = exports.getDayName = function getDayName(day) {
	    return dayNames[day];
	};

	/**
	 * Gets the abbreviated name of the specified day.
	 * This is a three character abbreviated day name.
	 * @param {int} day The day (zero based, Sunday=0)
	 * @returns {string} The abbreviated name of the day
	 */
	var getDayNameAbbreviated = exports.getDayNameAbbreviated = function getDayNameAbbreviated(day) {
	    return dayNamesAbbreviated[day];
	};

	/**
	 * Gets the minimum name of the specified day.
	 * This is a single character representation of the day name.
	 * @param {int} day The day (zero based, Sunday=0)
	 * @returns {string} The minimum name of the day
	 */
	var getDayNameMinimum = exports.getDayNameMinimum = function getDayNameMinimum(day) {
	    return dayNamesMinimum[day];
	};

	/**
	 * Gets the short name of the specified day.
	 * This is a 2 character representation of the day name.
	 * @param {int} day The day (zero based, Sunday=0)
	 * @returns {string} The short name of the day
	 */
	var getDayNameShort = exports.getDayNameShort = function getDayNameShort(day) {
	    return dayNamesShort[day];
	};

	/**
	 * Gets an array of the days in the specified month
	 * @param {int} year The four digit year
	 * @param {int} month The month (zero based, January=0)
	 * @returns {date[]} The days in the specified month
	 */
	var getDaysInMonth = exports.getDaysInMonth = function getDaysInMonth(year, month) {
	    var date = new Date(year, month, 1);
	    var days = [];
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
	var getMonthName = exports.getMonthName = function getMonthName(month) {
	    return monthNames[month];
	};

	/**
	 * Calculate the next year/month
	 * @param {int} year The year of the date the next month is calculated from
	 * @param {int} month The month of the date the next month is calculated from (0 based, January=0)
	 * @returns {{year: int, month: int}} Object containing the next year and month
	 */
	var getNextMonth = exports.getNextMonth = function getNextMonth(year, month) {
	    var nextYear = year;
	    var nextMonth = month + 1;
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

	var getPreviousMonth = exports.getPreviousMonth = function getPreviousMonth(year, month) {
	    var prevYear = year;
	    var prevMonth = month - 1;
	    if (prevMonth < 0) {
	        prevYear = prevYear - 1;
	        prevMonth = 11;
	    }

	    return { year: prevYear, month: prevMonth };
	};

/***/ }
/******/ ])
});
;