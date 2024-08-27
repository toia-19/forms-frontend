// Declaración de constantes
const url = "../assets/docs/students.json";
const overlay = document.querySelector('.overlay');
const input = document.getElementById('input');
const names = document.querySelector('.list');

// Arreglo de estudiantes
let studentsArrayObj = [];
let studentsNames = [];

// Función para obtener estudiantes
async function getStudents() {
    overlay.classList.add('active');

    try {
        const response = await fetch(url);
        studentsArrayObj = await response.json();
        
    } catch (error) {
        console.error(error);
    }
}

getStudents()
.then(() => {
    console.log(studentsArrayObj);
    
    // Recorremos arreglo y obtenemos los nombres que contiene
    for (let i = 0; i < studentsArrayObj.length; i++) {
        const e = studentsArrayObj[i];

        // Se "pushea" a la colección de "studentsNames"
        studentsNames.push(e.nombre);
    }
})
.then(() => {
    // Ordenamos el arreglo con los nombres
    let sortedNames = studentsNames.sort();

    setTimeout(() => {
        overlay.classList.remove('active');
        
        //names.outerHTML.println(sortedNames[e]);
        //names.innerHTML = `<li>${sortedNames.length}</li>`
        //names.innerHTML = sortedNames;

    },500)
})