import { form } from "dom.js";
import { requestHandler } from "api.js";

form.addEventListener("submit", (e) => requestHandler(e));
