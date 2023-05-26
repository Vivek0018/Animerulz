const key_value_in_url = window.location.search;
const urlParams = new URLSearchParams(key_value_in_url);
let epi_number_from_url = urlParams.get("ep");
let epi_audio_from_url = urlParams.get("aud");
// console.log(epi_number_from_url,epi_audio_from_url);

let http_2 = new XMLHttpRequest();
http_2.open("get", "/scripts/JSON/Episodes-links.JSON", true);
http_2.send();

var present_anime = document.getElementById("active-page-tag").textContent;
// console.log(temp_1);

document.getElementById("episode-number-in-video").innerHTML = epi_number_from_url;


http_2.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let anime_links = JSON.parse(this.responseText);
        set_anime(anime_links);
        // set_audios(anime_links);
        // set_video_links(anime_links);
    } 
}

function set_anime(anime_links){
    if(present_anime.toLowerCase() == "naruto"){
        let present_anime_data = anime_links[0];
        // console.log(present_anime_data);
        var episodes_numbers = document.getElementById("episodes-numbers");
        // drive_video.onload = document.querySelector(".ndfHFb-c4YZDc-aTv5jf-NziyQe-Bz112c").click();
        if((epi_number_from_url >= 1 ) && (epi_number_from_url <= 50)){
            episodes_numbers.innerHTML = " 1-50";
        }   
        else if ((epi_number_from_url >= 51 ) && (epi_number_from_url <= 100)){
            episodes_numbers.innerHTML = " 51-100";
        }
        else if((epi_number_from_url >= 101 ) && (epi_number_from_url <= 110)){
            episodes_numbers.innerHTML = " 101-110";
        }
        var episodes_section = document.getElementById("episodes-in-section");
        var episodes_range = document.getElementById("episodes-numbers");
        var episodes_range = (episodes_range.textContent).split('-');
        var episode_cont ;
        var output_1 = "";
        // console.log(episodes_range[0]);
        for(let i = Number(episodes_range[0]);i <= Number(episodes_range[1]); i++){
            if(i == epi_number_from_url){
                episode_cont = "<div class='episode active'>" + i + "</div>";
            }else{ 
                var temp = 'open_episode_watching(' + i + ',"' + epi_audio_from_url +'")' ;
                episode_cont = "<div class='episode' onclick='" + temp + "'>" + i +"</div>" ;
            }
            output_1 += episode_cont;
        }
        episodes_section.innerHTML = output_1;

        var video = document.getElementById("video-player");
        var present_anime_data_link = present_anime_data["links"][epi_number_from_url-1];
        try{
            var source = present_anime_data_link[epi_audio_from_url]; 
            var download = document.getElementsByClassName("button-download-now")[0];
            var tempo1 = "https://drive.google.com/uc?id=" + source + "&export=download"
            var tempo = source ;
            // var tempo = "https://www.googleapis.com/drive/v3/files/1rYTWhPcvX6HqtySwPxTLcaJgve2-PTRt?alt=media&key=AIzaSyCIY6fomcJxOt0XQ_naa1rzfd5wlOMGKDY"
            // var tempo1 = tempo;       
            // console.log(source);
            if(source != undefined)
                download.setAttribute("onclick", "window.open('" + tempo1 + "')");
                video.setAttribute("src", tempo);
        }
        catch(e){}

        //for setting audio buttons
        // console.log(present_anime_data["links"][epi_number_from_url-1]['eng']);

        var audios_div = document.getElementsByClassName("audios")[0];
        var output_txt = "";
        // var temp2;
        // for(let i = 0 ; i < present_anime_data_link.length ; i ++){
        try{
            if(present_anime_data_link['tel'] != ""  && present_anime_data_link['tel'] != undefined)
                output_txt += "<div class='audio' name='tel'>Telugu</div>";
            if(present_anime_data_link['hin'] != ""  && present_anime_data_link['hin'] != undefined)
                output_txt += "<div class='audio' name='hin'>Hindi</div>";
            if(present_anime_data_link['tam'] != ""  && present_anime_data_link['tam'] != undefined)
                output_txt += "<div class='audio' name='tam'>Tamil</div>";
            if(present_anime_data_link['mal'] != ""  && present_anime_data_link['mal'] != undefined)
                output_txt += "<div class='audio' name='mal'>Malayalam</div>";
            if(present_anime_data_link['ben'] != ""  && present_anime_data_link['ben'] != undefined)
                output_txt += "<div class='audio' name='ben'>Bengali</div>";
            if(present_anime_data_link['eng'] != ""  && present_anime_data_link['eng'] != undefined)
                output_txt += "<div class='audio' name='eng'>English</div>";
            if(present_anime_data_link['jap'] != ""  && present_anime_data_link['jap'] != undefined)
                output_txt += "<div class='audio' name='jap'>Japanese</div>";
            audios_div.innerHTML = output_txt;
            // console.log(present_anime_data_link["mal"] == undefined);
        }
        catch(e){}
        // }

        var dif_audios = document.getElementsByClassName("audio");
        for (let i = 0 ; i < dif_audios.length ; i ++){
            if(dif_audios[i].getAttribute("name") == epi_audio_from_url)
                dif_audios[i].setAttribute("class", "audio active-aud");
            else 
                dif_audios[i].setAttribute("class", "audio inactive-aud");
        }
        var audios = document.getElementsByClassName("inactive-aud");
        var audio_name;
        for(let i = 0 ; i < audios.length ; i ++){
            audio_name = audios[i].getAttribute("name");
            // console.log(audio);
            audios[i].setAttribute("onclick", "window.open('http://127.0.0.1:5500/Naruto/Watch-Now/?ep="+ epi_number_from_url + "&aud=" + audio_name + "', '_self')");
        }
        
        var total_epi = present_anime_data["Total_epi"];
        var prev = document.getElementsByClassName("button-1")[0];
        var nxt = document.getElementsByClassName("button-2")[0];
        let temp2 = Number(epi_number_from_url) - 1;
        let temp3 = Number(epi_number_from_url) + 1;
        if (temp2 > 0 ){
            var temp1 = "http://127.0.0.1:5500/Naruto/Watch-Now/?ep=" + temp2 + "&aud=" + epi_audio_from_url;
            prev.setAttribute("onclick", "window.open('" + temp1 + "','_self')");
        }
        if(temp3 <= total_epi){
            var temp1 = "http://127.0.0.1:5500/Naruto/Watch-Now/?ep=" + temp3 + "&aud=" + epi_audio_from_url;
            nxt.setAttribute("onclick", "window.open('" + temp1 + "','_self')");
        }

        //at final check whether the audio is available or not
        // console.log(video.getAttribute("src"));
        if(video.getAttribute("src") == "https://drive.google.com/file/d//preview"){
            window.open("http://127.0.0.1:5500/Naruto/Watch-Now/?ep="+ epi_number_from_url +"&aud=" + audios[0].getAttribute("name"),"_self");
        }
        //for setting active and inactive seasons
        var seasons = document.getElementsByClassName("season-anime");
        var season_active ;
        if( 1 <= epi_number_from_url && epi_number_from_url <= 26){
            seasons[0].setAttribute("id", "active-season");
            seasons[0].removeAttribute("onclick");
        }
        else if( 27 <= epi_number_from_url && epi_number_from_url <= 52){
            seasons[1].setAttribute("id", "active-season");
            seasons[1].removeAttribute("onclick");
        }
        else if( 53 <= epi_number_from_url && epi_number_from_url <= 80){
            seasons[2].setAttribute("id", "active-season");
            seasons[2].removeAttribute("onclick");
        }
        else if( 81 <= epi_number_from_url && epi_number_from_url <= 106){
            seasons[3].setAttribute("id", "active-season");
            seasons[3].removeAttribute("onclick");
        }
        else if( 107 <= epi_number_from_url && epi_number_from_url <= 110){
            seasons[4].setAttribute("id", "active-season");
            seasons[4].removeAttribute("onclick");
        }
    }
}
function open_episode_watching(epi_num_watching, epi_audio_from_url){
    console.log("In");
    var present_anime = document.getElementById("a-active-page-tag").textContent;
    var url_to_open = "http://127.0.0.1:5500/"+ present_anime + "/Watch-Now/?ep=" + epi_num_watching + "&aud=" + epi_audio_from_url;
    window.open(url_to_open, "_self");
}


// function set_audio(s){

// }

// function set_audios(anime_links){
    
// }


set_episodes(epi_number_from_url);
// console.log(epi_number_from_url);
// set_video("tel");

// change_audio_tracks();
//for download page
// }

function set_episodes(){

}
function get_episodes(a){
    var episodes_numbers = document.getElementById("episodes-numbers");
    var episodes_numbers_cont = episodes_numbers.textContent;
    // console.log(episodes_numbers_cont == " 51-100");
    if(a == 1 && episodes_numbers_cont != " 1-50"){
        episodes_numbers.innerHTML = " 1-50";
        window.open("http://127.0.0.1:5500/Naruto/Watch-Now/?ep=1&aud=" + epi_audio_from_url, "_self");
    }
    else if(a == 2 && episodes_numbers_cont != " 51-100"){
        episodes_numbers.innerHTML = " 51-100";
        window.open("http://127.0.0.1:5500/Naruto/Watch-Now/?ep=51&aud=" + epi_audio_from_url, "_self");
    }
    else if(a == 3 && episodes_numbers_cont != " 101-110"){
        episodes_numbers.innerHTML = " 101-110";
        window.open("http://127.0.0.1:5500/Naruto/Watch-Now/?ep=101&aud=" + epi_audio_from_url, "_self");
    }
}

// function set_video(aud){
//     // console.log(epi_number_from_url);
//     let http_2 = new XMLHttpRequest();
//     http_2.open("get", "/scripts/JSON/Episodes-links.JSON", true);
//     http_2.send();

//     http_2.onload = function(){
//         var temp_1 = document.getElementById("active-page-tag").textContent;
//         var video_drive = document.getElementById("video-player");
//         if(this.readyState == 4 && this.status == 200){
//             let anime_links = JSON.parse(this.responseText);
//             console.log(anime_links);
//             var present_anime_down;
//             // var total_epi;
//             if (temp_1.toLowerCase() == "naruto"){
//                 present_anime_down = anime_links[0];
//                 // total_epi = present_anime_down["Total_epi"];
//             }
//             // console.log(epi_number_from_url);
//             // console.log(present_anime_down["links"][epi_number_from_url-1])
//             video_drive.setAttribute("src", present_anime_down["links"][epi_number_from_url-1][aud]);
//         }
//     }
// }

function change_audio(audio_track){
    // var audio_ele = document.getElementsByClassName("audio");
    // var audio_track = this.getAttribute("name");
    // console.log(audio_track);
    // var present_audio = document.getElementsByClassName("active-aud")[0];
    // for(let i = 0; i < audio_ele.length ; i ++){
    //     if(present_audio.getAttribute("name") != audio_ele[i].getAttribute("name"))
    //         audio_ele[i].setAttribute("onclick", "set_video('')");
    // }
    console.log(present_anime_down["links"][epi_number_from_url-1])
    // video_drive.setAttribute("src", present_anime_down["links"][epi_number_from_url-1][audio_track]);
}

// document.getElementById("video-player").addEventListener("keyup", (e) =>{
//     if(e.keyCode == 70)
//         console.log("Key");
// })


//for estimated next episode in anime division
// const date = new Date();
// console.log(JSON.strgify(date));
function nextDay(x){
    var now = new Date();  
    var hours = 10;
    var minutes = 30;
    var seconds = 00;
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
    now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
    return now;
}
const time_epi = nextDay(0);
var ele_nxt_ep_time = document.getElementById("nxt-episode-txt");
ele_nxt_ep_time.innerHTML = "Estimated next episode on " + time_epi;

