
// let h1 = document.createElement('H1');
// // console.log(h1);
// // console.dir(h1);
// // h1.innerText = "F12";
// let texto = document.createTextNode('F12');
// // console.dir(h1);
// h1.appendChild(texto);
// // console.log(h1);
// document.body.appendChild(h1);
// console.log(h1);

let fragment = new DocumentFragment();
let h1 = document.createElement('H1');
let texto = document.createTextNode(`JavaScript`);
h1.appendChild(texto);
fragment.appendChild(h1);
document.body.appendChild(fragment);
let atributosImg={
    src: "./download.png",
    alt: "Icono de JavaScript"
}
let img = document.createElement('IMG');
Object.assign(img, atributosImg);
document.body.appendChild(img);
let br = document.createElement('BR');
document.body.appendChild(br);
let h2 = document.createElement('H2');
let textoH2 = document.createTextNode('Imagen desde la web');
h2.appendChild(textoH2);
document.body.appendChild(h2);
atributosImg = {
    src: "https://conceptodefinicion.de/wp-content/uploads/2017/10/Javascript.jpg",
    alt: "Icono de JavaScript"
}
let img2 = document.createElement('IMG');
Object.assign(img2, atributosImg);
document.body.appendChild(img2);
console.log(img);
// document.body.innerHTML= "<h2>Hola Mundo</h2>";

// var imgAtributos = {
//         src : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rocket_League_logo.svg/1920px-Rocket_League_logo.svg.png",
//         alt : "Imagen de un astronauta con una medusa"
// };
// var imgSeleccionar = document.getElementsByTagName('img');
// console.log(imgSeleccionar.miID);
//     Object.assign(imgSeleccionar.miID, imgAtributos);

var imagen = document.querySelector(`[id='miID]`);
console.log(imagen.alt);