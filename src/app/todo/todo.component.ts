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

    displayAll: boolean = true

    getName() {
        return this.model.name
    }

    getItems() {
        if (!this.displayAll) {
            return this.model.items.filter((item) => !item.action)
        }
        return this.model.items
    }

    addTodo(value: string) {
        if (value) {
            this.model.items.push({
                description: value,
                action: false,
            })
        } else {
            alert('This field required.')
        }
    }
}
