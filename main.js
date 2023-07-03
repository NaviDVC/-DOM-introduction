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

// 4. У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const imagesArray = new Array('images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg')

function randomPicture() {
    const randomNum = Math.floor(Math.random() * imagesArray.length)
    document.getElementById('anyPicture').src = imagesArray[randomNum];
}
window.onload = randomPicture();