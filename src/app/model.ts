import { TodoItem } from './todoitem'

export class Model {
    name: string
    items: TodoItem[]

    constructor() {
        this.name = 'Mert'
        this.items = [
            { description: 'Falan fistan', action: 'Yes' },
            { description: 'Falan fistan', action: 'No' },
            { description: 'asdasdadasd', action: 'No' },
            { description: 'Falasdasdan asdasdasd', action: 'Yes' },
        ]
    }
}
