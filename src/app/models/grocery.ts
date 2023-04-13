export class Grocery {
    listId?: string;
    title?: string;
    inCart?: boolean;

    consctructor(id?: string, item?: string, inCart?: boolean) {
        this.listId = id;
        this.title = item;
        this.inCart = inCart;
    }
}
