//for search box 


// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    let count = 0;
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            if (count <= 5){
                count += 1;
                return data = `<li>${data}</li>`;
            }
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
            allList[i].setAttribute("id", "button-on-select");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    if (selectData.toLocaleLowerCase()=="naruto"){
        window.open("http://127.0.0.1:5500/Naruto/", "_self");
    }
    else if (selectData.toLocaleLowerCase()=="naruto season-1"){
        window.open("http://127.0.0.1:5500/Naruto/Season-1/", "_self");
    }
    else if (selectData.toLocaleLowerCase()=="naruto season-2"){
        window.open("http://127.0.0.1:5500/Naruto/Season-2/", "_self");
    }
    else if (selectData.toLocaleLowerCase()=="naruto season-3"){
        window.open("http://127.0.0.1:5500/Naruto/Season-3/", "_self");
    }
    else if (selectData.toLocaleLowerCase()=="naruto season-4"){
        window.open("http://127.0.0.1:5500/Naruto/Season-4/", "_self");
    }
    else if (selectData.toLocaleLowerCase()=="naruto season-5"){
        window.open("http://127.0.0.1:5500/Naruto/Season-5/", "_self");
    }
    else if(selectData=="Dragon Ball Super"){
        window.open("https://animerulz.xyz");
    }
    else{
        
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
function show_search_box(){
    var search_field = document.getElementById("search-input");
    var search_field = document.getElementsByClassName("search-input")[0];
    if(search_field.style.display == "block"){
      search_field.style.display = "none";
    }
    else{
      search_field.style.display = "block";
    }
    // if((navRect.top-windowVerticalScroll) < "-930"){
    //     search_field.style.display = "none";
    // }
    // else{
    //     search_field.style.display = "block";
    // }
    // search_field.style.transition = "all 5s";
}
var loader = document.getElementById("preloader");
// var image_in_video = document.getElementsByClassName("image-in-video-player")[0];
// var recom_anime = document.getElementsByClassName("recommendations")[0];
// var nav = document.getElementsByClassName("nav-bar")[0];
// var add_this = document.getElementById("addthis");
window.addEventListener("load", function(){    
    if(loader != null)  
        loader.style.display = "none";  
    // if(add_this != null)
    //     add_this.style.display = "block";
    // console.log(document.getElementsByTagName("nav")[0]);
    // nav.style.display = "block";
    // console.log(document.getElementById("recommedations"));
    // if(recom_anime != null)
    //     recom_anime.style.display = "block";
    // if(image_in_video != null)
    //     image_in_video.style.display = "block";
});

//for navbar 
function nav_bar_cust(){
    window.onscroll = function(){
        const temp = document.getElementById("active-page-tag-season");
        // document.getElementsByTagName("html")[0].innerHTML = temp;
        var nav = document.getElementById("nav-bar-id");
        var search_bar = document.getElementById("search-input");
        var navRect = nav.getBoundingClientRect();
        var search_icon = document.getElementById("search-icon");
        var windowVerticalScroll = window.scrollY;
        var search_field = document.getElementById("search-input");
        if((navRect.top-windowVerticalScroll) < "-250"){
            nav.style.backgroundColor = "#000000";
        }
        else{
           nav.style.backgroundColor = "#0000033";
        }
        if((navRect.top-windowVerticalScroll) < "-930"){
           nav.style.marginTop = "-140px";
           search_bar.style.display = "none";
           // search_bar.style.transition = "display 0.5s";
        }
        else{
         nav.style.marginTop = "0";
        }
    };
}
//for checking whether it is download page or anime page
var temp = document.getElementsByClassName("anchor-for-back-page");

// if ((temp == null) ||(temp != null && temp.textContent.toLowerCase() != "watching online")){
// if(temp != null)    
nav_bar_cust();
    //for anime page
// }
// else{