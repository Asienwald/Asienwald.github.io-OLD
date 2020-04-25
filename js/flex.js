$(document).ready(() => {

    function checkWidth(){
        console.log("Change bg!");
        let prev_img = $("header").css("background-image"), img = "";
        if(window.innerWidth < 1920){
            $("#sidenav-btn span i").removeClass("fa-4x");
            $("#sidenav-btn span i").addClass("fa-2x");
        }else{
            $("#sidenav-btn span i").removeClass("fa-2x");
            $("#sidenav-btn span i").addClass("fa-4x");
        }
        
        let page = document.location.href.match(/[^\/]+$/)[0], link = "HOME";
        if(page.includes("contact-me.html")) return;

        if(window.innerWidth < 1920 && !prev_img.includes("vertical")){
            prev_img = prev_img.split(".");
            img = prev_img[0]+"_vertical."+prev_img[1];
    
        }else{
            prev_img = prev_img.split("_vertical");
            img = prev_img[0]+prev_img[1];
        }

        console.log(img);

        $("header").css({"background-image": img});
    }

    checkWidth();

    $(window).resize(checkWidth);

    console.log(window.innerWidth);
})