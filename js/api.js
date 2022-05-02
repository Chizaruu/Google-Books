import { form, createResult, showResults, clearResults } from "./dom.js";

let pageIndex = 0;

const getData = async (searchTerms) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
    );
    const data = await response.json();
    return data;
};

const requestHandler = async (e) => {
    e.preventDefault();
    clearResults();
    const formData = new FormData(form);
    const data = await getData(
        `${formData.get("input")}&startIndex=${pageIndex}`
    );
    const resultsList = data.items.map((item) =>
        createResult(
            item.volumeInfo.imageLinks
                ? item.volumeInfo.imageLinks.thumbnail
                : "../images/placeholder.svg",
            item.volumeInfo.title ? item.volumeInfo.title : "No title",
            item.volumeInfo.authors ? item.volumeInfo.authors[0] : "No author",
            item.volumeInfo.description
                ? item.volumeInfo.description
                : "No description"
        )
    );
    showResults(resultsList);
};

export { requestHandler };
