let $picture = document.querySelector(".puzzle")
let arrAn = [0, 90, 180, 270];
let e1, e2, e3, e4;
let arr = [e1, e2, e3, e4];
let a = 90;
let levelG = 0;
let fail = false
let $phrase = document.querySelector(".word")
let source = [
    { level: ["Aquarius/row-1-col-1.jpg", "Aquarius/row-1-col-2.jpg", "Aquarius/row-2-col-1.jpg", "Aquarius/row-2-col-2.jpg"], info: "It’s Aquarius, the water bearer." },
    { level: ["Libra/row-1-col-1.jpg", "Libra/row-1-col-2.jpg", "Libra/row-2-col-1.jpg", "Libra/row-2-col-2.jpg"], info: "It’s Libra, the scales." },
    { level: ["Leo/row-1-col-1.jpg", "Leo/row-1-col-2.jpg", "Leo/row-2-col-1.jpg", "Leo/row-2-col-2.jpg"], info: "It’s Leo, the lion." },
    { level: ["Gemini/row-1-col-1.jpg", "Gemini/row-1-col-2.jpg", "Gemini/row-2-col-1.jpg", "Gemini/row-2-col-2.jpg"], info: "It’s Gemini, the twins." },
    { level: ["Taurus/row-1-col-1.jpg", "Taurus/row-1-col-2.jpg", "Taurus/row-2-col-1.jpg", "Taurus/row-2-col-2.jpg"], info: "It’s Taurus, the bull." },
    { level: ["Cancer/row-1-col-1.jpg", "Cancer/row-1-col-2.jpg", "Cancer/row-2-col-1.jpg", "Cancer/row-2-col-2.jpg"], info: "It’s Cancer, the crab." },
    { level: ["Capricornus/row-1-col-1.jpg", "Capricornus/row-1-col-2.jpg", "Capricornus/row-2-col-1.jpg", "Capricornus/row-2-col-2.jpg"], info: "It’s Capricornus, the goat." },
    { level: ["Sagittarius/row-1-col-1.jpg", "Sagittarius/row-1-col-2.jpg", "Sagittarius/row-2-col-1.jpg", "Sagittarius/row-2-col-2.jpg"], info: "It’s Sagittarius, the archer." },
    { level: ["Pisces/row-1-col-1.jpg", "Pisces/row-1-col-2.jpg", "Pisces/row-2-col-1.jpg", "Pisces/row-2-col-2.jpg"], info: "It’s Pisces, the fish." },
    { level: ["Scorpius/row-1-col-1.jpg", "Scorpius/row-1-col-2.jpg", "Scorpius/row-2-col-1.jpg", "Scorpius/row-2-col-2.jpg"], info: "It’s Scorpius, the scorpion." },
    { level: ["Virgo/row-1-col-1.jpg", "Virgo/row-1-col-2.jpg", "Virgo/row-2-col-1.jpg", "Virgo/row-2-col-2.jpg"], info: "It’s Virgo, the virgin." },
    { level: ["Aries/row-1-col-1.jpg", "Aries/row-1-col-2.jpg", "Aries/row-2-col-1.jpg", "Aries/row-2-col-2.jpg"], info: "It’s Aries, the ram." },
    { level: ["Ophiuchus/row-1-col-1.jpg", "Ophiuchus/row-1-col-2.jpg", "Ophiuchus/row-2-col-1.jpg", "Ophiuchus/row-2-col-2.jpg"], info: "It’s Ophiucus, the serpent bearer." }
]


Swal.fire({
    title: '<strong>Hey Brilliant!</strong>',
    type: 'info',
    text:
      'want to know what zodiac means? ' +
      'play till the end ^_^',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      'Great!'
  })
  

$('.start').click(function(event){
    event.preventDefault()
    levelG = 0;
    seconds = 13
    fail = false
    $('.puzzle').html('')
    dispaly()
    random()
    count(13,levelG);
  $('.start').hide()
})

var index=0;
function displayinfo(){
    
    var infoX = document.createElement("h1");
    infoX.innerText=source[index].info;
    if($phrase.firstChild){
        $phrase.removeChild($phrase.firstChild);
    }
    $phrase.appendChild(infoX);
    index++;
}

function dispaly() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = document.createElement("img")
        $picture.appendChild(arr[i])
        arr[i].setAttribute('src', source[levelG].level[i])
        arr[i].setAttribute('id', [i])
        arr[i].addEventListener('click', rotate)
    }
    random();
    displayinfo(); 
}

function rotate() {
    if(!fail){
        (a > 360) ? a = 0 : a += 90
        this.style.transform = "rotate(" + a + "deg)";
        check();
    }
}

function random() {
    for (let i = 0; i < arr.length; i++) {
        let r = Math.floor(Math.random() * 2 + 1)
        let angle = arrAn[r]
        arr[i].style.transform = "rotate(" + angle + "deg)";
    }
}

function win() {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].style.transform != "rotate(360deg)" && arr[i].style.transform != "rotate(0deg)") {
            return false;
        }
    }
    return true;
}

function count(duration, level) {
    seconds = duration
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;

        if (!win() && seconds == 0 && level !=12) {
            Swal.fire('you lose')
            seconds = duration
            fail = true
            index=0
            clear();
            $('.start').show()
            $('.start').text("start over") 
        }else if(level || seconds < 0){
            (seconds < 0) ? document.getElementById("countdown").textContent = 0 : null
            clear();  
        }
    }, 1000);
    function clear() {
        clearInterval(countdown);
    }
}

function check() {
    if (win()) {
        
        setTimeout(function(){
            levelG++
            $picture.innerHTML = ""
            dispaly();
            random()
            count(13, levelG) 
                }, 1000)

        if (win() && levelG==12){
            Swal.fire({
                type: 'success',
                title: 'The Zodiac:',
                text: 'An area of the sky that extends approximately 8° north or south of the apparent path of the Sun across the celestial sphere over the course of the year.',
                footer: '<a href="https://en.wikipedia.org/wiki/Zodiac">somewhere, something incredible is waiting to be known.</a>'
              })
            count(0,levelG)
        }
    }
}

