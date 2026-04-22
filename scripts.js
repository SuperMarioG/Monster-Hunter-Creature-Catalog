/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
// image URLs for each monster hunter creature used in the cards
const Rathalos_URL =
  "https://static.wikia.nocookie.net/monsterhunter/images/1/12/MHWilds-Rathalos_Render_001.png/revision/latest?cb=20251112050049";
const Lagiacrus_URL =
  "https://static.wikia.nocookie.net/monsterhunter/images/7/77/MHWilds-Lagiacrus_Render_001.png/revision/latest?cb=20250626232337";
const Gore_Magala_URL =
  "https://static.wikia.nocookie.net/monsterhunter/images/1/19/MHWilds-Gore_Magala_Render_001.png/revision/latest?cb=20250204234508";
const Dodogama_URL =
"https://static.wikia.nocookie.net/monsterhunter/images/d/d3/MHW-Dodogama_Render_001.png/revision/latest?cb=20180111125129"
const Rathain_URL = 
"https://static.wikia.nocookie.net/monsterhunter/images/5/52/RathianWilds.png/revision/latest?cb=20250207223610"
const Nargacuga_URL = 
"https://static.wikia.nocookie.net/monsterhunter/images/2/23/MHRise-Nargacuga_Render_001.png/revision/latest?cb=20210308140819"
// Changed from string array to array of monster data objects used to generate the cards on the page
//each object stores basica information about a monster hunter creature
let titles = [
  {
    name: "Rathalos",
    type: "Flying Wyvern",
    element: "Fire",
    weakness: "Dragon"
  },
  {
    name: "Lagiacrus",
    type: "Leviathan",
    element: "Thunder",
    weakness: "Fire"
  },
  {
    name: "Gore Magala",
    type: "Elder Dragon",
    element: "None (Frenzy)",
    weakness: "Fire"
  },
  {
    name: "Dodogama",
    type: "Fanged Wyvern",
    element: "Blast",
    weakness: "Thunder"
  },
   {
    name: "Rathian",
    type: "Flying Wyvern",
    element: "Fire",
    weakness: "Thunder"
  },
   {
    name: "Nargacuga",
    type: "Flying Wyvern",
    element: "Water",
    weakness: "Thunder"
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const images = [Rathalos_URL,Lagiacrus_URL,Gore_Magala_URL,Dodogama_URL,Rathain_URL,Nargacuga_URL]; // changed it so its an array of images that match the order of monsters in object array

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
   const monsterhunter = titles[i];
 const imageURL = images[i] || "";
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.


    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, monsterhunter, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, monster, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = monster.name; // set the monster's name in header

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = monster.name + " Poster";
 
  card.querySelector(".type").textContent = "Type: " + monster.type; // fill in the monsters details such as type element and weakness
  card.querySelector(".element").textContent = "Element: " + monster.element;
  card.querySelector(".weakness").textContent = "Weakness: " + monster.weakness;
  // this is a darkening feature click once to darken - monster is defeated- click twice to undarken

card.addEventListener("click", function(){
  this.classList.toggle("darkened");


})
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", monster.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Hitting the monsters usually does damage to them, careful out there hunter!!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
  
  
}
