var home_anchor = document.getElementById("a-home-anchor-tag");
var anime_anchor = document.getElementById("a-active-page-tag");

home_anchor.setAttribute("href", "https://animerulz.xyz/");
if (anime_anchor != null){
  var anime_anchor_cont = anime_anchor.textContent;
  let anime_anchor_href;
  if(anime_anchor_cont.toLowerCase() == "naruto")
    anime_anchor.setAttribute("href", "http://127.0.0.1:5500/Naruto/"); 
}

var img_main = document.getElementsByClassName("nav-image")[0];
img_main.setAttribute("onclick", "open_home()");

function open_home(){
  window.open("http://animerulz.xyz/", "_self");
}

function open_episode_watching(epi_num_watching, epi_audio_from_url){
  console.log("In");
  var present_anime = document.getElementById("a-active-page-tag").textContent;
  var url_to_open = "http://127.0.0.1:5500/"+ present_anime + "/Watch-Now/?ep=" + epi_num_watching + "&aud=" + epi_audio_from_url;
  window.open(url_to_open, "_self");
}

// //for nav bar
// var nav = document.getElementById("nav-bar-id");
// var search_bar = document.getElementById("search-input");
// var navRect = nav.getBoundingClientRect();
// var search_icon = document.getElementById("search-icon");
// var windowVerticalScroll = window.scrollY;
// var search_field = document.getElementById("search-input");
// if((navRect.top-windowVerticalScroll) < "-250"){
//     nav.style.backgroundColor = "#232643";
// }
// else{
//     nav.style.backgroundColor = "#23264380";
// }
// if((navRect.top-windowVerticalScroll) < "-930"){
//     nav.style.marginTop = "-140px";
//     search_bar.style.display = "none";
//     // search_bar.style.transition = "display 0.5s";
// }
// else{
//     nav.style.marginTop = "0";
// }



var video_player = document.getElementById("video-player");
// console.log(video_player.offsetHeight, video_player.offsetWidth);
if(screen.width <= 940){
  var video_player_width = video_player.offsetWidth;
  video_player.style.height = 0.559 * video_player_width + "px";
  console.log(video_player.offsetHeight, video_player.offsetWidth);
}