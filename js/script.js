{
    const welcome = () => {
        console.log("Cześć, przedstawione zadanie posiada elementy satyryczne")
    };
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny"
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");
        
        button.addEventListener("click", toggleBackground);
    }

    init ();
    welcome();
}
