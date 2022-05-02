import { form, next, prev } from "./dom.js";
import { requestHandler } from "./api.js";

form.addEventListener("submit", (e) => requestHandler(e));
next.addEventListener("click", (e) => requestHandler(e));
prev.addEventListener("click", (e) => requestHandler(e));
