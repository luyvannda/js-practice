const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature"
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux"
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452
      }
    }
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy"
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0
      }
    }
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: ""
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701
      }
    }
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal"
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960
      }
    }
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos"
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095
      }
    }
  }
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring object
/*


const book = getBook(1);

// const title = book.title;
// const author = book.author;

const { title, author, genres, hasMovieAdaptation, pages, publicationDate } =
  book;
book;

title;
author;
pages;
hasMovieAdaptation;

// Destructuring array

genres;

// const primaryGenres = genres[0];
// const secondaryGenres = genres[1];

const [primaryGenres, secondaryGenres, ...otherGenres] = genres;

// ...rest operator can only be placed at the last elements of array, or the only one element.

primaryGenres;
secondaryGenres;
otherGenres;

// ... spread operator look exactly like rest operator, however, it usually placed at the start of an array or object array.

const newGenres = [...genres, "epic fantasy"];

newGenres;

const updatedBook = {
  ...book,

  // add a new property

  moviePublicationDate: "2024",

  // overwriting an existing property
  pages: 2000
};

updatedBook;

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

const summary = `${title} is a ${
  genres[1]
} ${pages}-page long book written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;

summary;

const pagesRange = pages > 1000 ? "more than 1000" : "less than 1000";

console.log(`This books has ${pagesRange} pages.`);

// function getYear(str) {
//   return str.split("-")[0];
// }

console.log(true && "display this");
console.log(false && "display this");

console.log(hasMovieAdaptation && "This book has movie");

//falsy value: 0 , '', null, undefined

console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.french);

const frenchTranslation = book.translations.french || "NOT TRANSLATED";

frenchTranslation;

console.log(book.translations.spanish);

console.log(book.reviews.librarything?.reviewsCount ?? "No Data");

// So the or || can go wrong because of 0 or '' is also count as falsy value:
const wrongCount = book.reviews.librarything?.reviewsCount || "No Data";
wrongCount;

// but the new ?? can get it right because it include 0 and empty string ''
const count = book.reviews.librarything?.reviewsCount ?? "No Data";
count;


*/

const books = getBooks();

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

const titles = books.map((book) => book.title);

console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  publicationDate: book.publicationDate,
  reviewsCount: getTotalReviewCount(book)
}));

console.log(essentialData);

const longBooksWithMovie = books
  .filter((book) => book.pages > 500 && book.hasMovieAdaptation)
  .map((book) => book.title);

console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

const totalBooksPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(totalBooksPages);

// Sort method change the original array which we don't want so we need to copy the array with slice before sort.

const arr = [1, 8, 2, 9, 6, 5];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);

const essentialAfterSortedByPages = sortedByPages.map((book) => ({
  title: book.title,
  author: book.author,
  pages: book.pages
}));

essentialAfterSortedByPages;
