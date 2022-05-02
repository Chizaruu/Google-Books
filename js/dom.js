const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const results = document.querySelector("#results");

const makeElement = (element, className, text, parent) => {
    const el = document.createElement(element);
    el.classList.add(className);
    if (text) el.textContent = text;
    if (parent) parent.appendChild(el);
    return el;
};

const createResult = (image, title, authors, description) => {
    //Create the result container
    const result = makeElement("div", "result");
    //Create the image
    const img = makeElement("img", "result__img", "", result);
    img.src = image;
    //Make a div for the title and authors
    makeElement("h4", "result__title", title, result);
    //Make authors list
    makeElement("p", "result__authors", authors, result);
    //Make description
    makeElement("p", "result__description", description, result);
    return result;
};

const showResults = (resultsList) => {
    if (resultsList.length === 0)
        return (results.innerHTML = `<p class="no-results">No results found</p>`);

    resultsList.map((result) => results.appendChild(result));
};

const clearResults = () => (results.innerHTML = "");

export { form, searchInput, createResult, showResults, clearResults };
