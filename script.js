
document.getElementById("myForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
    "Thank you " + name +
    "! Your enquiry submitted successfully.";

    this.reset();
});
