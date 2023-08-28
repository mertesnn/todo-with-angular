import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
    todos = [
        { id: 1, description: 'Falan fistan', action: 'Yes' },
        { id: 2, description: 'Falan fistan', action: 'No' },
        { id: 3, description: 'asdasdadasd', action: 'No' },
        { id: 3, description: 'Falasdasdan asdasdasd', action: 'Yes' },
    ]
}
