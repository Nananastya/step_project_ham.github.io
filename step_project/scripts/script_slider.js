let slides = $(".show-slider");
let textSlides = $(".flex");
let left = $(".left");
let right = $(".right");
let imgs = $(".show-slider .green-circle");
let counter = 0;

for (let i = 1; i < textSlides.length; i++){
    $(textSlides[i]).css("display", "none");
}
$(imgs[0]).css("margin-bottom", "10px");

left.on("click", function() {
    for (let i = 0; i < textSlides.length; i++){
        $(textSlides[i]).css("display", "none");
        $(imgs[i]).css("margin-bottom", "0px");
    }
    if(counter < 1){
        $(textSlides[0]).fadeIn("slow");
        $(imgs[0]).css("margin-bottom", "10px");
    }
    else {
        counter--;
        $(textSlides[counter]).fadeIn("slow");
        $(imgs[counter]).css("margin-bottom", "10px");
    }
    
});
right.on("click", function() {
    for (let i = 0; i < textSlides.length; i++){
        $(textSlides[i]).css("display", "none");
        $(imgs[i]).css("margin-bottom", "0px");
    }
    if(counter > 2){
        $(textSlides[3]).fadeIn("slow");
        $(imgs[3]).css("margin-bottom", "10px");
    }
    else {
        counter++;
        $(textSlides[counter]).fadeIn("slow");
        $(imgs[counter]).css("margin-bottom", "10px");
    }
});

for(let i = 0; i < slides.length; i++){
    $(slides[i]).on("click", function() {
        for (let j = 0; j < textSlides.length; j++){
            $(textSlides[j]).css("display", "none");
            $(imgs[j]).css("margin-bottom", "0px");
        }
        $(textSlides[i]).fadeIn("slow");
        $(imgs[i]).css("margin-bottom", "10px");
        counter = i;
    })
}