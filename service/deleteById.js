export default function deleteById(arrBooks, id) {
    let book = arrBooks.filter(function(book){
        return book.code == id;
    })
    let indexBook = arrBooks.indexOf(book[0])
    arrBooks.splice(indexBook,1)
}