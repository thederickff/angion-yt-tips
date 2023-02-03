import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.page.html',
  styleUrls: ['./date-format.page.scss']
})
export class DateFormatPage implements OnInit {

  dates = [
    new Date('2023-02-02T21:00:13'),
    new Date('2023-02-01T12:00:05'),
    new Date('2023-01-31T13:30:53'),
    new Date('2023-01-30T15:50:30'),
    new Date('2023-01-29T08:15:22'),
    new Date('2023-01-28T07:42:24'),
  ];

  constructor() { }

  ngOnInit() { }

}