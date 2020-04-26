$(document).ready(function () {

    // $("html").scrollTop(0);
    let scroll = true;

    var activeSection = 0;
    var stopAt = 1;

    try{
        let page = document.location.href.match(/[^\/]+$/)[0], link = "HOME";
        if (page.includes("about-me.html")) stopAt = 2;
        else if (page.includes("experiences.html")) stopAt = 10;
    }catch(e){}
    
    // else if (page.includes("projects.html")) stopAt = 1;
    // else if (page.includes("achievements.html")) stopAt = 1;
    // else if (page.includes("contact-me.html")) stopAt = 1;

    if(window.innerHeight < 1280) stopAt = 0;

    var continueNormalScrolling = false;

    // var showSideNavBtn = (window.innerWidth < 1920) ? true : false;

    // if(!showSideNavBtn) $("#sidenav-btn").hide();
    // else $("#sidenav-btn").show();

    checkWindowSize();


    function scrollPage(){
        // console.log(activeSection);
        $("html").animate({
            scrollTop: ($(window).height() * activeSection)
        }, 1, () => {
            if(showSideNavBtn){
                $("#sidenav-btn").show();
                $("#sidenav-btn").css({opacity: "100%"});
            }else $("#sidenav-btn").css({opacity: "0%"});
        })
    }

    

    function checkWindowSize(){
        var showSideNavBtn = (window.innerWidth < 1920) ? true : false;

        if(!showSideNavBtn) $("#sidenav-btn").hide();
        else{
            $("#sidenav-btn").show();
            $("#sidenav-btn").css({opacity: "100%"});
        }

        if(window.innerWidth < 1280){
            continueNormalScrolling = true;
        }else continueNormalScrolling = false;

        // console.log(continueNormalScrolling);
    }
    

    $(window).scroll(() => {
        // console.log("Scrolling!" + $(window).scrollTop());
        if($(window).scrollTop() == 0 && window.innerHeight > 1280) $("#sidenav-btn").hide();
    })

    $(window).resize(checkWindowSize);

    
    window.addEventListener('wheel', function(event) {

        // this.console.log($("html").scrollTop());
        // this.console.log($(window).height() * activeSection);
        // this.console.log(activeSection);

        if(($("html").scrollTop() < ($(window).height() * activeSection) - 10) && window.innerHeight > 1280){
            // console.log("do the wheelie");
            continueNormalScrolling = false;
        }

        if(!continueNormalScrolling){
            event.preventDefault();
            event.stopPropagation();
        }else return;

        
        
        // console.log($("html").scrollTop());
        if(scroll === false) return;
        scroll = false;
        setTimeout(function() { scroll = true; }, 800);

        // console.log(event.deltaY);
        // console.log(activeSection)
        if(event.deltaY < 0){    // scroll up
            if(activeSection > 0){
                activeSection--;
                continueNormalScrolling = false;
            }
        }else if (event.deltaY > 0){ 
            
            if(activeSection != stopAt){
                activeSection++;

            }else{
                continueNormalScrolling = true;
            }
            showSideNavBtn = true;
        
        }
        if(activeSection == 0 && window.innerWidth > 1280){ showSideNavBtn = false;}
        scrollPage();
        

    }, {passive: false});

});

function toTop(){
    $(window).scrollTop(0);
    activeSection = 0;
    $("#sidenav-btn").css({opacity: "0%"});
}
