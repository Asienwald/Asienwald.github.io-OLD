$(document).ready(() => {
    console.log($("body").width());
    console.log(screen.innerWidth);
    console.log(window.innerWidth);
    $("html").innerWidth = window.innerWidth;

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
        
        try{
            let page = document.location.href.match(/[^\/]+$/)[0];
            if(page.includes("contact-me.html")) return;
        }catch(e){
            return;
        }
        

        if(window.innerWidth < 1920 && !prev_img.includes("vertical")){
            prev_img = prev_img.split(".jpg");
            img = prev_img[0]+"_vertical.jpg";
    
        }else{
            prev_img = prev_img.split("_vertical.jpg");
            img = prev_img[0]+".jpg";
        }

        console.log(img);

        $("header").css({"background-image": img});
    }

    checkWidth();

    $(window).resize(checkWidth);

    console.log(window.innerWidth);
})