//1
const pokemonIds = [1, 4, 7]; // IDs de los Pokémones que queremos solicitar

const requests = pokemonIds.map(id => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
);

Promise.all(requests)
    .then(pokemons => {
        const names = pokemons.map(pokemon => pokemon.name);
        let values = names.join(', ');
        console.log(values)
    })
    .catch(error => console.error('Error fetching Pokémon data:', error));

//2
Promise.any(requests)
    .then( value => console.log(value.name))

//3
const words = ["very", "dogs", "cute", "are"];

const promises = words.map((word, index) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(word);
        }, 1000 * (index + 1)); // Simula un retraso para cada palabra
    });
});

Promise.all(promises)
    .then(results => {
        // Ordenar las palabras en el orden correcto
        const orderedWords = [results[1], results[3], results[0], results[2]];
        const sentence = orderedWords.join(' ');
        console.log(sentence); // "Dogs are very cute"
    })
    .catch(error => console.error('Error:', error));

//4
fetch('https://reqres.in/api/users/2')
    .then( response => response.json())
    .then( data => console.log(data.data.first_name, data.data.last_name))

fetch('https://reqres.in/api/users/23')
    .then( response => response.json())
    .then( data => console.log(data.data.first_name, data.data.last_name))
    .catch( error => console.log('User was not found: ',error))