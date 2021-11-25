import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /* An empty array that is responsible
	to add a division */
  public items = [];
  public items1 = [];

  setData(data:any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('myData', jsonData)
 }

 ngOnInit(){
  this.items=JSON.parse(this.getData())||[]
 }
 
 getData() {
    return localStorage.getItem('myData')
 }
 
 removeData(key) {
    localStorage.removeItem(key)
 }

  /* A two-way binding performed which
	pushes text on division */
  public newTask;

  /* When input is empty, it will
	not create a new division */
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
      this.setData(this.items)
    }
  }

  /* This function takes to input the
	task, that has to be deleted*/
  public deleteTask(index) {
    this.items.splice(index, 1);
    this.setData(this.items);
  }
}
