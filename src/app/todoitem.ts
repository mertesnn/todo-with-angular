/* export class TodoItem {
    constructor(
        public id: number,
        public description: string,
        public action: string
    ) {
        this.id = id
        this.description = description
        this.action = action
    }
}
 */

export interface TodoItem {
    description: string
    action: string
}
