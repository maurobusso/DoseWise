//handle male female inputs
//with this global variable we achieve the alert only once when female ic checked and not every single time which would be annoing for the user

// const port = process.env.PORT || 8000

let warning = false

  function toggleMaleFemale(){

      let male = document.getElementById('male').checked
      let female = document.getElementById('female').checked
  
        if( male ){
          document.getElementById('female').checked = false
        }else if( female && !warning ){
          document.getElementById('male').checked = false
          alert('Make sure the patient is not pregnant since injection of local anesthetic can be dangerous for the fetus')
          warning = true
        }else if( female ){
          document.getElementById('male').checked = false
        }
  }  


  window.onload = function() {
    //checkForError();
  };



//Handle edit requests
//we utilize the form behavior to do this update
function editItem(id, name, description) {
    document.getElementById("updateForm").removeAttribute('hidden')

    // Populate the hidden field with the id
    document.getElementById("updateId").value = id;
  
    // Populate the form fields with the existing item's data
    document.getElementById("updateName").value = name;
    document.getElementById("updateDescription").value = description;
  
    // Update the form's action attribute
    document.getElementById("updateForm").action = `/item/update/${id}`;
  }



//Handle delete requests
async function deleteItem(id) {
    try{
        const response = await fetch(`http://localhost:5000/item/delete/${id}`, {
            method: 'DELETE',
        });
        if(response.ok){
            location.reload()
        }else{
            console.log('Failed to delete item')
        }        
    }catch(error){
        console.log(error)
    }  
}


async function deleteMedication(id) {
  try{
      const response = await fetch(`http://localhost:5000/medications/delete/${id}`, {
          method: 'DELETE',
      });
      if(response.ok){
          location.reload()
      }else{
          console.log('Failed to delete item')
      }        
  }catch(error){
      console.log(error)
  }  
}


//show form in medications.ejs
function showForm(){
  document.getElementById('addMedication').removeAttribute('hidden')
  document.getElementById('newAnaestheticButton').style.display = 'none' 
}


//toggle menue when clickin on the burger menue when on small screens

const burgerMenue = document.getElementById('burgerMenue')
burgerMenue.addEventListener('click', toggleMenue)

const navbar = document.getElementById('navbar')

function toggleMenue(){
  //console.log('toggled')
  if(navbar.classList.contains("hidden")){
    navbar.classList.remove('hidden')
  }else{
    navbar.classList.add('hidden')
  }
}

//show list of medication when calculate button is clicked

const calculateButton = document.getElementById('calculateButton')
calculateButton.addEventListener('click', showmedicationsTable)

const medicationsTable = document.getElementById('medicationsTable')
const resultButton = document.getElementById('resultButton')

function showmedicationsTable(){
  event.preventDefault()
  medicationsTable.classList.remove('hidden')
  resultButton.classList.remove('hidden')
}



//get weight value

document.getElementById("calculateButton").addEventListener("click", async function() {
  try {
    const response = await fetch("/item/getWeight");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    // Handle the retrieved data here
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
});

// document.getElementById("calculateButton").addEventListener("click", function() {
//   console.log('hello')
//   // Retrieve the weight input value
//   let weight = document.getElementById("weight").value;

//   // Create a new XMLHttpRequest object
//   let xhr = new XMLHttpRequest();

//   // Configure the AJAX request
//   xhr.open("POST", "/getWeight", true);
//   xhr.setRequestHeader("Content-Type", "application/json");

//   // Set up the callback function when the AJAX request completes
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       console.log("Weight calculation successful");
//       // Optionally, you can handle the response from the server here
//     } else {
//       console.error("Error calculating weight:", xhr.statusText);
//     }
//   };

//   // Convert the weight value to JSON format
//   var data = JSON.stringify({ weight: weight });

//   // Send the AJAX request with the weight data
//   xhr.send(data);
// });