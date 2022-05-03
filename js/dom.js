const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const results = document.querySelector("#results");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const makeElement = (element, className, text, parent) => {
    const el = document.createElement(element);
    el.classList.add(className);
    if (text) el.textContent = text;
    if (parent) parent.appendChild(el);
    return el;
};

const createResult = (image, title, authors, description) => {
    const result = makeElement("div", "result");
    const img = makeElement("img", "result__img", "", result);

    img.src = image;
    
    makeElement("h4", "result__title", title, result);
    makeElement("p", "result__authors", authors, result);
    makeElement("p", "result__description", description, result);
    return result;
};

const showResults = (resultsList) => {
    if (resultsList.length === 0)
        return (results.innerHTML = `<p class="no-results">No results found</p>`);

    resultsList.map((result) => results.appendChild(result));
};

const clearResults = () => (results.innerHTML = "");

export {
    form,
    searchInput,
    next,
    prev,
    createResult,
    showResults,
    clearResults,
};
