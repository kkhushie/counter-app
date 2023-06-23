const count = document.getElementById("count");
const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const res = document.getElementById("res")
const fly = document.getElementById("fly")
if (count.innerHTML == 0) {
    count.style.color = "white";
}
inc.addEventListener("click", () => {
    let curr = parseInt(count.innerHTML);
    count.innerHTML = curr + 1;
    if (count.innerHTML > 0) {
        count.style.color = "greenyellow"
    }
    else if (count.innerHTML == 0) {
        count.style.color = "white";
    }
    fly.innerHTML = "+1"

    gsap.from("#fly", {
        y: "100%",
        opacity: 1,

    })
    fly.style.opacity = 1;

    fly.style.color = "green";
})
dec.addEventListener("click", () => {

    let curr1 = parseInt(count.innerHTML);
    count.innerHTML = curr1 - 1;
    if (count.innerHTML < 0) {
        count.style.color = "rgb(253, 28, 50)"
    }
    else if (count.innerHTML == 0) {
        count.style.color = "white";
    }
    fly.innerHTML = "-1"
    gsap.from("#fly", {
        y: "90%",
        opacity: 1,

    })
    fly.style.opacity = 1;
    fly.style.color = "red"
})
res.addEventListener("click", () => {
    fly.innerHTML = ""
    count.innerHTML = 0;

})
