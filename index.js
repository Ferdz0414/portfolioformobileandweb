//Toggle Bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fas');
    navbar.classList.toggle('active');
}




//Scroll Section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () =>{

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset &&  top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }  
    })
    

 let header =  document.querySelector('header');

 header.classList.toggle('sticky', window.scrollY > 100);
 
//remove toggle after function the list of navbar links\
menuIcon.classList.remove('fas');
navbar.classList.remove('active');
} 

//dark mode and light mode
let lightmode = localStorage.getItem('lightmode')
const lightmodes = document.getElementById('lightmodes')


const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmodes = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (lightmode === 'active') enableLightmode()

lightmodes.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmodes()
})