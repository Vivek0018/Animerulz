const slider = document.getElementsByClassName("slider")[0];
var slider_json_file = new XMLHttpRequest();
slider_json_file.open("get", "https://vivek0018.github.io/tester/Animerulz/scripts/JSON/slider-data.JSON", true);
slider_json_file.send();
let slide_count = 1;
let number_of_anime_in_slider = 5;

slider_json_file.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let slider_anime_data = JSON.parse(this.responseText);
    // console.log(slider_anime_data);
    set_sliders(slider_anime_data);
  }
}

function set_sliders(slider_anime_data){
  let output = "";
  let temp = "";
  let class_name;
  let slide_anime_name;
  let slide_image;
  let slide_anime_epi_num ;
  let slide_anime_des;
  let slide_onclick ;
  let slide_onclick_details;
  let slide_updated_on_time;
  let commonHeight = window.innerWidth / 2.25;
  if(commonHeight > 666){
    commonHeight = 666;
  }
  // console.log(gradientDiv1, gradientDiv2);
  for(let i = 0; i <number_of_anime_in_slider; i++){
    slide_anime_name = slider_anime_data[i]["anime_name"];
    slide_image = slider_anime_data[i]["slide_image"];
    slide_anime_epi_num = slider_anime_data[i]["number_of_epi"];
    slide_anime_des = slider_anime_data[i]["anime_des"];
    slide_onclick = "window.open('" + slider_anime_data[i]["slide_onclick"] + "', '_self')";
    slide_onclick_details = "window.open('" + slider_anime_data[i]["slide_onclick_details"] + "', '_self')";
    slide_updated_on_time = slider_anime_data[i]["updated_time"]
    if (slide_count == 1)
      class_name = "slide active-slide";
    else 
      class_name = "slide";
    temp = '<div class="'+ class_name +'" id="slide-'  + slide_count+ '"><img style="height:' + commonHeight + 'px;" src="' + slide_image + '" class="img-in-slide" alt="' + slide_anime_name + '"/>'+
    '<div class="slide-container"><span class="slide-spotlight-txt">#' + slide_count +' Spotlight</span><h1>' + slide_anime_name + '</h1><div class="slide-more-info"><ul><li class="slide-list-ele">T.V Series</li><li class="slide-list-ele">24min</li><li class="slide-list-ele">' + slide_anime_epi_num + ' Episodes</li></ul></div><div class="slide-anime-des"><span>' + slide_anime_des + '</span></div><div class="slide-btns"><button class="slide-btn watch-now-btn" onclick="' + slide_onclick +'">' + 
    '<svg xmlns="http://www.w3.org/2000/svg" class="play-svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1zM5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C97.5 23.8 76.2 2.5 50 2.5zM67.2 52.8L41.6 69.8c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1C69.2 48.6 69.2 51.4 67.2 52.8z"/></g></switch></svg>Watch Now</button>' + 
    '<button class="slide-btn details-btn" onclick="'+ slide_onclick_details +'">Details<svg class="svg-icon-on-slide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" id="left-arrow"><path d="m8.5 12.8 5.7 5.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-4.9-5 4.9-5c.4-.4.4-1 0-1.4-.2-.2-.4-.3-.7-.3-.3 0-.5.1-.7.3l-5.7 5.6c-.4.5-.4 1.1 0 1.6 0-.1 0-.1 0 0z"></path></svg></button></div><div class="updated-time-on-slide"><svg xmlns="http://www.w3.org/2000/svg" class="svg-icon-clk-on-slider" fill="rgba(255,255,255,0.7)" viewBox="0 0 512 512"><path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg><span>Updated on ' + slide_updated_on_time + '</span></div></div></div>';
    slide_count ++;
    output += temp;
  }
  slider.innerHTML = output;
  setGradientDivisionHeights(commonHeight);
}

function setGradientDivisionHeights(commonHeight){
  let gradientDiv1 = document.getElementsByClassName("gradient-division-1")[0];
  let gradientDiv2 = document.getElementsByClassName("gradient-division-2")[0];
  gradientDiv1.style.height = commonHeight + 5 + "px"; 
  gradientDiv2.style.height = commonHeight + 5 + "px"; 
  if(window.innerWidth < 1100)
      document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight + "px" ;
  else
      document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight - 80 + "px" ;
  if(window.innerWidth <= 1500){
    if(window.innerWidth >= 1100)
      document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + "px";
    else 
    document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + 100 + "px";
  }
}


const slide = document.getElementsByClassName("slide");
var activeSlide = document.querySelector(".gradient-division-2");


const slideDot = document.getElementsByClassName("slide-dot");

let count = 0;


let slideCount = setInterval(changeSlide, 300000);

function changeSlide(){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    count = (count + 1 ) % 5;
    slide[count].setAttribute("class", "slide active-slide");
    slideDot[count].setAttribute("class", "slide-dot active-slide-dot");
    
}
function changeSlideByDot(x){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    slide[x-1].setAttribute("class", "slide active-slide");
    slideDot[x-1].setAttribute("class", "slide-dot active-slide-dot");
    
    count = (x-1) % 5;
}
function changeSlideByBtn(y){
    if(y == 1 ){
        previousSlide();
    }else{ 
        nextSlide();
}
}


function previousSlide(){
    slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        if(count != 0){
            slide[count-1].setAttribute("class", "slide active-slide");
            slideDot[count-1].setAttribute("class", "slide-dot active-slide-dot");
    
            count = (count - 1) % 5;
        }else{
            slide[4].setAttribute("class", "slide active-slide");
            slideDot[4].setAttribute("class", "slide-dot active-slide-dot");
    
            count = 4;
        } 
}
function nextSlide(){
  slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        slide[(count+1) % 5].setAttribute("class", "slide active-slide");
        slideDot[(count+1) % 5].setAttribute("class", "slide-dot active-slide-dot");

        count = (count + 1) % 5;
}


    var touchStartX = 0;
    var touchEndX = 0;

    // Set up touch event handlers
    activeSlide.addEventListener('touchstart', handleTouchStart);
    activeSlide.addEventListener('touchend', handleTouchEnd);

    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
      touchEndX = event.changedTouches[0].clientX;
      handleSwipe();
    }

    function handleSwipe() {
      if (touchStartX - touchEndX > 50){
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        previousSlide();
      }
    }

