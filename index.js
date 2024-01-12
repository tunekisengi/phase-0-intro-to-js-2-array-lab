var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (){
    cats.push("Ralph");
    return (cats);
}

function destructivelyPrependCat (){
    cats.unshift("Bob");
    return(cats);
}
  
function destructivelyRemoveLastCat (){
    cats.pop("Garfield");
    return(cats);
}


function destructivelyRemoveFirstCat (){
    cats.shift("Milo");
    return(cats);
}

function appendCat (mysteriouscat){
   
    return([...cats, mysteriouscat]);
}

function prependCat(Bosco) {
    return([Bosco , ...cats]);

}

function removeLastCat() {
    var newCats = cats.slice(0, cats.length-1)
    return(newCats);
}

function removeFirstCat () {
    var newerCats = cats.slice(1)
    return (newerCats);
}
