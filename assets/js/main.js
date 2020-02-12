$(document).ready(function() {

    meni(document.getElementById("meni"));
    meni(document.getElementById("lista"));

    $(".tekstToggle").hide();
    $(".readMore").click(function(){
        if($(this).prev().is(":visible")){
            $(this).prev().slideToggle();
            $(this).val("READ MORE");
        }
        else{
            $(this).prev().slideToggle();
            $(this).val("READ LESS");
        }
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
            $("#header").addClass("scrollHeader");
        }
        if ($(this).scrollTop() < 80) {
            $("#header").removeClass("scrollHeader");
        }
    })

    $("#slajder h1").animate({
        marginLeft: '150%'
    }, 800)

    $("#galerija a").simpleLightbox({
    });

    slideShow();

    $("#lista").hide();
    $(".fa-bars").click(function(){
        $('#lista').slideToggle();
    })
    $("#lista > ul > li").click(function(){
        $("#lista").slideToggle();
    })
    

    $("#mesta div:odd").addClass("parni");

    $("#meni > ul > li > a ").hover(function(){
        $(this).css("font-size","1.7vw");
    },
    function(){
        $(this).css("font-size","1.5vw");
    })
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 420){
            $("#about").animate({
                opacity: 1
            }, 1000)
        }
    })

})

window.onload = function(){
    document.getElementById("submit").addEventListener("click", proveri);
}  

//------------------- MENI ----------------------
function meni(x){
    var nizLinkovi = ["Home", "About", "Gallery", "Places", "Author"];
    var nizGde = ["#", "#about", "#naslovGalerija", "#places", "#ispod"];

    var elementUl, elementLi, elementA;
    elementUl = document.createElement("ul");

    for (var i = 0; i < nizLinkovi.length; i++) {
        elementLi = document.createElement("li");
        elementA = document.createElement("a");

        elementA.href = nizGde[i];
        elementA.innerHTML = nizLinkovi[i];

        elementLi.appendChild(elementA);
        elementUl.appendChild(elementLi);
    }

    x.appendChild(elementUl)
}


//-------------------- GALERIJA -------------------------
var galerijaNiz = ["slika1", "slika2", "slika3", "slika4"];
var aNiz = ["slika1Velika", "slika2Velika", "slika3Velika", "slika4Velika"];
var galerija = document.getElementById("galerija");

for(var i=0; i<galerijaNiz.length; i++){
    var galerijaA = document.createElement("a");
    var galerijaImg = document.createElement("img");
    galerijaA.href = `images/${aNiz[i]}.jpg`
    galerijaImg.src = `images/${galerijaNiz[i]}.jpg`;
    galerijaImg.alt = `Amsterdam ${i}`;
    galerijaA.appendChild(galerijaImg);
    galerija.appendChild(galerijaA);
}

//----------------- DROPDOWN --------------------------
var nizMesta = ["Van Gogh Museum", "The Rijksmuseum", "Anne Frank House", "Dam Square"];

var ispis = "<select id='padajucaLista'>";
ispis += "<option value='0'>Choose...</option>"
for(var i=0; i<nizMesta.length; i++){
    ispis += `<option value="${i}">${nizMesta[i]}</option>`;
}
ispis += "</select>";
document.getElementById("dropdown").innerHTML = ispis + "<p id='listaGreska'></p>";

//------------------- VALIDACIJA ----------------------
function proveri(){
    var ime, prezime, lista, utisci, email;
    var ispravno = true;
    ime = document.getElementById("ime").value;
    prezime = document.getElementById("prezime").value;
    lista = document.getElementById("padajucaLista");
    utisci = document.getElementById("utisci").value;
    email = document.getElementById("email").value;

    var imeGreska, prezimeGreksa, listaGreska, utisciGreska, emailGreska;
    imeGreska = document.getElementById("imeGreska");
    prezimeGreska = document.getElementById("prezimeGreska");
    listaGreska = document.getElementById("listaGreska");
    utisciGreska = document.getElementById("utisciGreska");
    emailGreska = document.getElementById("emailGreska");

    var reIme, rePrezime, reEmail;
    reIme = /^[A-Z][a-z]{1,13}$/;
    rePrezime = /^([A-Z][a-z]{1,30}\s?)+$/;
    reEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;

    if(ime == ""){
        imeGreska.innerHTML = "Please enter your name!";
        ispravno = false;
    }
    else if(!reIme.test(ime)){
        imeGreska.innerHTML = "Name is not entered correctly!"
        ispravno = false;
    }
    else {
        imeGreska.innerHTML = "";
    }

    if(prezime == ""){
        prezimeGreska.innerHTML = "Please enter your last name!";
        ispravno = false;
    }
    else if(!rePrezime.test(prezime)){
        prezimeGreska.innerHTML = "Last name is not entered correctly!"
        ispravno = false;
    }
    else {
        prezimeGreska.innerHTML = "";
    }

    if(email == ""){
        emailGreska.innerHTML = "Please enter your email!";
        ispravno = false;
    }
    else if(!reEmail.test(email)){
        emailGreska.innerHTML = "Email is not entered correctly!"
        ispravno = false;
    }
    else {
        emailGreska.innerHTML = "";
    }

    if(lista.selectedIndex == 0){
        listaGreska.innerHTML = "Please select a field!";
        ispravno = false;
    }
    else {
        listaGreska.innerHTML = "";
    }

    if(utisci == ""){
        utisciGreska.innerHTML = "Please enter your immpresion!";
        ispravno = false;
    }
    else {
        utisciGreska.innerHTML = "";
    }

    if(ispravno){
        alert("Data successfully sent!");
        document.querySelector("select").value = "0";
        var polja = document.querySelectorAll(".formaAutor")[0].querySelectorAll("input");
        for(var i=0; i<polja.length-1; i++){
            polja[i].value = "";
        }
    }
}

//---------- DODAVANJE KLASA ------------------
var about = document.getElementById("about").childNodes;
for(var i=0; i<about.length; i++){
        about[i].className = "about1";
}

var ispod = document.getElementById("ispod").childNodes;
for(var i=0; i<ispod.length; i++){
    ispod[i].className = "formaAutor";
}

//----------------------- TEKST ISPOD NASLOVA -----------------------
var nizTeksta = ['"Some tourists think Amsterdam is a city of sin, but in truth, </br> it is a city of freedom. And in freedom, most people find sin."', '"Amsterdam has more than 150 canals and 1,250 bridges, but it never seems </br> crowded, nor bent and bitter from fleecing the tourist."', '"I love Amsterdam. The city is vibrant and alive. It’s fresh and so open.</br> It’s definitely one of my favourite places.”', '"Amsterdam lives and breathes creativity. One moment you walk into a building </br> from the 17th century, and the next you find yourself in a hub of creative start-up companies."'];
for(var i=0; i<nizTeksta.length; i++){
    var elementP = document.createElement("p");
    elementP.innerHTML = nizTeksta[i];
    document.querySelector("#menja").appendChild(elementP);
}

var pTagovi = document.querySelector("#menja").childNodes;
pTagovi[1].className = "prikazi";


function slideShow(){
    var trenutni = $('#menja .prikazi');
    var sledeci = trenutni.next().length ? trenutni.next() : trenutni.parent().children(':first');

    trenutni.hide().removeClass('prikazi');
    sledeci.fadeIn().addClass('prikazi');

    setTimeout(slideShow, 4000);
}

//------------------------- IKONICE FUTER -----------------------------
var nizIkonice = ["fa-facebook", "fa-instagram", "fa-twitter", "fa-sitemap"];
var nizHref = ["https://www.facebook.com/beka.markovic99", "https://www.instagram.com/bekamarkoviic", "https://twitter.com/bekaa_markovic", "sitemap.xml"];
var futer = document.querySelectorAll(".futer1")[1];

var ispis1 = "<ul>"
for(var i=0; i<nizIkonice.length; i++){
    ispis1 += `<li><a href=${nizHref[i]} target="_blank"><i class="fa ${nizIkonice[i]}"></i></a></li>`;
}
ispis1 += "</ul>";
futer.innerHTML = ispis1;

//------------------------------------ MESTA -------------------------------------------
var nizSlika, nizNaslova, nizPodnaslova, nizVidljivogTeksta, nizSakrivenogTeksta, ispis2;
nizSlika = ["VanGogh", "muzej3", "annefrank", "dam"];

nizNaslova = ["Van Gogh museum", "Rijksmuseum", "Anne Frank House", "Dam square"];

nizPodnaslova = ["dedicated to the works of Vincent van Gogh", "a Dutch national museum", "dedicated to Jewish wartime diarist Anne Frank", "a town square in Amsterdam"];

nizVidljivogTeksta = ["The museum contains the largest collection of Van Gogh's paintings and drawings in the world. In 2017, the museum had 2.3 million visitors, and was the most visited museum in the Netherlands, and the 23rd most visited art museum in the world. In 2019, the Van Gogh Museum launched the Meet Vincent Van Gogh Experience, a technology-driven 'immersive exhibition' on Van Gogh's life and works, which has toured globally.", "The Rijksmuseum was founded in The Hague on 19 november 1798 and moved to Amsterdam in 1808, where it was first located in the Royal Palace and later in the Trippenhuis.", "During World War II, Anne Frank hid from Nazi persecution with her family and four other people in hidden rooms at the rear of the 17th-century canal house, known as the Secret Annex (Dutch: Achterhuis). She did not survive the war but her wartime diary was published in 1947.", "Dam Square or Dam is a town square in Amsterdam, the capital of the Netherlands. Its notable buildings and frequent events make it one of the most well-known and important locations in the city and the country."];

nizSakrivenogTeksta = ["The museum is situated at the Museumplein in Amsterdam-Zuid, on the Paulus Potterstraat 7, between the Stedelijk Museum and the Rijksmuseum, and consists of two buildings, the Rietveld building, designed by Gerrit Rietveld, and the Kurokawa wing, designed by Kisho Kurokawa. The museum also features notable artworks by Van Gogh's contemporaries in the Impressionist and post-Impressionist movements and holds extensive exhibitions on various subjects from 19th Century art history.", "In 2013 and 2014, it was the most visited museum in the Netherlands with record numbers of 2.2 million and 2.47 million visitors. It is also the largest art museum in the country. The museum has on display 8,000 objects of art and history, from their total collection of 1 million objects from the years 1200–2000, among which are some masterpieces by Rembrandt, Frans Hals, and Johannes Vermeer. The museum also has a small Asian collection, which is on display in the Asian pavilion.", "The museum opened on 3 May 1960. It preserves the hiding place, has a permanent exhibition on the life and times of Anne Frank, and has an exhibition space about all forms of persecution and discrimination. In 2013 and 2014, the museum had 1.2 million visitors and was the 3rd most visited museum in the Netherlands, after the Rijksmuseum and Van Gogh Museum.", "Dam Square lies in the historical center of Amsterdam, approximately 750 metres (2,500 ft) south of the main transportation hub, Centraal Station, at the original location of the dam in the river Amstel. The Dam derives its name from its original function: a dam on the Amstel River, hence also the name of the city. Built in approximately 1270, the dam formed the first connection between the settlements on the sides of the river."];

for(var i=0; i<nizSlika.length; i++){
    ispis2 += `<div class = 'mesto1'>
                    <div class="slikaMesta"> 
                        <img src = "images/${nizSlika[i]}.jpg" alt = ${nizSlika[i]} />
                    </div>
                    <div class = "tekst">
                        <h3>${nizNaslova[i]}</h3>
                        <p class = "tekstIspod">${nizPodnaslova[i]}</p>
                        <p>${nizVidljivogTeksta[i]}</p>
                        <p class = "tekstToggle">${nizSakrivenogTeksta[i]}</p>
                        <input type="button" name="readMore" class="readMore" value="READ MORE" />
                    </div>
                </div>`;
}

document.getElementById("mesta").innerHTML = ispis2;
