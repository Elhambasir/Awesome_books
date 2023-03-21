
// const title = document.querySelector('.bookTitle');
// const author = document.querySelector('.author');
// const add = document.querySelector('.btnAdd');

// add.onclick = function storeData() {
//   const bookInfo =
//   {
//     title: title.value,
//     author: author.value,
//   };
//   let rd = JSON.parse(localStorage.getItem('bookInfo'));
//   if (rd) {
//     rd.push(bookInfo);
//   } else {
//     rd = [];
//     rd.push(bookInfo);
//   }
//   const string = JSON.stringify(rd);
//   localStorage.setItem('bookInfo', string);
// };

// window.onload = function retrieveData() {
//   const data = JSON.parse(localStorage.getItem('bookInfo'));
//   const table = document.querySelector('.table');
//   data.forEach(element => {
//     const generatedContent = `
//     <tr>
//     <td>${element.title}</td>
//     <td>${element.author}</td>
//     <td><button id="removeBtn" onclick='removeItem("${element.title}")'>Remove</button></td>
//     <td><hr></td>
//   </tr>
//     `;
//     table.innerHTML += generatedContent;
//   });
// };

// const removeButton = document.querySelector('#removeBtn');
// removeButton.addEventListener('click', () => {
//   removeItem("id");
// });
// function removeItem(item) {
//   let bookList = JSON.parse(localStorage.getItem('bookInfo'));
//   bookList = bookList.filter((element) => {
//     return item != element.title;
//   });
//   const string = JSON.stringify(bookList);
//   localStorage.setItem('bookInfo', string);
//   window.location.reload();
// }
const titleInput = document.querySelector('.bookTitle');
const authorInput = document.querySelector('.author');
const addBtn = document.querySelector('.btnAdd');


class Books {
  constructor() {
    this.bookList = [];
  }

  addBooks() {
    const book = {
      title: titleInput.value,
      author: authorInput.value
    };
    this.bookList.push(book);
    let rd = JSON.parse(localStorage.getItem('bookInfo'));
    if (rd) {
      rd.push(book);
    } else {
      rd = [];
      rd.push(book);
    }
    const booksString = JSON.stringify(rd);
    localStorage.setItem('bookInfo', booksString);
    this.retrieveData();
////////////////////////
    // const bookInfo =
    // {
    //   title: title.value,
    //   author: author.value,
    // };
    // let rd = JSON.parse(localStorage.getItem('bookInfo'));
    // if (rd) {
    //   rd.push(bookInfo);
    // } else {
    //   rd = [];
    //   rd.push(bookInfo);
    // }
    // const string = JSON.stringify(rd);
    // localStorage.setItem('bookInfo', string);
  };

  retrieveData() {
    const data = JSON.parse(localStorage.getItem('bookInfo'));
    const table = document.querySelector('.table');
    let bookData = '';
    data.forEach(element => {
      const generatedContent = `
      <tr>
      <td>${element.title}</td>
      <td>${element.author}</td>
      <td><button id="removeBtn" onclick='removeItem("${element.title}")'>Remove</button></td>
      <td><hr></td>
    </tr>
      `;
      bookData+= generatedContent;
    });
    table.innerHTML = bookData;
  };
}

const obj = new Books();
window.onload = obj.retrieveData();
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  obj.addBooks();
})
