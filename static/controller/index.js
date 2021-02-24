import Home from "./views/Home.js"
import About from "./views/About.js"
import Projects from "./views/Projects.js"
import Faq from "./views/Faq.js"
import Contact from "./views/Contact.js"
//
const navigateTo = url => {
    history.pushState(null, null , url);
    router();
}

//
const router = async () => {
    const routes = [
        { path: "/", view: new Home() },
        { path: "/about", view: new About() },
        { path: "/projects", view: new Projects() },
        { path: "/faq", view: new Faq() },
        { path: "/register", view: new Contact() }
    ];

    //Test each route for potencial matches 
    const potentialMatches = routes.map(route => {
        return {
            route:route,
            isMatch: location.pathname === route.path
        };
    });

   

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    };

    const view = match.route.view

    document.querySelector("#app").innerHTML = await view.getHtml();
};

//Allows to go back and forth 
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
});

//Small Screen Navbar
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav_active');
    })
}

navSlide();
