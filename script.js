function addContact() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if(name === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = name + " | " + phone + " | " + email;

    document.getElementById("contactList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}