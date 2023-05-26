let http_1 = new XMLHttpRequest();

http_1.open("get", "/scripts/JSON/updated-time.json", true);
http_1.send();

http_1.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let anime = JSON.parse(this.responseText);
        // console.log(anime);
        let present_anime = document.getElementById("active-page-tag");
        let present_anime_season = document.getElementById("active-page-tag-season");
        // console.log(present_anime_season.textContent)
        let present_anime_time = document.getElementById("updated-on-time");
        let anime_for_time;
        let anime_time;
        if((present_anime.textContent).toLowerCase() == "naruto")
            anime_for_time = anime[0];
        else if ((present_anime.textContent).toLowerCase() == "chainsaw man")
            anime_for_time = anime[1];
        if (present_anime_season == null)
            anime_time = anime_for_time.time[0].default;
            // console.log(anime_for_time.Naruto[0].default);
        else {
            if (present_anime_season.textContent == "Season-1")
                anime_time = anime_for_time.time[0].s1;
            else if (present_anime_season.textContent == "Season-2")
                anime_time = anime_for_time.time[0].s2;
            else if (present_anime_season.textContent == "Season-3")
                anime_time = anime_for_time.time[0].s3;
            else if (present_anime_season.textContent == "Season-4")
                anime_time = anime_for_time.time[0].s4;
            else if (present_anime_season.textContent == "Season-5")
                anime_time = anime_for_time.time[0].s5;
        }
        // console.log(anime_time);
        present_anime_time.innerHTML = anime_time ;
    }
};