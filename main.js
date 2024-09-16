// Fetch project data from JSON file
const response = await fetch('/assets/data.json');
const projects = await response.json();

// Function to dynamically create project cards
function getProjects(projects){
    projects.forEach(element => {
        // Create main elements for the project card
        const divProjects = document.querySelector(".projects");
        const card = document.createElement("article");
        card.setAttribute("class" , "card");

        // Create and set up project image
        const imageCard = document.createElement("img");
        imageCard.src = element.cover;
        imageCard.setAttribute("class", "cover");
        imageCard.setAttribute("alt", "Photo du site : " + element.title);

        // Create container for project text content
        const cardText = document.createElement("div");
        cardText.setAttribute("class" , "card-text");
        
        // Create and populate project title
        const cardTitle = document.createElement("h3");
        cardTitle.innerText = element.title;
        
        // Create container for project links content
        const cardLink = document.createElement("div");
        cardLink.setAttribute("class" , "card-link");

        // Create GitHub link
        const githubLink = document.createElement("a");
        githubLink.href = element.githubUrl;
        githubLink.setAttribute("target" , "_blank")
        githubLink.innerText = "Le repo GitHub";
        
        // Create site link
        const siteLink = document.createElement("a");
        siteLink.href = element.siteUrl;
        siteLink.setAttribute("target" , "_blank")
        siteLink.innerText = "Le site";

        // Create and populate problems and solutions section
        const problems = document.createElement("h4");
        problems.innerText = "Problématiques et résolution";
        const problemsDesc = document.createElement("p");
        problemsDesc.innerText = element.problems;

        // Create and populate project description
        const desc = document.createElement("h4");
        desc.innerText = "Description";
        const p = document.createElement("p");
        p.innerText = element.description;
        
        // Create skills section
        const skillsTitle = document.createElement("h4");
        skillsTitle.innerText = "Compétences développées";
        const list = document.createElement("ul");
        
        // Append all elements to build the card structure
        divProjects.appendChild(card);
        card.appendChild(imageCard);
        card.appendChild(cardText);
        cardText.appendChild(cardTitle);
        cardText.appendChild(desc);
        cardText.appendChild(p);
        cardText.appendChild(problems);
        cardText.appendChild(problemsDesc)
        cardText.appendChild(skillsTitle);
        cardText.appendChild(list);
        
        // Populate skills list
        for (let i = 0; i < element.skills.length; i++){
            const skills = document.createElement("li");
            skills.innerText = element.skills[i];
            list.appendChild(skills);
        };

        cardText.appendChild(cardLink);
        cardLink.appendChild(githubLink);
        cardLink.appendChild(siteLink);
    });
};

// Call the function to generate project cards
getProjects(projects);

// Contact form submission handler
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('name').value;
    const nameSociety = document.getElementById('name-society').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data to backend
    fetch('https://portfolio-sender-email.onrender.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            nameSociety: nameSociety,
            email: email,
            message: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            return  response.json()
        }
        throw new Error('Erreur lors de l\'envoi du message');
    })
    .then(data => {
        // Reset form and show success message
        form.reset();
        console.log('Success:', data);
        alert('Message envoyé avec succès!');
    })
    .catch((error) => {
        // Log error and show error message
        console.error('Error:', error);
        alert('Erreur lors de l\'envoi du message.');
    });
});
