function toggleText(button) {
    let hiddenText = button.previousElementSibling;

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        button.innerText = "See Less";
    } else {
        hiddenText.style.display = "none";
        button.innerText = "See More";
    }
}

toggleText()