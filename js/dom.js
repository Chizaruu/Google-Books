const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const results = document.querySelector("#results");

const createResult = (image, title, author, description) => {
    const result = document.createElement("li");
    result.classList.add("result");

    const img = document.createElement("img");
    img.classList.add("result__img");
    img.src = image;
    result.appendChild(img);

    const title = document.createElement("h4");
    title.classList.add("result__title");
    title.textContent = title;
    result.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("result__author");
    author.textContent = author;
    result.appendChild(author);

    const desc = document.createElement("p");
    desc.classList.add("result__desc");
    desc.textContent = description;
    result.appendChild(desc);

    return result;
};

export { form, searchInput, createResult, results };
