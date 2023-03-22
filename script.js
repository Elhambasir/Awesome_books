const bookList = document.querySelector('.list');
const addToList = document.querySelector('.addToList');
const contact = document.querySelector('.contact');
const btnList = document.querySelector('#list');
const btnAddNew = document.querySelector('#addNew');
const btnContact = document.querySelector('#contact');
const datetime = new Date().toLocaleString("en-US", { day: 'numeric',year: "numeric", month: 'long',hour:'2-digit',minute: "2-digit", second: '2-digit', hour12: 'long' });
const dateTimeContainer = document.querySelector('#date');
dateTimeContainer.innerHTML = datetime;
bookList.classList.add('show');

btnList.addEventListener('click', () => {
  bookList.classList.add('show');
  contact.classList.remove('show');
  addToList.classList.remove('show');
});
btnAddNew.addEventListener('click', () => {
  addToList.classList.add('show');
  bookList.classList.remove('show');
  contact.classList.remove('show');
});
btnContact.addEventListener('click', () => {
  contact.classList.add('show');
  bookList.classList.remove('show');
  addToList.classList.remove('show');
});



const titleInput = document.querySelector('.bookTitle');
const authorInput = document.querySelector('.author');
const addBtn = document.querySelector('.btnAdd');
const removeButton = document.querySelector('#removeBtn');

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
  }

  removeItem(item) {
    console.log('hello')
    let bookList = JSON.parse(localStorage.getItem('bookInfo'));
    bookList = bookList.filter((element) => {
      return item != element.title;
    });
    const string = JSON.stringify(bookList);
    localStorage.setItem('bookInfo', string);
    window.location.reload();
  }

  retrieveData() {
    const data = JSON.parse(localStorage.getItem('bookInfo'));
    if (data) {
      const table = document.querySelector('.table');
      let bookData = '';
      data.forEach(element => {
        const generatedContent = `
        <tr>
        <td>"${element.author}" by ${element.title}</td>
        <td><button id="removeBtn" onclick='removeFun("${element.title}")'>Remove</button></td>
        </tr>
        `;
        bookData += generatedContent;
      });
      table.innerHTML = bookData;
    }
  }
}

const obj = new Books();
window.location.reload = obj.retrieveData();
addBtn.addEventListener('click', () => {
  if(titleInput.value && authorInput.value){
    obj.addBooks();
  }
})

function removeFun(item) {
  obj.removeItem(item)
}

removeButton.addEventListener('click', () => {
  obj.removeItem("id");
  removeFun("id");
});


