import { defineStore } from 'pinia';

export const useCalculateDuration = defineStore('calculateDuration', () => {
  const parseYearMonth = (yearMonth: string) => {
    if (yearMonth === '現在') {
      const now = new Date();
      return { year: now.getFullYear(), month: now.getMonth() + 1 };
    }

    const matched = yearMonth.match(/^(\d{4})\/(0[1-9]|1[0-2])$/);
    if (!matched) {
      return null;
    }

    return { year: Number(matched[1]), month: Number(matched[2]) };
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = parseYearMonth(startDate);
    const end = parseYearMonth(endDate);

    if (!start || !end) {
      return { years: 0, months: 0 };
    }

    let durationYears = end.year - start.year;
    let durationMonths = end.month - start.month;

    if (durationMonths < 0) {
      durationYears--;
      durationMonths += 12;
    }

    if (durationYears < 0) {
      return { years: 0, months: 0 };
    }

    return { years: durationYears, months: durationMonths };
  };

  const dateRange = (startDate: string, endDate: string) => {
    const years = calculateDuration(startDate, endDate).years;
    const months = calculateDuration(startDate, endDate).months;
    return `${years}年${months}ヶ月`;
  };

  return {
    calculateDuration,
    dateRange
  };
});
