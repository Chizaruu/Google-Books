import { form, createBook, showBooks, clearBooks } from "./dom.js";

let pageIndex = 0;
let totalItems = 0;

const setPageIndex = (id) => {
    switch (id) {
        case "next":
            pageIndex += 10;
            break;
        case "prev":
            if (pageIndex > 0) pageIndex -= 10;
            break;
        default:
            pageIndex = 0;
    }
};

const getData = async (searchTerms) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
    );
    const data = await response.json();
    return data;
};

const buildBooks = (books) => books.items.map((book) => {
    const { volumeInfo } = book;
    const { imageLinks, title, authors, description } = volumeInfo;

    return createBook(
        imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "./images/placeholder.svg",
        title ? title : "No title",
        authors ? authors.join(", ") : "No authors",
        description ? description : "No description"
    );
});

const requestHandler = async (e) => {
    e.preventDefault();
    clearBooks();
    setPageIndex(e.target.classList[0]);

    const formData = new FormData(form);
    const bookList = await getData(
        `${formData.get("input")}&startIndex=${pageIndex}`
    );
    totalItems = bookList.totalItems;

    if (bookList.items)
        return showBooks(buildBooks(bookList));

    return showBooks([]);
};

export { requestHandler, pageIndex, totalItems };
