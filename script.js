function upDate(previewPic) {
    let displayDiv = document.getElementById("image");

    // Добавляем черный фон
    displayDiv.classList.add("hover-effect");

    // Обновляем текст и фон
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = `url(${previewPic.src})`;

    console.log("Mouse over:", previewPic.alt, previewPic.src);
}

function undo() {
    let displayDiv = document.getElementById("image");

    // Убираем черный фон
    displayDiv.classList.remove("hover-effect");

    // Возвращаем исходное состояние
    displayDiv.innerHTML = "Hover over an image below to display here.";
    displayDiv.style.backgroundImage = "none";

    console.log("Mouse out: Reset image");
}
