const menuBtn = document.getElementById("hamburger");
const searchBtn = document.querySelector(".fa-search");

menuBtn.addEventListener("click", () => {
    const menu = document.querySelector(".nav-list");
    menu.classList.toggle("active");
    
});

searchBtn.addEventListener("click", () => {
    console.log("dziala");
    const search = document.querySelector(".search-holder");
    search.classList.toggle("active");  
});



const images = document.querySelectorAll(".downup");

const downupOptions = {
    threshold: ".7",
};

downup = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `downup1 1s ${entry.target.dataset.delay} forwards ease-out`;
            downup.unobserve(entry.target);
        } else {
            entry.target.style.animation= `none`;
        }
    });
}, downupOptions);

images.forEach(image => {
    downup.observe(image);
})

const lefters = document.querySelectorAll(".leftright");

const leftersOptions = {
    threshold: ".7",
};

leftright = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `leftright1 1s ${entry.target.dataset.delay} forwards ease-out`;
            leftright.unobserve(entry.target);
        } else {
            entry.target.style.animation= `none`;
        }
    });
}, leftersOptions);

lefters.forEach(image => {
    leftright.observe(image);
})