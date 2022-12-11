//A Map holds key-value pairs where the keys can be any datatype.
const cities = new Map();
cities.set("bern",994);// method adds or updates an entry in a Map objet
cities.set("zurich",739);
//unlike object literals the Map accepts any key type
for (const [key, value] of cities) {
    console.log(key, value);///bern 994
                          ///zurich 739
}
console.log(cities.has("bern"));  //returns a boolean
console.log(cities.get("bern")); //994
console.log(cities.size); //2
console.log(cities.delete("zurich")) //removes specified element
console.log(cities) //{ 'bern' => 994 }
//cities.clear() removes all elements from a Map object.