export class Message{

    constructor(idFrom, body = "", date = new Date(), status = "loading") {
        this.idFrom = idFrom;
        this.body = body;
        this.date = date;
        this.status = status;
    }
}