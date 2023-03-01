const listaSpesa = ["pane", 
                    "pasta", 
                    "uova", 
                    "frutta", 
                    "verdura", 
                    "piselli", 
                    "spinaci"
]

const listaDom = document.querySelector('.lista');
let i = 0;

while (i < listaSpesa.length) {
    listaDom.innerHTML += `<li>${listaSpesa[i]}<li/>`;
    i++;
}