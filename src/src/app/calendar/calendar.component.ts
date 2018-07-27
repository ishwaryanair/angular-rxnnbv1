import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  year: number;
  month: number;
  days: number[];
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;

  constructor() {
    var current = new Date();
    this.year = current.getFullYear();
    this.month = current.getMonth() + 1;
    this.create();
  }

  create() {
    this.days = new Array<number>(42);
    var firstDayOfMonth = new Date(this.year, this.month - 1, 1).getDay();
    var numberOfDays = new Date(this.year, this.month, 0).getDate();

    for (let day = 1, i = firstDayOfMonth; day <= numberOfDays; day++ , i++) {
      this.days[i] = day;
    }
  }

  previous() {
    if (this.month == 1) {
      this.month = 12;
      this.year--;
    }
    else {
      this.month--;
    }
    this.create();
  }

  next() {
    if (this.month == 12) {
      this.month = 1;
      this.year++;
    }
    else {
      this.month++;
    }
    this.create();
  }

  selectdate(day) {
    if (day != undefined) {
      this.selectedYear = this.year;
      this.selectedMonth = this.month;
      this.selectedDay = day;
    }
  }
  isselected(day) {
    return (this.year == this.selectedYear && this.month == this.selectedMonth && day == this.selectedDay)
  }
}
