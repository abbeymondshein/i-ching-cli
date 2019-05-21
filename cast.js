// generate coin tosses that combine together to form hexagrams

class Coin {
 toss() {
   return (Math.floor(Math.random() * 2))
 }
 generateLine(){

 }
}

const ex = new Coin;

console.log(ex.toss());
