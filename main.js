let $picture = document.querySelector(".puzzle")
let arrAn = [0, 90, 180, 270];
let e1, e2, e3, e4;
let arr = [e1, e2, e3, e4];
let a = 90;

let source = ["Aquarius/row-1-col-1.jpg", "Aquarius/row-1-col-2.jpg", "Aquarius/row-2-col-1.jpg", "Aquarius/row-2-col-2.jpg"];
for (let i = 0; i < arr.length; i++) {
    arr[i] = document.createElement("img")
    $picture.appendChild(arr[i])
    arr[i].setAttribute('src', source[i])
    arr[i].setAttribute('id', [i])
    arr[i].addEventListener('click', rotate)
}


function rotate() {

    (a > 360) ? a = 0 : a += 90
    this.style.transform = "rotate(" + a + "deg)";
    if (win()) {
        setTimeout(function(){
            Swal.fire('you win')
        }, 1500)
    }

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

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    // if (seconds <= 0) clearInterval(countdown);
    if (!win() && seconds <= 0){
        clearInterval(countdown)
        Swal.fire('you lose')
    }
}, 1000);

