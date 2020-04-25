$(document).ready(() => {

    const target = $(".target");
    const links = $("nav .nav-links");


    // links.click((e) => e.preventDefault());
    links.on("mouseenter", mouseenterFunc);

    function mouseenterFunc() {
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left;
        const top = this.getBoundingClientRect().top;
        
        target.css({
            width: width + "px",
            left: left + "px",
            top: top + height + "px"
        })

        // console.log(target.position());
    }
    // $("nav .nav-links:contains('HOME')").css( "text-decoration", "underline" );
    let page = document.location.href.match(/[^\/]+$/)[0], link = "HOME";
    if(page.includes("index.html")) link = "HOME"
    else if (page.includes("about-me.html")) link = "ABOUT ME";
    else if(page.includes("experiences.html")) link = "EXPERIENCES";
    else if(page.includes("projects.html")) link = "PROJECTS";
    else if(page.includes("achievements.html")) link = "ACHIEVEMENTS";
    else if(page.includes("contact-me.html")) link = "CONTACT ME";

    $(`nav .nav-links:contains(${link})`).trigger("mouseenter");
    
})

