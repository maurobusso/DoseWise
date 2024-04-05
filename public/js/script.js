//this variable is to show the warning if patient is female
let warning = false

// Determine if the current environment is production based on the hostname
const isProduction = window.location.hostname !== 'localhost';

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
  const url = isProduction ? `https://dose-wise.vercel.app/injectionHistory/item/delete/${id}` : `http://localhost:5000/item/delete/${id}`
    try{
        const response = await fetch( url, {
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
  const url = isProduction ? `https://dose-wise.vercel.app/medications/delete/{id}` : `http://localhost:5000/medications/delete/${id}`
  try{
      const response = await fetch( url, {
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
// maybe remove this global variable
const calculateButton = document.getElementById('calculateButton')
//need to check if form exist before atahcing an event listener
if(calculateButton){
  calculateButton.addEventListener('click', showmedicationsTable)
}else{
  console.log('calculateButton element not found')
}

const medicationsTable = document.getElementById('medicationsTable')
const resultButton = document.getElementById('resultButton')

function showmedicationsTable(){
  console.log('clicked')
  event.preventDefault()
  medicationsTable.classList.remove('hidden')
  resultButton.classList.remove('hidden')
}

//try this to send the data from the first form to the server wiothoput having to reload the page
const form = document.getElementById('myForm')

if(form){
  form.addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const formData = new FormData(form); // Get form data
  
    fetch('https://example.com/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  })
}


// async function deleteMedication(id) {
//   try{
//       const response = await fetch(`http://localhost:5000/item/getWeight${id}`, {
//           method: 'GET',
//       });
//       if(response.ok){
//           location.reload()
//       }else{
//           console.log('Failed to delete item')
//       }        
//   }catch(error){
//       console.log(error)
//   }  
// }

// function result(){
//   const popUp = document.getElementById('popup')

//   popUp.classList.toggle('hidden')

// }