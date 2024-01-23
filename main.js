const api_url = "https://jsonplaceholder.typicode.com/posts";

document.addEventListener('DOMContentLoaded', function () {
  const urlText = document.getElementById("url");
  urlText.value = api_url;
  getapi(api_url,'GET');
});

// Defining async function
async function getapi(url,method,body) {
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body), 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
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
		<th>Title</th>
		<th>Body</th>
		<th>UserId</th>
		</tr>`;

	// Loop to access all rows 
	for (let i= 0; i < data.length; i++ ) {
		tab += `<tr> 
    <td>${data[i].id} </td>
	  <td>${data[i].title} </td>
	  <td>${data[i].body}</td>
	  <td>${data[i].userId}</td> 
  </tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("user").innerHTML = tab;
}

function getInput(){
  const methodValue = document.getElementById("method").value; 
  const idValue = document.getElementById("id").value;
  const titleValue = document.getElementById("title").value;
  const bodyValue = document.getElementById("body").value;
  const userIdValue = document.getElementById("userId").value;
   
  console.log(methodValue);
  console.log(idValue);
  console.log(titleValue);  
  console.log(bodyValue);
  console.log(userIdValue);

 
  if (methodValue == 'GET') {
    if(idValue){
     const new_url = api_url+'?id='+idValue;
      getapi(new_url,methodValue);
    }else{
      getapi(api_url,methodValue);
     }
  }else if(methodValue == 'POST'){
     const body ={
      title: titleValue,
      body: bodyValue,
      userId: userIdValue
    }
     getapi(api_url,methodValue,body);

  }


}



