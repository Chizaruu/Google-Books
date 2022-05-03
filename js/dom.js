import { pageIndex, totalItems } from "./api.js";

const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const books = document.querySelector("#books");
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const searchList= document.querySelector(".search__results");

const makeElement = (element, className, text, parent) => {
    const el = document.createElement(element);
    el.classList.add(className);
    if (text) el.textContent = text;
    if (parent) parent.appendChild(el);
    return el;
};

const setButtonStates = () => {
    for (const btn of prev) {
        pageIndex === 0 ? btn.classList.add("prev--hide") : btn.classList.remove("prev--hide");
    }
    for (const btn of next) {
        pageIndex + 10 >= totalItems ? btn.classList.add("next--hide") : btn.classList.remove("next--hide");
    }
}

const createBook = (image, title, authors, description) => {
    const result = makeElement("div", "result");
    const img = makeElement("img", "result__img", "", result);

    img.src = image;
    
    makeElement("h4", "result__title", title, result);
    makeElement("p", "result__authors", authors, result);
    makeElement("p", "result__description", description, result);
    return result;
};

const showBooks = (bookList) => {
    if (bookList.length === 0)
        return (books.innerHTML = `<p class="no-books">No books found</p>`);

    bookList.map((result) => books.appendChild(result));
    searchList.classList.add("search__results--show");
    setButtonStates();
};

const clearBooks = () => (books.innerHTML = "");

export {
    form,
    searchInput,
    next,
    prev,
    createBook,
    showBooks,
    clearBooks,
};