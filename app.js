console.log("test");
// form submit event
const form = document.querySelector('form');
form.addEventListener('submit', addBook);

const bookInput = document.querySelector("#book");
const bookList = document.querySelector("ul");

function addBook(e) {
	const book = new Book(bookInput.value);
	
	ui.addBook(book);
	ls.addBook(book);
	e.preventDefault();

	console.log("addBook");

}
