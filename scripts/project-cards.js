console.log("pc");

function addElementToPage() {

  console.log("thing done");

  const node = document.createElement("div");

  document.body.appendChild(node);

};


function createProjectCards() {
  let projectCards = [
    {
      title: 'Project 1',
      description: 'This is the first project.',
      image: 'https://placekitten.com/200/200'
    },
    {
      title: 'Project 2',
      description: 'This is the second project.',
      image: 'https://placekitten.com/200/200'
    },
    {
      title: 'Project 3',
      description: 'This is the third project.',
      image: 'https://placekitten.com/200/200'
    },
    {
      title: 'Project 4',
      description: 'This is the fourth project.',
      image: 'https://placekitten.com/200/200'
    }
  ];
}

// function drawProjectCards(){}
