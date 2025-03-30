document.addEventListener("DOMContentLoaded", function () {
    // Open address form on "Buy Now" click
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "adress.html"; // Redirects to the address form
        });
    });
});
function fn1(){
    alert("your item is added to cart");
}
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click",function(){
            window.location.href="savingaddress.html";

        });

    });
});
