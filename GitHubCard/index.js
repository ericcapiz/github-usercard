import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/ericcapiz')
.then(response =>{
  console.log(response);
  const ericProfile = response.data; //variable holds the data api
  const proCards = document.querySelector('.cards');
  const proInfo = gitCard(ericProfile); //variable holds the function that creates and displays the card
  proCards.appendChild(proInfo) //displays the card in the cards div
})
.catch((errorResponse)=>{
  alert('Something Broke')
})

//follower array with forEach below
const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",];

  followersArray.forEach (user => axios.get(`https://api.github.com/users/${user}`)
  .then (response => {
    let card = gitCard(response.data)
    const cards = document.querySelector('.cards')
    cards.appendChild(card)
  }))

//

const gitCard=(obj)=>{

  //create elements

  const gitCard = document.createElement('div');
  const proImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameH3 = document.createElement('h3');
  const pUser= document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const proLink = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  //add classes

  gitCard.classList.add('card');
  cardInfo.classList.add('card-info');
  nameH3.classList.add('name');
  pUser.classList.add('username');
  proLink.href = obj.html_url;
  

  //append

  gitCard.appendChild(proImage);
  gitCard.appendChild(cardInfo);
  cardInfo.appendChild(nameH3);
  cardInfo.appendChild(pUser);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);

//assigning the data from the api

  proImage.src = obj.avatar_url;
  pLocation.textContent = `Location: ${obj.location}`;
  nameH3.textContent = `Name: ${obj.name}`;
  pUser.textContent = `Username: ${obj.login}`;
  proLink.textContent = obj.html_url;
  pProfile.textContent = `Profile: `
  pProfile.appendChild(proLink)
  
  pFollowers.textContent = `Followers: ${obj.followers}`;
  pFollowing.textContent = `Following: ${obj.following}`;
  pBio.textContent = `Bio: ${obj.bio}`;
  


  return gitCard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
