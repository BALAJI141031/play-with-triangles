const sides = document.querySelectorAll(".sides")

const btnEl = document.querySelector("#hyp-btn")
const outputEl = document.querySelector("#output")


function getHypo() {
    console.log(side2)

    if (side2 == undefined || side1 == undefined) {
        console.log(side2)
        outputEl.innerText = "provide valid details"

    } else {
        var side1 = Number(sides[0].value)
        var side2 = Number(sides[1].value)



        var squaresSum = (side1 ** side1) + (side2 ** side2)



        var hypo = Math.sqrt(squaresSum)

        outputEl.innerText = "The longestSide/hypotenuse is : " + hypo


    }




}



btnEl.addEventListener("click", getHypo)