import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items = [];

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }

  ngOnInit() {
    this.items = JSON.parse(this.getData()) || [];
  }

  getData() {
    return localStorage.getItem('myData');
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  public newTask: string;
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
      this.setData(this.items);
    }
  }

  public deleteTask(index) {
    this.items.splice(index, 1);
    this.setData(this.items);
  }
}
