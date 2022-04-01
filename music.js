/*<div class="longartholder">
      <div class="longart">
        <div class="art">
          <div class="opy">
            <h1 id="songname">Tum Hi Aana</h1>
            <h2 id="artist">Jubin Nautiyal</h2>
          </div>
        </div>
      </div>
    </div>


    <!-- seekbar -->
    <div class="seekbarholder">
      <input id="myProgressBar" class="seekbar" type="range" value="0">
    </div>

    <!-- controlls -->
    <div class="controlbox">
      <div class="controlholder">
        <div class="chd">
          <img id="prev" src="img/prev.png" alt="img/prev.png">
          <div id="playbtn" class="playcircle">
            <div id="play" class="play"> </div>
          </div>
          <img id="next" src="img/next.png" alt="ikg/next.png">
        </div>
      </div>
    </div>
    
    <audio src="songs/tha.mp3"></audio>*/
    
    window.onload = (lo)=>{
     console.log('"url(cover/)"');
const art = document.querySelector('.art');
const title = document.querySelector('#songname');
const artist = document.querySelector('#artist');
const type = document.querySelector('#type');

const next = document.querySelector('#next');
const play = document.querySelector('#play');

const prev = document.querySelector('#prev');
const music = document.querySelector('audio');
let progress = document.querySelector('#progress');
let currentime = document.querySelector('#current_time');
let total_duration = document.querySelector('#duration');
const progress_div = document.querySelector('#progress_div');
let myProgressBar = document.getElementById('myProgressBar');


let isPlaying = false;






// for replay functionality
  const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('play','pause');
  };

// for repause functionality
  const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('pause', 'play');
  }; 
 
 //condition & calling play or pause functions
 play.addEventListener('click', ()=>{
       isPlaying ? pauseMusic() : playMusic();

 })
 
 
 //for changing music data

 const songs = [
       {
         name:"mushup",
         title:"Love Mushup",
         artist:"Jubin Nautiyal",
                    type: "Mushup + Love",

       },
       {
                 // src:url("https://abdulmoqueet.github.io/music-player/songs/Lily.mp3"),

         name: "tha",
         title: "Tum hi aana",
         artist: "Jubin Nautiyal",
         type: "Slowed + reverbed",
       
       },
       {
         name: "tbj",
           title: "Tera Ban Jaunga",
           artist: "Tulsi Kumar",
           type: "Reverbed",
       },
       {
        name: "rl",
          title: "Rataan Lambiyan",
          artist: "Jubin Nautiyal", 
                     type: "Slowed + Reverbed",

       },
   
   
   ]
 
 
 const loadSongs = (songs)=>{
   title.textContent = songs.title;
   artist.textContent = songs.artist;
   type.textContent = songs.type;

   music.src = "songs/"+songs.name+".mp3";
  //   music.src = songs.src;

 art.style.backgroundImage="url(cover/"+songs.name+".jpg)"


 }
 
 songIndex = 0;
 //loadSongs(songs[1]);
 
 
 
 const nextSong = ()=>{
   songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
        music.play(); }
        
 const prevSong = ()=>{
   songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
        music.play(); }
   ////////////////!!!!!!!!!!!!!!!!!!!///////////////////
//progress functions
/*music.addEventListener('timeupdate', () => {
  console.log('progressing');
  progress = parseInt((music.currentTime / music.duration) * 100);
  myProgressBar.value = progress;

});*/
myProgressBar.addEventListener('change',()=>{
music.currentTime = myProgressBar.value * music.duration/100;
});
   ////////////////!!!!!!!!!!!!!!!!!!!///////////////////
  
 music.addEventListener('timeupdate', (event)=>{
   //seekbar update
   const {currentTime, duration} = event.srcElement;
   let progressTime = (currentTime / duration) * 100;
   let progress = parseInt(progressTime)
   //progress.style.width = `${progressTime}%`;
     myProgressBar.value = progress;

   
   //duration update
   let minDuration = Math.floor(duration / 60);
   let secDuration = Math.floor(duration % 60);
      if (secDuration < 10){
     secDuration = `0${secDuration}`
}
   let tot_duration = `${minDuration}:${secDuration}`
   if(duration){
   total_duration.textContent = `${tot_duration}`
   }
   
   
   //current time update
   let mincurrenttime = Math.floor(currentTime / 60);
   let seccurrenttime = Math.floor(currentTime % 60);
   if (seccurrenttime < 10){
     seccurrenttime = `0${seccurrenttime}`
   }
   let tot_currenttime = `${mincurrenttime}:${seccurrenttime}`
     currentime.textContent = `${tot_currenttime}`
 });
 
 
 
 
 progress_div.addEventListener('click', (event)=>{
   const { duration } = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    
     console.log(move_progress);
          console.log(duration);
    music.currentTime = move_progress


 });
 
 
 music.addEventListener('ended', nextSong);
 
 next.addEventListener('click', nextSong);
 prev.addEventListener('click', prevSong);

 
 
 
 
 
 
    }
 
 
 
 
 
 
 
 
 
 
 
 /*next.addEventListener('click', ()=>{
      console.log('clicked');
 art.style.backgroundImage="url(cover/tara.jpg)"
 });*/
