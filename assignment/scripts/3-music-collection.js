console.log('***** Music Collection *****')
let albums1={
    artist: '2Pac',
    yearPublished: 1989,
    title: 'Dear Mama',
};
console.log(albums1);


albums2={
    artist: 'Biggie Smoke',
    yearPublished: 1995,
    title: 'Baller'
};
console.log(albums2);


albums3={
    artist: 'Bobby bill', 
    yearPublished: 2005,
    title: 'No one here for me'
};
console.log(albums3);


albums4={
    artist: 'Joe West Wood',
    yearPublished: 2012,
    title: 'Candy Smack'
};
console.log(albums4);


albums5={
    artist: 'Peng Thao',
    yearPublished: 2022,
    title: 'got nothing but skunk'
};
console.log(albums5);


albums6={
    artist: 'Klules Yaj',
    yearPublished: 2135,
    title: 'Waiting for true love.'
};
console.log(albums6);

console.log('The list of six ablums-------------------------------------------------------');

console.log('create an empty array---------------------------------------------------------');
let collection = [];
console.log('this is the empty collection array', collection);

console.log('add the 6th albums to collection');
function addToCollection(x){
    collection.push(x)
    return collection;
}
console.log('added to the collection array', addToCollection(albums1));
console.log('added to the collection array', addToCollection(albums2));
console.log('added to the collection array', addToCollection(albums3));
console.log('added to the collection array', addToCollection(albums4));
console.log('added to the collection array', addToCollection(albums5));
console.log('added to the collection array', addToCollection(albums6));

    console.log(addToCollection);

console.log('show me now what is inside of the collection array:',collection);


// Add a function named showCollection. This function should:

// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

console.log('on to showing the collection-------------------------------------------------');
function showCollection(collection){
    for(let i = 0; i<collection.length; i++){
            console.log(collection[i].title + " by " + collection[i].artist + " published in " + collection[i].yearPublished)

    }
        return collection.length; 
}
console.log(" this is how much items is in the collection array", showCollection(collection));
console.log(albums1.title);


let noArtistFound = [];

function findByArtist(artist) {
    for( let i = 0; i<collection.length; i++){
        if( artist === collection[i]){
            return collection[i].artist;  
        }
        else{
            console.log('No artist was found', noArtistFound);
        }
    }

}

console.log('Can we find this artist called 2Pac:', findByArtist('2Pac'));



























// function showCollection (collection){
    
//     for (i=0 ; i<collection.length ; i++){
//         console.log(collection[i].title + " by " + collection[i].artist + " published in " + collection[i].yearPublished)
//     }//end for
//     return collection.length;
// }//end showCollection
// console.log('this is how many items are in the array:', showCollection(collection) );

// let Artist = []
// function findByArtist(x){
//     for (i=0; i<collection.length; i++){
//        if (x === collection[i].artist){
//             Artist.push(collection[i])
//         }//end if
//     }//end for
//     return x;
// }//end findByArtist
// console.log('finding if this artist is in array:', findByArtist('The Killers') )
// console.log(Artist)