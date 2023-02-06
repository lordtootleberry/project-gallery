
function generateProjectCards() {

  let projectCards = [
    {
      title: 'Project 1',
      description: 'This is the first project.',
      image: "/images/dog-1.jpg"
    },
    {
      title: 'Project 2',
      description: 'This is the second project.',
      image: "/images/dog-2.jpg"
    },
    {
      title: 'Project 3',
      description: 'This is the third project.',
      image: "/images/dog-3.jpg"
    },
    {
      title: 'Project 4',
      description: 'This is the fourth project.',
      image: "/images/dog-4.jpg"
    }
  ];


   //find the projectSection and store it in a variable called projectCardSection
   const projectCardSection = document.getElementById("projectSection");
   
  //loop through the cards to generate the HTML
  for (let pc of projectCards) {
    //create a div elenment to hold the card
    const card = document.createElement("div");
    projectCardSection.appendChild(card);

    const title = document.createElement("h2");
    title.textContent = pc.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = pc.description;
    card.appendChild(description);

    const image = document.createElement("img");
    image.src = pc.image;
    card.appendChild(image);

  }
}

//call the function to generate the cards
generateProjectCards();
