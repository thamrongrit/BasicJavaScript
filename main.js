const api_url = "https://jsonplaceholder.typicode.com/users";

document.addEventListener('DOMContentLoaded', function () {
  const urlText = document.getElementById("url");
  urlText.value = api_url;
  getapi(api_url,'GET');
});

// Defining async function
async function getapi(url,method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    show(data);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
// Calling that async function

// Function to define innerHTML for HTML table
async function show(data) {
	let tab = 
		`<tr>
    <th>Id</th>
		<th>Name</th>
		<th>Username</th>
		<th>Email</th>
		</tr>`;

	// Loop to access all rows 
	for (let i= 0; i < data.length; i++ ) {
		tab += `<tr> 
    <td>${data[i].id} </td>
	  <td>${data[i].name} </td>
	  <td>${data[i].username}</td>
	  <td>${data[i].email}</td> 
  </tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("user").innerHTML = tab;
}

function getInput(){
  const idValue = document.getElementById("id").value;
  const methodValue = document.getElementById("method").value;

  if(idValue){
     console.log("id");
     const new_url = api_url+'?id='+idValue;
      getapi(new_url,methodValue);
  }else{
      console.log('! id');
  }
}



