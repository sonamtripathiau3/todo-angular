import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
public allItems:any = [];
  
  /* A two-way binding performed which
     pushes text on division */
public newTask:any;

  /* When input is empty, it will
     not create a new division */
    //  addItem(value:any) {
    //   this.allItems.push(value);
    // }
  addToList() {
      if (this.newTask !=='') {
        this.allItems.push(this.newTask);
          this.newTask = '';
      }
      console.log(this.allItems)
  }

  // /* This function takes to input the
  //    task, that has to be deleted*/
   public deleteTask(index:any) {
      this.allItems.splice(index, 1);
   }
}
