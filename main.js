/*Projects section*/
const response = await fetch('/assets/data.json');
const projects = await response.json();
console.log(projects);

function getProjects(projects){
    projects.forEach(element => {
        const divProjects = document.querySelector(".projects");

        const card = document.createElement("article");
        card.setAttribute("class" , "card");

        const imageCard = document.createElement("img");
        imageCard.src = element.cover;
        imageCard.setAttribute("class", "cover");

        const cardText = document.createElement("div");
        cardText.setAttribute("class" , "card-text");

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = element.title;

        const githubLink = document.createElement("a");
        githubLink.href = element.githubUrl;
        githubLink.innerText = "Lien du repo GitHub";

        const desc = document.createElement("h4");
        desc.innerText = "Description:";
        
        const p = document.createElement("p");
        p.innerText = element.description;
        
        const skillsTitle = document.createElement("h4");
        skillsTitle.innerText = "Compétences développées:";

        const list = document.createElement("ul");
        
        divProjects.appendChild(card);

        card.appendChild(imageCard);
        card.appendChild(cardText);

        cardText.appendChild(cardTitle);
        cardText.appendChild(githubLink);
        cardText.appendChild(desc);
        cardText.appendChild(p);
        cardText.appendChild(skillsTitle);
        cardText.appendChild(list);

        for(let i=0; i<element.skills.length; i++){
            const skills = document.createElement("li");
            skills.innerText = element.skills[i];
            list.appendChild(skills);
        };
    });
};

getProjects(projects)


/*Contact form*/
const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const nameSociety = document.getElementById('name-society').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(name);
    console.log(nameSociety);
    console.log(email);
    console.log(message);
});