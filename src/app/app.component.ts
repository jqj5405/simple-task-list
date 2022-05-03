import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private todolist: { name: string; status: boolean }[] = [];
  private opentodo: number = 0;

  getTodo() {
    return this.todolist;
  }
  getOpen() {
    return this.opentodo;
  }

  onAdd(todo: string) {
    if (todo !== '') {
      this.todolist.push({ name: todo, status: false });
      this.opentodo = this.todolist.filter(
        (todo) => todo.status === true
      ).length;
    }
  }

  onToggle(index: number) {
    this.todolist[index].status = !this.todolist[index].status;
    this.opentodo = this.todolist.filter((todo) => todo.status === true).length;
  }
}
