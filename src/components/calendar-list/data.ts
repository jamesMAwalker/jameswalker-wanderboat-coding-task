export const WEEKDAY_INITIALS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export interface ICalendarMonth {
  monthName: string
  monthNumber: number,
  weeks: (number | null)[][]
}

export const MONTHS = [
  {
    monthName: "May 2024",
    monthNumber: 5,
    weeks: [
      [null, null, null, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30, 31, null]
    ]
  },
  {
    monthName: "June 2024",
    monthNumber: 6,
    weeks: [
      [null, null, null, null, 1, 2, 3],
      [4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30, null]
    ]
  },
  {
    monthName: "July 2024",
    monthNumber: 7,
    weeks: [
      [null, null, null, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30, 31, null]
    ]
  },
  {
    monthName: "August 2024",
    monthNumber: 8,
    weeks: [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, null, null, null]
    ]
  },
  {
    monthName: "September 2024",
    monthNumber: 9,
    weeks: [
      [null, null, null, null, null, 1, 2],
      [3, 4, 5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14, 15, 16],
      [17, 18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29, 30]
    ]
  },
  {
    monthName: "October 2024",
    monthNumber: 10,
    weeks: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, null, null, null, null]
    ]
  }
];