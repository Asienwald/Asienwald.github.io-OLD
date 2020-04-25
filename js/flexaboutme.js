$(document).ready(() => {

    function checkWidth(){
        console.log("resized!")
        if(window.innerWidth < 1280){
            $("#pic-of-me").addClass("order-first");
            $("#details-of-me").addClass("order-last");
        }else{
            $("#pic-of-me").removeClass("order-first");
            $("#details-of-me").removeClass("order-last");
        }
    
    }
    $(window).resize(checkWidth);

    checkWidth();
})