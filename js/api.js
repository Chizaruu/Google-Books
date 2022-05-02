import { form, createResult, showResults, clearResults } from "./dom.js";

let pageIndex = 0;

const getData = async (searchTerms) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
    );
    const data = await response.json();
    return data;
};

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

const buildResults = (books) => books.items.map((book) => {
    const { volumeInfo } = book;
    const { imageLinks, title, authors, description } = volumeInfo;

    return createResult(
        imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "../images/placeholder.svg",
        title ? title : "No title",
        authors ? authors.join(", ") : "No authors",
        description ? description : "No description"
    );
});

const requestHandler = async (e) => {
    e.preventDefault();
    clearResults();
    setPageIndex(e.target.id);

    const formData = new FormData(form);
    const bookList = await getData(
        `${formData.get("input")}&startIndex=${pageIndex}`
    );

    if (bookList.items)
        return showResults(buildResults(bookList));

    return showResults([]);
};

export { requestHandler };
