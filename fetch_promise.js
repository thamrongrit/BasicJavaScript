function getData(id) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
  
  const id = 2;
  let posts = ''; // Initialize posts variable
  
  // Usage
  getData(id)
    .then(data => {
      posts = data; // Assign data to posts
      console.log(posts);
    })
    .catch(error => {
      console.error(error);
    });
  