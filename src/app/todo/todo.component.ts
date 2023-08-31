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
    inputText: string = ''

    getName() {
        return this.model.name
    }

    getItems() {
        if (!this.displayAll) {
            return this.model.items.filter((item) => !item.action)
        }
        return this.model.items
    }

    addTodo() {
        if (this.inputText) {
            const newTodo: TodoItem = {
                description: this.inputText,
                action: false,
            }
            this.model.items.push(newTodo)
            localStorage.setItem('items', JSON.stringify(this.model.items))
            this.inputText = ''
        } else {
            alert('This field required.')
        }
    }

    getCompletedTodoCount() {
        return this.model.items.filter((item) => item.action).length
    }

    getAddButtonClasses() {
        return {
            disabled: !this.inputText,
            'btn-primary': this.inputText,
            'btn-secondary': !this.inputText,
        }
    }
}
