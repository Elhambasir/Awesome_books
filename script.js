
const title = document.querySelector('.bookTitle');
const author = document.querySelector('.author');
const add = document.querySelector('.btnAdd');

add.onclick = function storeData() {
    const bookInfo =
    {
        title: title.value,
        author: author.value,
    };
    let rd = JSON.parse(localStorage.getItem('bookInfo'));
    if (rd) {
        console.log(rd.push(bookInfo));
    } else {
        rd = [];
        rd.push(bookInfo);
    }
    const string = JSON.stringify(rd);
    localStorage.setItem('bookInfo', string);
};

window.onload = function retrieveData() {
    const data = JSON.parse(localStorage.getItem('bookInfo'));
    const table = document.querySelector('.table');
    data.forEach(element => {
        const generatedContent = `
    <tr>
    <td>${element.title}</td>
    <td>${element.author}</td>
    <td><button onclick='removeItem("${element.title}")'>Remove</button></td>
    <td><hr></td>
  </tr>
    `;
        table.innerHTML += generatedContent;
    });
};
