
function generateProjectCards() {

  let projectCards = [
    {
      title: 'Project 1',
      description: 'This is the first project.',
      image: "/images/dog-1"
    },
    {
      title: 'Project 2',
      description: 'This is the second project.',
      image: "/images/dog-2"
    },
    {
      title: 'Project 3',
      description: 'This is the third project.',
      image: "/images/dog-3"
    },
    {
      title: 'Project 4',
      description: 'This is the fourth project.',
      image: "/images/dog-4"
    }
  ];


   //find the projectSection and store it in a variable called projectCardSection
   const projectCardSection = document.getElementById("projectSection");
   
  //loop through the cards to generate the HTML
  for (let card of projectCards) {

    //create the card div
    const cardDiv = document.createElement("div");
    //create a title node
    const titleNode = document.createTextNode(card.title);
    //append the title node to the card div
    cardDiv.appendChild(titleNode);

    //create a description node
    const descriptionNode = document.createTextNode(card.description);
    //append the description node to the card div
    cardDiv.appendChild(descriptionNode);

    //create an image element
    const imageElement = document.createElement("img");
    //set the src attribute of the image element
    imageElement.setAttribute("src", card.image);
    //append the image element to the card div
    cardDiv.appendChild(imageElement);

    console.log(projectCardSection);

    //append the card div to the project card section
    projectCardSection.appendChild(cardDiv);
  }
}

//call the function to generate the cards
generateProjectCards();
