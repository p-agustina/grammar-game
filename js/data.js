let wordsArr = [
    {word: "Bad", article: "das"},
    {word: "Küche", article: "die"},
    {word: "Floor", article: "der"},
    {word: "Kartoffel", article: "die"},
    {word: "Käse", article: "der"}
]

//1st choose a random string from the array

let wordObject = wordsArr[Math.floor(Math.random() * wordsArr.length)];

 console.log(wordObject)

//2nd display only the word in the box





//3rd check if article is das, die or der

console.log(wordObject.article)


//when it jumps use stop loop function (n)


//4th if das/der/die return score += 100 && display "correct"

