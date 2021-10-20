class Book {
	constructor(name, author, isbn){
		this.name = name;
		this.author = author;
		this.isbn = isbn;
	}
	addedToUI(){
		console.log(this.name + " " + this.author + " " + this.isbn + " is added to UI");
	}
	addedToLS(){
		console.log(this.name + " " + this.author + " " + this.isbn + " is added to LS");
	}
};