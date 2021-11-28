
//transform: translteY 1600max
window.addEventListener('scroll',function(){
	console.log(window.scrollY);
    document.querySelector('.paralaxe').style.transform='translate('+(window.scrollY-2000)+'px)';
    document.querySelector('.paralaxe2').style.transform='translate('+(window.scrollY-2000)+'px)';
    document.querySelector('.paralaxe3').style.transform='translate('+(window.scrollY-2000)+'px)';
 
}); /* */

// function pour le slide
let tabl = [
    "https://www.youtube.com/embed/nbgX_N-Bpvo",
    "https://www.youtube.com/embed/rpmLV2xBK74"
];
let num = 0;
function next(){
    let slider = document.getElementById("slider");
    num++;
    if(num >= tabl.length) {
        slider.src = tabl[num];
    }
}
function prev(){
    let slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = tabl.length-1;
    }
    slider.src = tabl[num];
}
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);

//fonction pour la description des groupes :
document.querySelector(".card-one").addEventListener("click", function(){
    let progCard = document.getElementById("prog-card");

    let title = document.querySelector('.card-title');
    title.textContent = "AIRBOURNE";
    title.classList.add("group-title");
    progCard.appendChild(title);

    let description = document.querySelector('.card-description');
    description.style.color = "white";
    description.textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis earum dolore quia qui aperiam quos at eius. Ullam, repellendus! Nemo nostrum deleniti beatae commodi at, deserunt vero architecto reprehenderit praesentium!";
    progCard.appendChild(description);

    let titleMusic = document.querySelector(".title-music");
    titleMusic.textContent = "Trouble in MotorCity";
    titleMusic.style.marginTop = "20px";
    progCard.appendChild(titleMusic);

    let lecteur =  document.querySelector('.lecteur');
    lecteur.setAttribute("controls", "true");
    lecteur.setAttribute("src","media/musics/motorjesus.mp3");
    lecteur.style.height = "20px";
    progCard.appendChild(lecteur);

    let space = document.createElement('br');
    progCard.appendChild(space);
});

document.querySelector(".card-two").addEventListener("click", function(){
    let progCard = document.getElementById("prog-card");

    let title = document.querySelector('.card-title');
    title.textContent = "METALLICA";
    title.classList.add("group-title");
    progCard.appendChild(title);

    let description = document.querySelector('.card-description');
    description.style.color = "white";
    description.textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis earum dolore quia qui aperiam quos at eius. Ullam, repellendus! Nemo nostrum deleniti beatae commodi at, deserunt vero architecto reprehenderit praesentium!";
    progCard.appendChild(description);

    let titleMusic = document.querySelector(".title-music");
    titleMusic.textContent = "The simple man";
    titleMusic.style.marginTop = "20px";
    progCard.appendChild(titleMusic);

    let lecteur =  document.querySelector('.lecteur');
    lecteur.setAttribute("controls", "true");
    lecteur.setAttribute("src","media/musics/shinedown.mp3");
    lecteur.style.height = "20px";
    progCard.appendChild(lecteur);
    
    let space = document.createElement('br');
    progCard.appendChild(space);
});

document.querySelector(".card-three").addEventListener("click", function(){
    let progCard = document.getElementById("prog-card");

    let title = document.querySelector('.card-title');
    title.textContent = "IRON MAIDEN";
    title.classList.add("group-title");
    progCard.appendChild(title);

    let description = document.querySelector('.card-description');
    description.style.color = "white";
    description.textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis earum dolore quia qui aperiam quos at eius. Ullam, repellendus! Nemo nostrum deleniti beatae commodi at, deserunt vero architecto reprehenderit praesentium!";
    progCard.appendChild(description);

    let titleMusic = document.querySelector(".title-music");
    titleMusic.textContent = "Livin on prayer";
    titleMusic.style.marginTop = "20px";
    progCard.appendChild(titleMusic);

    let lecteur =  document.querySelector('.lecteur');
    lecteur.setAttribute("controls", "true");
    lecteur.setAttribute("src","media/musics/Steel Panther.mp3");
    lecteur.style.height = "20px";
    progCard.appendChild(lecteur);
    
    let space = document.createElement('br');
    progCard.appendChild(space);
});

document.querySelector(".card-four").addEventListener("click", function(){
    let progCard = document.getElementById("prog-card");

    let title = document.querySelector('.card-title');
    title.textContent = "DISTURBED";
    title.classList.add("group-title");
    progCard.appendChild(title);

    let description = document.querySelector('.card-description');
    description.style.color = "white";
    description.textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis earum dolore quia qui aperiam quos at eius. Ullam, repellendus! Nemo nostrum deleniti beatae commodi at, deserunt vero architecto reprehenderit praesentium!";
    progCard.appendChild(description);

    let titleMusic = document.querySelector(".title-music");
    titleMusic.textContent = "The Metal";
    titleMusic.style.marginTop = "20px";
    progCard.appendChild(titleMusic);

    let lecteur =  document.querySelector('.lecteur');
    lecteur.setAttribute("controls", "true");
    lecteur.setAttribute("src","media/musics/The Metal.mp3");
    lecteur.style.height = "20px";
    progCard.appendChild(lecteur);
    
    let space = document.createElement('br');
    progCard.appendChild(space);
});

document.querySelector(".card-five").addEventListener("click", function(){
    let progCard = document.getElementById("prog-card");

    let title = document.querySelector('.card-title');
    title.textContent = "AC/DC";
    title.classList.add("group-title");
    progCard.appendChild(title);

    let description = document.querySelector('.card-description');
    description.style.color = "white";
    description.textContent = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis earum dolore quia qui aperiam quos at eius. Ullam, repellendus! Nemo nostrum deleniti beatae commodi at, deserunt vero architecto reprehenderit praesentium!";
    progCard.appendChild(description);

    let titleMusic = document.querySelector(".title-music");
    titleMusic.textContent = "The number of the beast";
    titleMusic.style.marginTop = "20px";
    progCard.appendChild(titleMusic);

    let lecteur =  document.querySelector('.lecteur');
    lecteur.setAttribute("controls", "true");
    lecteur.setAttribute("src","media/musics/The number of the beast.mp3");
    lecteur.style.height = "20px";
    progCard.appendChild(lecteur);
    
    let space = document.createElement('br');
    progCard.appendChild(space);
});

//fonction pour création du formauleire newsletter
document.querySelector(".billeterie-newsletter").addEventListener("click", function(){
    let form = document.querySelector('.form');
    
    //element div container
    let container = document.createElement('div');
    container.style.position = "absolute";
    container.style.marginLeft = "40%";
    container.style.marginRight = "40%";
    container.style.width = "300px";
    container.style.height = "150px";
    container.style.backgroundColor = "black";
    container.style.border = "1px solid darkred";
    container.style.borderRadius = "5px";
    form.appendChild(container);

    //texte
    let text = document.createElement('p');
    text.textContent = "NEXSLETTER";
    text.style.fontFamily = "exodus_demostriped";
    text.style.fontSize = "25px";
    text.style.color = "white";
    text.style.textAlign = "center";

    //input
    let input = document.createElement('input');
    input.style.width = "200px";
    input.style.height = "30px";
    input.placeholder = " adresse@mail.com";
    input.style.color = "darkred";
    input.style.marginLeft = "50px";
    input.style.borderRadius = "5px";
    input.style.border = "2px solid darkred";
    input.style.marginTop = "5px";
    //bouton
    let btn = document.createElement('button');
    btn.textContent = "ENVOYER";
    btn.classList.add("button");
    //croix
    let cross = document.createElement('p');
    cross.textContent = "X";
    cross.style.fontWeight = "bold";
    cross.style.padding = "5px";
    cross.style.cursor = "pointer";
    cross.style.color = "darkred";
    cross.addEventListener("click", sup);

    container.appendChild(cross);
    container.appendChild(text);
    container.appendChild(input);
    container.appendChild(btn);

    //pour faire disparaitre la newsletter et son animation
    document.querySelector(".billeterie-newsletter").style.visibility = "hidden";
    document.querySelector(".bull").style.visibility = "hidden";
});
//fermer le formulaire de la newsletter :
function sup(){
    //pour sortir du formulaire
    document.querySelector(".form").innerHTML="";
    //pour réafficher la newsletter et son animation
    document.querySelector(".billeterie-newsletter").style.visibility = "visible";
    document.querySelector(".bull").style.visibility = "visible";
}

//compte à rebour
 let AfficheJour = document.querySelector(".compte");
 let afficheHours = document.querySelector(".hour");

 function Rebour() {
	 let date1 = new Date();
	 let date2 = new Date ("Aug 18, 2022 00:00:00");
	 let sec = (date2 - date1) / 1000;
	 let n = 24 * 3600;

	 if (sec > 0) {
		j = Math.floor (sec / n);
		h = Math.floor ((sec - (j * n)) / 3600);
		mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
		sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));

		AfficheJour.innerHTML = j +" jours "
		afficheHours.innerHTML = h +" : "+ mn +" : "+ sec;

		window.status = "Temps restant : " + j +" j "+ h +" : "+ mn +" : "+ sec;
 	}
 	tRebour = setTimeout ("Rebour();", 1000);
 }
 Rebour();
