let $picture = document.querySelector(".puzzle")
let arrAn = [0, 90, 180, 270];
let e1, e2, e3, e4;
let arr = [e1, e2, e3, e4];
let a = 90;
let levelG = 0;


let source = [
    { level: ["Aquarius/row-1-col-1.jpg", "Aquarius/row-1-col-2.jpg", "Aquarius/row-2-col-1.jpg", "Aquarius/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Libra/row-1-col-1.jpg", "Libra/row-1-col-2.jpg", "Libra/row-2-col-1.jpg", "Libra/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Leo/row-1-col-1.jpg", "Leo/row-1-col-2.jpg", "Leo/row-2-col-1.jpg", "Leo/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Gemini/row-1-col-1.jpg", "Gemini/row-1-col-2.jpg", "Gemini/row-2-col-1.jpg", "Gemini/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Taurus/row-1-col-1.jpg", "Taurus/row-1-col-2.jpg", "Taurus/row-2-col-1.jpg", "Taurus/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Cancer/row-1-col-1.jpg", "Cancer/row-1-col-2.jpg", "Cancer/row-2-col-1.jpg", "Cancer/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Capricornus/row-1-col-1.jpg", "Capricornus/row-1-col-2.jpg", "Capricornus/row-2-col-1.jpg", "Capricornus/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Sagittarius/row-1-col-1.jpg", "Sagittarius/row-1-col-2.jpg", "Sagittarius/row-2-col-1.jpg", "Sagittarius/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Pisces/row-1-col-1.jpg", "Pisces/row-1-col-2.jpg", "Pisces/row-2-col-1.jpg", "Pisces/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Scorpius/row-1-col-1.jpg", "Scorpius/row-1-col-2.jpg", "Scorpius/row-2-col-1.jpg", "Scorpius/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Virgo/row-1-col-1.jpg", "Virgo/row-1-col-2.jpg", "Virgo/row-2-col-1.jpg", "Virgo/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Aries/row-1-col-1.jpg", "Aries/row-1-col-2.jpg", "Aries/row-2-col-1.jpg", "Aries/row-2-col-2.jpg"], info: "this is aquarius!" },
    { level: ["Ophiuchus/row-1-col-1.jpg", "Ophiuchus/row-1-col-2.jpg", "Ophiuchus/row-2-col-1.jpg", "Ophiuchus/row-2-col-2.jpg"], info: "this is aquarius!" }
]

function dispaly() {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = document.createElement("img")
        $picture.appendChild(arr[i])
        arr[i].setAttribute('src', source[levelG].level[i])
        arr[i].setAttribute('id', [i])
        arr[i].addEventListener('click', rotate)

    }
    random();
    count();
}
dispaly();


function rotate() {

    (a > 360) ? a = 0 : a += 90
    this.style.transform = "rotate(" + a + "deg)";
    check();
    // if (win()) {
    //     setTimeout(function(){
    //         Swal.fire(`you win ${source1[0].level1_info}`)
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
random();


function win() {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].style.transform != "rotate(360deg)" && arr[i].style.transform != "rotate(0deg)") {
            return false;
        }

    }
    return true;
}


// reset . jquery 
/*
$('select existing html').on('click', 'target_element', function(){
    
})
*/

function count() {
    seconds = 10;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (!win() && seconds == 0) {
            
            Swal.fire('you lose')
            clear()
        }

    }, 1000);

    function clear() {
        seconds = 10
        clearInterval(countdown)
    }
}


// countdown = setInterval(function () {
//     seconds--; 
//     document.getElementById("countdown").textContent = seconds;
//     // if (seconds <= 0) clearInterval(countdown);
//     if (!win() && seconds <= 0) {
//         clearInterval(countdown)
//         Swal.fire('you lose')
//     } 
// }, 2000);



function check() {
    if (win()) {
        // addeventlistener 
        //add new line
        levelG++
        $picture.innerHTML = ""
        dispaly();




        // Swal.fire(`you win ${source1[0].level1_info}`)
        //         Swal.fire({
        //             title: 'Next Level?',
        //             type: 'question',
        //             customClass: {
        //                 icon: 'swal2-english-question-mark'
        //             },
        //             confirmButtonText: 'Yes',
        //             cancelButtonText: 'No',
        //             showCancelButton: true,
        //             showCloseButton: true



        // })  
    }
}
