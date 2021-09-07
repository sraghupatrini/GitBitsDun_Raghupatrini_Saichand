import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  task!: boolean;

  onChangeEvent(event: any) {

    console.log(event.target.value);

    this.task = true;

  }

  list: any[] = [];

  priorityy: any[] = [];

  random: any;
  randomBoolean: boolean | undefined;

  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item })
    if (this.list.length >= 5) {
      this.randomBoolean = true;
    }
    this.random = this.list;
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id);
    if (this.list.length < 5) {
      this.randomBoolean = false;
    }
  }

  display!: string;


  selectRandom() {

    this.random = this.list[Math.floor(Math.random() * this.list.length)];
    console.log(this.random);
    this.timer(30);
  }


  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }


  priority(item: number) {
    this.priorityy.push({ id: item });
    console.log(this.priorityy);
  }

}
