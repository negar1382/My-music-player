let musics = [
    {name : 'Delvapasi', khanade : 'Ali Zand Vakili',peactur :'picture/photo_2024-11-08_17-00-44.jpg', link : 'musics/Ali Zand Vakili - Delvapasi (320).mp3'},
    {name : 'Ghamgin Tarin', khanade : 'Ali Zand Vakili',peactur :'picture/Ali-Zand-Vakili-Ghamgintarin-Ahang.jpg', link : 'musics/Ali Zand Vakili - Ghamgin Tarin (320).mp3'},
    {name : 'Raghse Sayeha', khanade : 'Ali Zand Vakili',peactur :'/musicPlayer_pish/picture/photo_2025-01-08_19-58-52_Musics.webp', link : 'musics/Ali Zand Vakili - Raghse Sayeha (320).mp3'},
    {name : 'Shabe Masti', khanade : 'Ali Zand Vakili',peactur :'picture/photo_2025-01-08_19-58-52_Musics.webp', link : 'musics/Ali Zand Vakili - Shabe Masti (320).mp3'}
]


let musicElem = document.querySelector('audio')
let image = document.querySelector('img')
let nameMusic = document.querySelector('.name')
let khanade = document.querySelector('.khanade')
let rafte = document.querySelector('.rafte')
let koll = document.querySelector('.koll')
let background = document.querySelector('.background')
let play = document.querySelector('.play')
let range = document.querySelector('input')

console.log(musicElem.duration)
musicElem.src = musics[1].link
image.src = musics[1].peactur
nameMusic.innerHTML = musics[1].name
khanade.innerHTML = musics[1].khanade
background.style.background = 'url(' + musics[1].peactur + ') center/cover no-repeat'
// document.body.style.filter = 'blur(15px)'
// document.body.style.position = 'absolute'
// koll.innerHTML = musicElem.duration

musicElem.addEventListener('loadedmetadata',setTime)
    
function setTime() {
    koll.innerHTML = formatTime(musicElem.duration);
    range.max = musicElem.duration
    // console.log(range.max)
}
  
//   تبدیل زمان به قالب خوانا (دقیقه:ثانیه)
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

function playHandler() {
    console.log('play');

    if (musicElem.paused) {
        musicElem.play();

        // تغییر آیکون به توقف
        play.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
            </svg>`
        ;
    } else {
        musicElem.pause();

        // تغییر آیکون به پخش
        play.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>`
        ;
    }
}

function previousHandler() {
    console.log('previous');

    // پیدا کردن اندیس آهنگ فعلی
    let currentIndex = musics.findIndex(function (music) {
        return music.link === musicElem.src;
    });

    // بررسی اگر آهنگ فعلی اولین آهنگ باشد
    if (currentIndex - 1 < 0) {
        currentIndex = musics.length - 1; // به آخرین آهنگ برگرد
    } else {
        currentIndex--; // به آهنگ قبلی برو
    }

    // تنظیم آهنگ، تصویر و اطلاعات
    musicElem.src = musics[currentIndex].link;
    image.src = musics[currentIndex].peactur;
    nameMusic.innerHTML = musics[currentIndex].name;
    khanade.innerHTML = musics[currentIndex].khanade;
    background.style.background = 'url(' + musics[currentIndex].peactur + ') center/cover no-repeat';
    play.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
            </svg>`;

    // پخش موسیقی جدید
    musicElem.play();
}


function nextHandler() {
    console.log('next');

    // پیدا کردن اندیس آهنگ فعلی
    let currentIndex = musics.findIndex(function (music) {
        return music.link === musicElem.src;
    });

    // بررسی اگر آهنگ فعلی آخرین آهنگ باشد
    if (currentIndex + 1 >= musics.length) {
        currentIndex = 0; // به اولین آهنگ برگرد
    } else {
        currentIndex++; // به آهنگ بعدی برو
    }

    // تنظیم آهنگ، تصویر و اطلاعات
    musicElem.src = musics[currentIndex].link;
    image.src = musics[currentIndex].peactur;
    nameMusic.innerHTML = musics[currentIndex].name;
    khanade.innerHTML = musics[currentIndex].khanade;
    background.style.background = 'url(' + musics[currentIndex].peactur + ') center/cover no-repeat';
    play.innerHTML = 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
            </svg>`;

    // پخش موسیقی جدید
    musicElem.play();
}



musicElem.addEventListener('timeupdate',function(){
    
    setTime()
    // console.log(musicElem.currentTime)
    range.value = musicElem.currentTime
    // console.log(range.value)
    rafte.innerHTML = formatTime(musicElem.currentTime)
})

range.addEventListener('change', function(){
    // console.log(range.value)
    musicElem.currentTime = range.value
})
