// 1. Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає

function showDiv() {
    document.getElementById("info").style.display = "block";
}

function hideDiv() {
    document.getElementById("info").style.display = "none";
}

// 2. На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

function promptLink() {
    window.link = prompt("Enter link:");
    return link;
}

function checkHTTP(link) {
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
    link = "http://" + link;
}
    return link;
}

function redirectToLink() {
    let site = link;
    site = checkHTTP(link);
    window.location.href = link;
}

// 3. Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let elem = document.querySelector('#elem');
let number = 1;
function createTable() {
    const table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = number++;
            row.appendChild(cell);

            
        }

        table.appendChild(row);
    } 

    elem.appendChild(table);
}