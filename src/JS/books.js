class book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.readStatus ? "read" : "not read yet"
    }`;
  }
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());
