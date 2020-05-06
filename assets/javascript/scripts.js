
//   (ALL RIGHTS RESERVED) 

// CREATED AND DESIGNED BY -:

//      TANVI CHAUDHARY (+91 9717164641)
//      tanvicy1234@gmail.com 

window.addEventListener("load", initPlayer);
window.addEventListener("keypress", search);
window.addEventListener("keyup", search);
window.addEventListener("keydown", search);
window.addEventListener("change", search);

var audio;
var togglePlay = false;
var togglePlayButton;
var slider;
var releases;

function initPlayer(){
    audio = document.getElementById("audio");
    var ul = document.getElementById("songs");
    var ul1 = document.getElementById("songs1");
    var ul3 = document.getElementById("songs3");
    slider = document.getElementById("slider");
    slider.addEventListener("click", seekSong);
    togglePlayButton = document.getElementById("playPause");
    togglePlayButton.addEventListener("click", toggleSong);
    document.getElementById("stopSong").addEventListener("click", stopSong);
    document.getElementById("nextSong").addEventListener("click", nextSong);
    document.getElementById("previousSong").addEventListener("click", previousSong);
    // document.getElementById("savePlaylist").addEventListener("click", savePlayList);
    document.getElementById("searchSong").addEventListener("keyup", searchSong);


    //for center playlist
    for(var i = 0; i < songsArray.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = songsArray[i].songName;
        span.setAttribute('title', songsArray[i].songId);
        img.setAttribute('src', songsArray[i].songImage);
        img.className = "cover";
        // btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-success playListBtn d-block";
        playIcon.className = 'playIcon';
        // playIcon.innerHTML = '<i class="fas fa-play"></i>';
        // li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        // span.addEventListener("click", setSongName);
        playIcon.addEventListener("click", setSongName);
        ul.appendChild(li);
        btn.addEventListener("click", addToPlaylist);
    }
    ul=releases;

//for weekly playlist

    for(var i = 0; i < songsArray1.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = songsArray1[i].songName;
        span.setAttribute('title', songsArray1[i].songId);
        img.setAttribute('src', songsArray1[i].songImage);
        img.className = "cover";
        // btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-success playListBtn d-block";
        playIcon.className = 'playIcon';
        // playIcon.innerHTML = '<i class="fas fa-play"></i>';
        // li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        // span.addEventListener("click", setSongName);
        playIcon.addEventListener("click",setSongName1);
        ul1.appendChild(li);
        btn.addEventListener("click", addToPlaylist);
    }
//for featured playlist
    
    for(var i = 0; i < songsArray2.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = songsArray2[i].songName;
        span.setAttribute('title', songsArray2[i].songId);
        img.setAttribute('src', songsArray2[i].songImage);
        img.className = "cover";
        // btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-success playListBtn d-block";
        playIcon.className = 'playIcon';
        // playIcon.innerHTML = '<i class="fas fa-play"></i>';
        // li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        // span.addEventListener("click", setSongName);
        playIcon.addEventListener("click",setSongName2);
        ul3.appendChild(li);
        btn.addEventListener("click", addToPlaylist);
    }



    loadPlayList();

}

// SAVE PLAYLIST AFTER RELOAD 

function savePlayList(){
    if(window.localStorage) {
        var json = JSON.stringify(obj.playList);
        console.log(json);
        localStorage.setItem('myPlayList', json);
        localStorage.playList=json;
        // console.log('localstorage',localStorage);
    }
    else{
        alert("Localstorage not supported...");
    }
}

function loadPlayList() {
    if(localStorage.myPlaylist) {
        var data = localStorage.playList;
        obj.playList = JSON.parse(data);
    }
    showPlayList();
}

// function searchSong() {
//     var toSearch = event.srcElement.value;
//     if(toSearch == "") {
//         loadPlayList();
//     }
//     obj.searchSong(toSearch);
//     showPlayList();
// }

function setSongName(){
    // console.log(event.srcElement.parentElement.childNodes[0].innerText);
    songName = event.srcElement.parentElement.childNodes[1].innerText;
    playSong(songName);
}


function setSongName1(){
    // console.log(event.srcElement.parentElement.childNodes[0].innerText);
    songName = event.srcElement.parentElement.childNodes[1].innerText;
    playSong1(songName);
}

function setSongName2(){
    // console.log(event.srcElement.parentElement.childNodes[0].innerText);
    songName = event.srcElement.parentElement.childNodes[1].innerText;
    playSong2(songName);
}


function playSong(songName){
    console.log("Song change");
    var songURL;
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songName == songName){
            songURL = songsArray[i].songUrl;
            audio.title = songsArray[i].songId;
        }
    }
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    audio.src = songURL;
    audio.play();
    // var sliderWidth = slider.offsetWidth;
    setInterval(function(){
        slider.value = audio.currentTime;
    },500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },200);
  
}

function playSong1(songName){
    console.log("Song change");
    var songURL;
    for(var i = 0; i < songsArray1.length; i++){
        if(songsArray1[i].songName == songName){
            songURL = songsArray1[i].songUrl;
            audio.title = songsArray1[i].songId;
        }
    }
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    audio.src = songURL;
    audio.play();
    // var sliderWidth = slider.offsetWidth;
    setInterval(function(){
        slider.value = audio.currentTime;
    },500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },200);
  
}


function playSong2(songName){
    console.log("Song change");
    var songURL;
    for(var i = 0; i < songsArray2.length; i++){
        if(songsArray2[i].songName == songName){
            songURL = songsArray2[i].songUrl;
            audio.title = songsArray2[i].songId;
        }
    }
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
    audio.src = songURL;
    audio.play();
    // var sliderWidth = slider.offsetWidth;
    setInterval(function(){
        slider.value = audio.currentTime;
    },500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },200);
  
}




function seekSong(){
    audio.currentTime = slider.value;
}

function nextSong(){
    var songId = audio.title;
    var n_song = parseInt(songId)+1;
    var songName;
    console.log(n_song);
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songId == n_song) {
            songName = songsArray[i].songName;
            console.log(n_song, songName);
        }
    }
    playSong(songName);
}

function previousSong(){
    var songId = audio.title;
    var n_song = parseInt(songId)-1;
    var songName;
    console.log(n_song);
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songId == n_song) {
            songName = songsArray[i].songName;
            console.log(n_song, songName);
        }
    }
    playSong(songName);
}

function toggleSong(){
    if(togglePlay) {
        audio.play();
        togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>';
        togglePlay = false;
    }
    else {
        audio.pause();
        togglePlayButton.innerHTML = '<i class="fas fa-play"></i>';
        togglePlay = true;
    }
}

function stopSong(){
    audio.currentTime = 0;
    audio.pause();
}

function addToPlaylist(){
    var ul = document.getElementById("playList");
    var elem = event.srcElement.parentElement.innerHTML;
    var li = document.createElement("li");
    li.innerHTML = elem;
    li.className = "list-group-item";
    li.childNodes[1].addEventListener("click", setSongName);
    li.childNodes[3].addEventListener("click", setSongName);
    li.childNodes[2].innerHTML = '<i class="fas fa-trash"></i>';
    li.childNodes[2].className = "btn btn-primary deleteSong";
    ul.appendChild(li);
}

function addToPlaylist(){
    var songId = event.srcElement.parentElement.childNodes[1].title;
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].songId == songId) {
            obj.addSong(songsArray[i].songId,
                        songsArray[i].songName,
                        songsArray[i].songUrl,
                        songsArray[i].songImage);
        }
    }
    showPlayList();
}

function deleteSong(){
    var songId = parseInt(event.srcElement.parentElement.childNodes[1].title);
    console.log(songId);
    obj.deleteSong(songId);
    showPlayList();
}

function showPlayList(){
    var ul = document.getElementById("playList");
    ul.innerHTML = "";
    // console.log("playlist function");
    obj.playList.forEach(function(s){
        // console.log("Creating playlist");
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = s.name;
        span.setAttribute('title', s.id);
        img.setAttribute('src', s.songimage);
        img.className = "cover";
        btn.innerHTML = '<i class="fas fa-trash"></i>';
        btn.className = "btn btn-primary deleteBtn";
        playIcon.className = 'playIcon';
        li.className = "list-group-item";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        span.addEventListener("click", setSongName);
        playIcon.addEventListener("click", setSongName);
        ul.appendChild(li);
        btn.addEventListener("click", deleteSong);
    })   
}



//for search


function search(){
    console.log('length of your search', document.getElementById('searchSong').value.length);
    if(document.getElementById('searchSong').value.length!==0){
    console.log('search called..');
    console.log('event value', document.getElementById('searchSong').value);
    let songs = [...songsArray.map(song=>(song)),...songsArray1.map(song=>(song)),...songsArray2.map(song=>(song))];
    console.log('songs', songs);
    let searchedSongs=[];
    songs.forEach(song=>{
        if(song.songName.includes( document.getElementById('searchSong').value)){
            searchedSongs.push( song);
        }
    });
    console.log('filtered songs', searchedSongs);
    document.querySelector('#songsleft').style.display='none'; 
    document.querySelector('#right').style.display='none'; 
    var new_ul=document.createElement("ul");
    document.getElementById('songs').remove();
    new_ul.setAttribute("id","songs");
    document.getElementById('centerelement').appendChild(new_ul);
    for(var i = 0; i < searchedSongs.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var playIcon = document.createElement("button");
        var btn = document.createElement("button");
        span.innerHTML = searchedSongs[i].songName;
        span.setAttribute('title', searchedSongs[i].songId);
        img.setAttribute('src', searchedSongs[i].songImage);
        img.className = "cover";
        // btn.innerHTML = '<i class="fas fa-plus"></i>';
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-success playListBtn d-block";
        playIcon.className = 'playIcon';
        // playIcon.innerHTML = '<i class="fas fa-play"></i>';
        // li.className = 'list-group-item';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        li.appendChild(playIcon);
        // span.addEventListener("click", setSongName);
        playIcon.addEventListener("click", setSongName);
        new_ul
        .appendChild(li);
        btn.addEventListener("click", addToPlaylist);
    }
        console.log('ul finally', new_ul);
}
else{
    document.querySelector('#songsleft').style.display='block'; 
    document.querySelector('#right').style.display='block'; 
    console.log('init called again');
    initPlayer();
}

}