export default function searchByTitle(arrBooks, bookTitle){
    return arrBooks.filter(function(book){
        return book.title == bookTitle
    })
}