let most_viewed_anime_json_new = new XMLHttpRequest();

most_viewed_anime_json_new.open("get", "/scripts/JSON/most-viewed-anime.JSON", true);
most_viewed_anime_json_new.send();

most_viewed_anime_json_new.onload = function(){
    if(this.status == 200 && this.readyState == 4){
        let most_viewed_anime_data = JSON.parse(this.responseText);
        // console.log(most_viewed_anime_data);
        updateMostViewedAnime(most_viewed_anime_data);
    }
}

function updateMostViewedAnime(x){
    let output_new = "";
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
        output_new += temp;
        anime_count ++;
    } 
    document.getElementsByClassName("anime-in-container-most-viewed")[0].innerHTML = output_new;
}