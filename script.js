
let wordLimit = 12;
const rows = document.querySelectorAll(".row");
rows.forEach(row => {
    let sentence = row.children[1].textContent;
    let sentenceArray = sentence.split(' ');
    let newArray = sentenceArray.slice(0, wordLimit-1);
    newArray.push("...");
    row.children[1].textContent = newArray.join(' ');
})