import { form, createResult, results } from "./dom.js";

const getData = async (searchTerms) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
    );
    const data = await response.json();
    return data;
};

const requestHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const searchTerms = formData.get("search");
    const data = await getData(searchTerms);

    if (data.items.length === 0) {
        results.innerHTML = "";
        const noResults = document.createElement("p");
        noResults.classList.add("no-results");
        noResults.textContent = "No results found";
        results.appendChild(noResults);
        return;
    }

    results.innerHTML = data.items.length;

    const resultsList = data.items.map((item) => {
        const {
            volumeInfo: {
                imageLinks: { thumbnail },
                title,
                authors,
                description,
            },
        } = item;
        createResult(thumbnail, title, authors, description);
    });

    resultsList.map((result) => results.appendChild(result));
};

export { requestHandler };
