export class Grocery {
    listId?: string;
    title?: string;
    userId?: number;
    inCart?: boolean;

    consctructor(id?: string, item?: string, userId?: number, inCart?: boolean) {
        this.listId = id;
        this.title = item;
        this.userId = userId;
        this.inCart = inCart;
    }
}
