let trending_anime_json = new XMLHttpRequest();

trending_anime_json.open("get", "/scripts/JSON/trending_anime.JSON", true);
trending_anime_json.send();

trending_anime_json.onload = function(){
    if(this.status == 200 && this.readyState == 4){
        let trending_anime_data = JSON.parse(this.responseText);
        // console.log(trending_anime_data);
        updateTrendingAnime(trending_anime_data);
    }
}

function updateTrendingAnime(x){
    let output = "";
    let temp;
    let anime_count = 1;
    let anime_count_new;
    let anime_link ;
    for(anime of x){
        anime_link = "window.open('"  + anime.onclick + "', '_self')";
        // console.log(x);
        if(anime_count < 10)
            anime_count_new = '0' + anime_count;
        else
            anime_count_new = anime_count;
        temp = '<div class="anime-in-trending" onclick="' + anime_link + '", "_self")"><div class="container-in-trending"><div class="vertical-container"><span><strong>' + anime_count_new + '</strong></span><h3>' + anime.anime_name + '</h3></div><div class="image-container"><img src="' + anime.anime_img + '" alt="' + anime.anime_name + '"></div></div></div>';
        output += temp;
        anime_count ++;
    } 
    document.getElementsByClassName("animes-in-trending")[0].innerHTML = output;
}