let icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "/my-portfolio/resources/assets/theme-icons/sun.png";
    }else{
        icon.src = "/my-portfolio/resources/assets/theme-icons/moon.png";
    }
 
});



export { icon } ;