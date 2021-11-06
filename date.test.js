const holiday_jp = require('./holiday_jp.min')

function judgeDate(youbi, holiday) {
    if ((youbi == 1 || youbi == 2 || youbi == 3 || youbi == 4 || youbi == 5) && !holiday) {
        return '平日';
    } else if (youbi == 6 && !holiday) {
        return '土曜日';
    } else {
        return '休日';
    }
}

describe('日付判定', () => {

    it('平日', () => {
        var date = new Date('2021-11-05');
        var youbi = date.getDay();
        var holiday = holiday_jp.isHoliday(date);
        expect(judgeDate(youbi, holiday)).toBe('平日');
    });

    it('土曜日', () => {
        var date = new Date('2021-11-06');
        var youbi = date.getDay();
        var holiday = holiday_jp.isHoliday(date);
        expect(judgeDate(youbi, holiday)).toBe('土曜日');
    });

    it('日曜日', () => {
        var date = new Date('2021-11-07');
        var youbi = date.getDay();
        var holiday = holiday_jp.isHoliday(date);
        expect(judgeDate(youbi, holiday)).toBe('休日');
    });

    it('祝日', () => {
        var date = new Date('2021-11-03');
        var youbi = date.getDay();
        var holiday = holiday_jp.isHoliday(date);
        expect(judgeDate(youbi, holiday)).toBe('休日');
    });
});
