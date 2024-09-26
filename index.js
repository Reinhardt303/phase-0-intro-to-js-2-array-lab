// Write your solution here
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newcatsarray = [...cats, name]
    return newcatsarray
}

function prependCat(name) {
    const newcatsarray = [name, ...cats]
    return newcatsarray
}

function removeLastCat() {
    const copyOfCatsSlice = cats.slice(0, -1)
    return copyOfCatsSlice
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1)
    return copyOfCats
}