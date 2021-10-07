const monthly = [
    "19.99",
    "24.99",
    "39.99"
]
const annually = ["199.99","249.99","399.99"]
// &dollar;
// &dollar;
// &dollar;
let btn = document.querySelector('.switch');
let toggle_switch = document.querySelector('.toggle_switch');
let cards = document.querySelectorAll('.card');
btn.addEventListener('change',()=>{
    if (toggle_switch.checked) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].children[1].textContent = ('\44')+monthly[i]
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].children[1].textContent = ('\44')+annually[i]
        }
        
    }
})
