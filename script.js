//write a program to print the multiplication table of an integer number.

const checkBtn = document.getElementById("check");

const multiplicationTable = () => {
    let table = document.getElementById("result");
    table.innerHTML = ""; // To replace the old innerHTML if there's any b4 looping, so that it won't append the current innerHTML from loop and keep the previous one. 
    const input = document.getElementById("input");
    for (let i = 1; i <= 12; i++) {
        table.innerHTML += `<div>${input.value} x ${i} = ${input.value * i}</div>`;
    }
}

checkBtn.addEventListener("click", multiplicationTable);

// const viewBtn = document.getElementById("view");

// const multiplicationTs = () => {
//     const multTable = document.getElementById("output");
//     multTable.style.display = "flex";
//     multTable.style.justifyContent = "space-evenly";
//     multTable.innerHTML = ""; // To replace the old innerHTML if there's any b4 looping, so that it won't append the current innerHTML from loop and keep the previous one. 
//     const int = document.getElementById("int");

//     for (let i = 1; i <= int.value; i++) {
//         let newTable = multTable.appendChild(document.createElement("div"));
//         newTable.innerHTML += `
//         <span>${i}</span>
//         `;
//         for (let j = 1; j <= 12; j++) {
//             newTable.innerHTML += `<div>${i} x ${j} = ${i * j}</div>`
//         }

//     }    

// }

// viewBtn.addEventListener("click", multiplicationTs);

const viewBtn = document.getElementById("view");

const generateTable = () => {
    const number = document.getElementById("int").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    outputDiv.style.display = "flex";
    outputDiv.style.justifyContent = "space-evenly";

    const tables = Array.from({ length: number }, (_, i) => i + 1);
    tables.forEach(table => {
        let newTable = outputDiv.appendChild(document.createElement("div"));
        newTable.innerHTML += "<h3>Table of " + table + "</h3>";
        Array.from({ length: 12 }, (_, j) => j + 1)
            .forEach(j => {
                newTable.innerHTML += table + " x " + j + " = " + (table * j) + "<br>";
            });
    });
}

viewBtn.addEventListener("click",generateTable);