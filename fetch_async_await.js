// Exemple 1
// fetch('https://jsonplaceholder.typicode.com/posts?id=1', {
//   method: 'GET',
//   headers: {
//       'Accept': 'application/json',
//   },
// })
//  .then(res => { 
//   return res.json();
// })
//  .then(res => console.log(res))
//  .catch( err => console.log(err));


// Exemple 2
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?id=1', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();
