function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var address = document.getElementById("address").value.trim();
    var salary = document.getElementById("salary").value.trim();

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var mobileError = document.getElementById("mobileError");
    var addressError = document.getElementById("addressError");
    var salaryError = document.getElementById("salaryError");

    var isValid = true;

    // Validate name
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        nameError.innerHTML = "Name must contain only letters and spaces";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    // Validate email
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerHTML = "Email is not valid";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    // Validate mobile number
    if (mobile === "") {
        mobileError.innerHTML = "Mobile number is required";
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        mobileError.innerHTML = "Mobile number must be a 10-digit number";
        isValid = false;
    } else {
        mobileError.innerHTML = "";
    }

    // Validate address
    if (address === "") {
        addressError.innerHTML = "Address is required";
        isValid = false;
    } else {
        addressError.innerHTML = "";
    }

    // Validate salary
    if (salary === "") {
        salaryError.innerHTML = "Salary is required";
        isValid = false;
    } else if (isNaN(salary)) {
        salaryError.innerHTML = "Salary must be a number";
        isValid = false;
    } else if (salary < 0) {
        salaryError.innerHTML = "Salary must be a positive number";
        isValid = false;
    } else {
        salaryError.innerHTML = "";
    }

    return isValid;
}