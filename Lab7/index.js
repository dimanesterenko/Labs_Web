const imageContainer = document.getElementById('image-container');
const myImage = document.getElementById('my-image');

myImage.addEventListener('mouseenter', () => {
    myImage.src = 'night.jpg';
});

myImage.addEventListener('mouseleave', () => {
    myImage.src = 'day.jpg';
});

function findPhone() {
    var city = document.getElementById("cityInput").value;
    var phone = document.getElementById("phoneInput").value;
    var codes={
        "Paris":"+33",
        "Kyiv":"+38",
        "Warsaw":"+48",
        "Berlin":"+49"
    };

    var resultDiv = document.getElementById("result");

    if (codes.hasOwnProperty(city)) {
        resultDiv.innerText = "No телефона: " + codes[city] + phone;
    } else {
        resultDiv.innerText = "Місто " + city + " не знайдено у списку";
    }
}