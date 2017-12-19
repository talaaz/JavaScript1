let text = "This is a string";
console.log(text.substring(2)); // "is is a string"
console.log(text.substring(5)); // "is a string"
console.log(text.substring(12)); // "ring"


let text1 = "hello";

for (let i = 0; i < text1.length; i++) {
  console.log(text1.substring(i));
}

// hello
// ello
// llo
// lo
// o


let text2 = "pizza";
for (let i=0; i<text2.length; i++){
  console.log(text2.substring(i));
}
// pizza
// izza
// zza
// za
// a

let text3= "græskar";
for(let i=0; i<text3.length; i++){
  console.log(text3.substring(i));
}
// græskar
// ræskar
// æskar
// skar
// kar
// ar
// r
