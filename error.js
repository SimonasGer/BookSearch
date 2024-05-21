const errorMessage = () => {
    let formElement = document.createElement("section");
    formElement.className = "d-flex flex-column align-items-center container fw-bold bg-light";
    formElement.innerHTML = ` <p class="mt-5">Movie not found</p>`
    document.querySelector("body").appendChild(formElement);
}

export default errorMessage