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

        console.log(arr)
    
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
   
    // if (win()) {
    //     setTimeout(function(){
    //       
    //     }, 1500)
    // }

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



// seconds = 120;
function count(duration, level) {
    seconds = duration
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;

        console.log(win());
        
        if (!win() && seconds == 0 && level !=1) {
            
            Swal.fire('you lose')
            seconds = duration
            fail = true
            clear();
            $('.start').show()
            $('.start').text("start over")

           
        }else if(level || seconds < 0){
            (seconds < 0) ? document.getElementById("countdown").textContent = 0 : null
            console.log('got here')
            clear();
        }

    }, 1000);

    function clear() {
        // seconds = 20;
        clearInterval(countdown);
    }
}



$('.start').click(function(event){
    event.preventDefault()
    levelG = 0;
    seconds = 13
    fail = false
    $('.puzzle').html('')
    // console.log($('.puzzle'))
    dispaly()
    random()
    count(13,levelG);
  $('.start').hide()
})


function check() {
    if (win()) {
        
        setTimeout(function(){
            // ++levelG 
            levelG++
            $picture.innerHTML = ""
            dispaly();
            random()
            console.log(levelG)
            count(13, levelG) 
                }, 1000)


        if (win() && levelG==1){
            Swal.fire("you win")
            count(0,levelG)
        }





//         setTimeout(function(){ 
        
//             Swal.fire({
//             title: ("win" + source1[i].info),
//             type: 'question',
//             customClass: {
//                 icon: 'swal2-english-question-mark'
//             },
//             confirmButtonText: 'Yes',
//             cancelButtonText: 'No',
//             showCancelButton: true,
//             showCloseButton: true
            

// })   }, 1000);
       
      


    }
}


