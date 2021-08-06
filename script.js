/*Somme total & Coloration du coeur en rouge*/ 

/*let permet de déclarer une variable totale "#tot" */
let total = document.getElementById("tot")

let arr = document.getElementsByClassName("prix")
let s = 0
for (a of arr) {
    s += parseInt(a.innerText)
}
/*affichage de somme en TND */
total.innerText = s + " TND"

/*j'aime "coeur en rouge" */
let like = Array.from(document.querySelectorAll(".like"))
like.forEach((x) => {
    x.addEventListener("click", (event) => {
        if (event.target.style.color != "red") {
            event.target.style.color = "red"
        } else { event.target.style.color = "#AAB8C2" }
    })
})


/*supprimer un article */
let remove = Array.from(document.querySelectorAll(".remove"))

remove.forEach((x) => {

    x.addEventListener("click", (event) => {
        let div = event.target
            .parentElement
            .parentElement
            .parentElement
        div.parentElement.removeChild(div)
    })
})

/*Ajuster la quantité  */
let plus = Array.from(document.querySelectorAll(".plus"))
plus.forEach((x) => {
    x.addEventListener("click", (event) => {
        let parent = event.target.parentElement.parentElement
        let prix = +parent.querySelector(".prix").innerText
        let qt = +parent.querySelector(".qt").innerText

        let pt = +parent.querySelector(".price").innerText.replace("TND", "")

        let fp = +document.getElementById("tot").innerText.replace("TND", "")

        if (event.target.innerText == "+") {
            parent.querySelector(".qt").innerText++
                parent.querySelector(".price").innerText = prix + pt + "TND"
            document.getElementById("tot").innerText = fp + prix + "TND"
        } else {
            if (pt > 0) {
                parent.querySelector(".qt").innerText--
                    parent.querySelector(".price").innerText = pt - prix + "TND"
                document.getElementById("tot").innerText = fp - prix + "TND"
            }
        }
    })
})