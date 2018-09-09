window.addEventListener('scroll',function(){
    // console.log(window.scrollY);
    var scrolledHeight= window.pageYOffset;

    allElements = document.querySelectorAll('.parallax');

    // console.log(allElements);

    for(i =0; i< allElements.length ; i++){
        // console.log(allElements[i].offsetTop, allElements[i].offsetHeight);
        var limit= allElements[i].offsetTop+ allElements[i].offsetHeight;
        if(scrolledHeight > allElements[i].offsetTop && scrolledHeight <= limit){
            allElements[i].style.backgroundPositionY=  (scrolledHeight - allElements[i].offsetTop) /1.5+ "px";
        } else{
            allElements[i].style.backgroundPositionY = "0";
        }
    }
});