import * as dateHelper from '../src/date-helper';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('dateHelper', () => {
    describe('getDayName', () => {
        it('should accept index 0', () => {
            expect(dateHelper.getDayName(0)).to.equal(dateHelper.dayNames[0]);
        });

        it('should accept index 6', () => {
            expect(dateHelper.getDayName(6)).to.equal(dateHelper.dayNames[6]);
        });

        it('should fail on bad index', () => {
            expect(dateHelper.getDayName(7)).to.be.an('undefined');
        });
    });

    describe('getDayNameAbbreviated', () => {
        it('should accept index 0', () => {
            expect(dateHelper.getDayNameAbbreviated(0)).to.equal(dateHelper.dayNamesAbbreviated[0]);
        });

        it('should accept index 6', () => {
            expect(dateHelper.getDayNameAbbreviated(6)).to.equal(dateHelper.dayNamesAbbreviated[6]);
        });

        it('should fail on bad index', () => {
            expect(dateHelper.getDayNameAbbreviated(7)).to.be.an('undefined');
        });
    });

    describe('getDayNameMinimum', () => {
        it('should accept index 0', () => {
            expect(dateHelper.getDayNameMinimum(0)).to.equal(dateHelper.dayNamesMinimum[0]);
        });

        it('should accept index 6', () => {
            expect(dateHelper.getDayNameMinimum(6)).to.equal(dateHelper.dayNamesMinimum[6]);
        });

        it('should fail on bad index', () => {
            expect(dateHelper.getDayNameMinimum(7)).to.be.an('undefined');
        });
    });

    describe('getDayNameShort', () => {
        it('should accept index 0', () => {
            expect(dateHelper.getDayNameShort(0)).to.equal(dateHelper.dayNamesShort[0]);
        });

        it('should accept index 6', () => {
            expect(dateHelper.getDayNameShort(6)).to.equal(dateHelper.dayNamesShort[6]);
        });

        it('should fail on bad index', () => {
            expect(dateHelper.getDayNameShort(7)).to.be.an('undefined');
        });
    });

    describe('getDaysInMonth', () => {
        it('should return an array', () => {
            expect(dateHelper.getDaysInMonth(2016, 0)).to.be.an('array');
        });

        it('should have 31 elements for January', () => {
            expect(dateHelper.getDaysInMonth(2016, 0)).to.have.lengthOf(31);
        });

        it('should return an Array of Date', () => {
            expect(dateHelper.getDaysInMonth(2016, 0)[0]).to.be.an('date');
        });

        it('should be ordered, first element = 2016-01-01', () => {
            expect(dateHelper.getDaysInMonth(2016, 0)[0].getTime()).to.equal(new Date(2016, 0, 1).getTime());
        });

        it('should be ordered, last element = 2016-01-31', () => {
            expect(dateHelper.getDaysInMonth(2016, 0)[30].getTime()).to.equal(new Date(2016, 0, 31).getTime());
        });
    });

    describe('getMonthName', () => {
        it('should accept index 0', () => {
            expect(dateHelper.getMonthName(0)).to.equal(dateHelper.monthNames[0]);
        });

        it('should accept index 11', () => {
            expect(dateHelper.getMonthName(11)).to.equal(dateHelper.monthNames[11]);
        });

        it('should fail on bad index', () => {
            expect(dateHelper.getMonthName(12)).to.be.an('undefined');
        });
    });

    describe('getNextMonth', () => {
        it('should return an object', () => {
            expect(dateHelper.getNextMonth(2016, 5)).to.be.an('object');
        });

        it('should return an object with a year property', () => {
            expect(dateHelper.getNextMonth(2016, 5)).to.have.property('year');
        });

        it('should return an object with a month property', () => {
            expect(dateHelper.getNextMonth(2016, 5)).to.have.property('month');
        });

        it('should return an object with same year, input month = 0', () => {
            expect(dateHelper.getNextMonth(2016, 0).year).to.equal(2016);
        });

        it('should return an object with same year, input month = 10', () => {
            expect(dateHelper.getNextMonth(2016, 10).year).to.equal(2016);
        });

        it('should return an object with next year, input month = 11', () => {
            expect(dateHelper.getNextMonth(2016, 11).year).to.equal(2017);
        });
    });

    describe('getPreviousMonth', () => {
        it('should return an object', () => {
            expect(dateHelper.getPreviousMonth(2016, 5)).to.be.an('object');
        });

        it('should return an object with a year property', () => {
            expect(dateHelper.getPreviousMonth(2016, 5)).to.have.property('year');
        });

        it('should return an object with a month property', () => {
            expect(dateHelper.getPreviousMonth(2016, 5)).to.have.property('month');
        });

        it('should return an object with same year, input month = 1', () => {
            expect(dateHelper.getPreviousMonth(2016, 1).year).to.equal(2016);
        });

        it('should return an object with same year, input month = 11', () => {
            expect(dateHelper.getPreviousMonth(2016, 11).year).to.equal(2016);
        });

        it('should return an object with next year, input month = 0', () => {
            expect(dateHelper.getPreviousMonth(2016, 0).year).to.equal(2015);
        });
    });
});
