const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function bgcolor(e){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener ("click", bgcolor);

// btn.onclick = () => {
//     const randomcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = randomcolor;
// }

// btn.removeEventListener("click", changeBackground, () =>{ //click, focus, dblclick
//     const randomcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = randomcolor;
// })

// btn.addEventListener("mouseover",() =>{ //click, focus, dblclick
//     const randomcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = randomcolor;
// } )

/*to remove the event listner from abort */
// const controller = new AbortController()

// btn.addEventListener("click", () => {
//     const randomcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = randomcolor;
// },
// {
//     signal : controller.signal
// }
// )

// controller.abort();