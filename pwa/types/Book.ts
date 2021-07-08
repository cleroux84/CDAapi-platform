export class Book {
  public "@id"?: string;

  constructor(
    _id?: string,
    public name?: string,
    public author?: string,
<<<<<<< HEAD
    public datePublished?: Date
=======
    public datePublished?: string
>>>>>>> e87503e5674cb3828f221b40f149f95448376bf3
  ) {
    this["@id"] = _id;
  }
}
