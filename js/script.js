console.log('JS OK')

//CREO ARRAY CON OGGETTI
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg",
    },
    
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg",
    },
];

console.log(team);

//STAMPO SUL DOM E CREO IMG
for (let i = 0; i < team.length; i++) {

    const teamMember = team[i];
    console.log(teamMember.name);
    console.log(teamMember.role);
    console.log(teamMember.img);

    const displayedMembers = document.createElement("div");
    const row = document.querySelector(".row").append(displayedMembers);

    displayedMembers.innerHTML += ` <img src="${teamMember.img}" class="img-fluid pt-3"> `
    displayedMembers.innerHTML += ` <div class="text-uppercase fs-2 pt-2 text-primary"> ${teamMember.name} </div> `
    displayedMembers.innerHTML += ` <div class="text-uppercase pb-3 text-secondary"> ${teamMember.role} </div> `
    displayedMembers.className = "col-4 mb-3";
}