const books = [
  {
    id: 1,
    title: "The devil wears Prada",
    author: "National Geographic",
    genre: "sci-fi",
    image: "/pictures/0e66facd0d337688_devilwearsprada.webp",
  },
  {
    id: 2,
    title: "The fashion Designer Survival",
    author: "Emma Grady",
    genre: "drama",
    image: "/pictures/2.jpeg",
  },
  {
    id: 3,
    title: "The fashion Commite",
    author: "Eric Skyle",
    genre: "comedy",
    image: "/pictures/3.jpeg",
  },
  {
    id: 4,
    title: "Wake up and dress up",
    author: "Miranda Grey",
    genre: "thriller",
    image: "/pictures/4.jpeg",
  },
  {
    id: 5,
    title: "Girl Boss",
    author: "Sophia Amorusa",
    genre: "sci-fi",
    image: "/pictures/5.jpeg",
  },
  {
    id: 6,
    title: "The mens Fasion",
    author: "Charles Washington",
    genre: "drama",
    image: "/pictures/6.webp",
  },
  {
    id: 7,
    title: "The end of Fashion",
    author: "Charles Nidram",
    genre: "comedy",
    image: "/pictures/7.jpeg",
  },
  {
    id: 8,
    title: "Chanel",
    author: "Chanel Inc",
    genre: "thriller",
    image: "/pictures/8.webp",
  },
];

function displayBooks(filteredBooks) {
  const booksContainer = document.getElementById("books-main");
  booksContainer.innerHTML = "";

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
     <img src ="${book.image}" alt="${book.title}">
     <h3>${book.title}</h3>
     <p>${book.author}</p>
     <p class="genre">${book.genre}</p>
    `;
    booksContainer.appendChild(bookElement);
  });
}
function searchBooks() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.genre.toLowerCase().includes(searchInput)
  );
  displayBooks(filteredBooks);
}

function filterBooks() {
  const genreFilter = document.getElementById("gender").value;
  const filteredBooks =
    genreFilter === "all"
      ? books
      : books.filter((book) => book.genre === genreFilter);
  displayBooks(filteredBooks);
}

displayBooks(books);
