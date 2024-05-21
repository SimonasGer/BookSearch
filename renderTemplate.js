import template from "./template.js";

const renderTemplate = () => {
    let formElement = document.createElement("section");
    formElement.className = "d-flex flex-column align-items-center container fw-bold bg-light";
    formElement.innerHTML = template();
    document.querySelector("body").appendChild(formElement);
}

export default renderTemplate;