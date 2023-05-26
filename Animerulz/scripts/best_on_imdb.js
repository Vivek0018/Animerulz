let best_on_anime_json_new = new XMLHttpRequest();

best_on_anime_json_new.open("get", "/scripts/JSON/best_on_imdb.JSON", true);
best_on_anime_json_new.send();

best_on_anime_json_new.onload = function(){
    if(this.status == 200 && this.readyState == 4){
        let best_on_anime_data = JSON.parse(this.responseText);
        // console.log(best_on_anime_data);
        updateBestOnAnime(best_on_anime_data);
    }
}

function updateBestOnAnime(x){
    let output_new_1 = "";
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
        output_new_1 += temp;
        anime_count ++;
    } 
    document.getElementsByClassName("container-best-on-imdb")[0].innerHTML = output_new_1;
}