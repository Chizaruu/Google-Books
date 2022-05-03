import { form, next, prev } from "./dom.js";
import { requestHandler } from "./api.js";

form.addEventListener("submit", (e) => requestHandler(e));

for (const btn of [next, prev]) {
    btn[0].addEventListener("click", (e) => requestHandler(e));
    btn[1].addEventListener("click", (e) => requestHandler(e));
}

