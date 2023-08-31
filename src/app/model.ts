import { TodoItem } from './todoitem'

export class Model {
    name: string
    items: TodoItem[]

    constructor() {
        this.name = 'Mert'
        this.items = [
            { description: 'Falan fistan', action: true },
            { description: 'Falan fistan', action: false },
            { description: 'asdasdadasd', action: false },
        ]
    }
}
