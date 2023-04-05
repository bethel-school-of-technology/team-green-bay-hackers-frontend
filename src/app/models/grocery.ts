export class Grocery {
    listId?: string;
    listItem?: string;
    inCart?: boolean;

    consctructor(id?: string, item?: string, inCart?: boolean) {
        this.listId = id;
        this.listItem = item;
        this.inCart = inCart;
    }
}
