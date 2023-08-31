import { Component, OnInit } from '@angular/core'
import { Model } from '../model'
import { TodoItem } from '../todoitem'

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
    model = new Model()

    getName() {
        return this.model.name
    }

    getItems() {
        return this.model.items
    }

    addTodo(value: string) {
        const newTodo: TodoItem = {
            description: value,
            action: 'Yes',
        }

        this.model.items.push(newTodo)
    }
}
