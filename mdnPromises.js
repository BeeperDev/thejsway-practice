const fetch1Promise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetch1Promise.then( response => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request...");

// THIS is what is returned >>
// Promise { <state>: "pending" }
// Started request...
// Received response: 200


const fetch2Promise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetch2Promise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( data => {
    console.log(data[0].name);
  });
});

// This is what is returned >>
// Promise { <state>: "pending" }
// "baked beans"


// We can rewrite the above code like this>
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    return response.json();
  })
  .then( data => {
    console.log(data[0].name);
  });
