
const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEmail = event.currentTarget.email.value;
    const inputPassword = event.currentTarget.password.value;

    // console.log(inputEmail);
    // console.log(inputPassword);

    if (inputEmail === "" || inputPassword === "") {
        return alert("Please fields must not be empty");
    }
    const date = {
        email: inputEmail,
        password: inputPassword,
    };

    console.log(date);
    event.currentTarget.reset();
});
