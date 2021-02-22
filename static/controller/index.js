//
const navigateTo = url => {
    history.pushState(null, null , url);
    router();
}

//
const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Home page") },
        { path: "/about", view: () => console.log("About page") },
        { path: "/projects", view: () => console.log("Projects page") },
        { path: "/faq", view: () => console.log("Faq page") },
        { path: "/register", view: () => console.log("Register page") }
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

    console.log(match.route.view());
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
