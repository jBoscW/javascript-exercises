const getTheTitles = function(arr) {
    return arr.reduce((arrTemp, book) => {
        arrTemp.push(book.title);
        return arrTemp;
        }, []);
};




// const getTheTitles = function(arr) {
//     titles = [];
//     for (const book of arr) {
//         titles.push(book.title);
//     };
//     return titles;
// }


// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
// getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
