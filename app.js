// Yeni tranzaksiya yarat
fetch('https://acb-api.algoritmika.org/api/transaction', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        from: 'Zaur',   
        to: 'Rehim',     
        amount: 500  
    })
})
.then(res => res.json())
.then(data => {
    console.log( data);

    const transactionId = data.id; 

    fetch(`https://acb-api.algoritmika.org/api/transaction/${transactionId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount: 9999  
        })
    })
    .then(res => res.json())
    .then(updatedData => {
        console.log('Məbləğ uğurla dəyişdirildi:', updatedData);

  
        const transactionText = `${updatedData.from}-from ${updatedData.to}-to ${updatedData.amount} rubl ödəniş köçürüldü`;
        const p = document.createElement('p');
        p.textContent = transactionText;
        document.body.appendChild(p);
    });
})

// Silmek
// Yeni tranzaksiya yarat
fetch('https://acb-api.algoritmika.org/api/transaction', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        from: 'Yusif',   
        to: 'Qurban',     
        amount: 900  
    })
})
.then(res => res.json())
.then(data => {
    console.log('Yeni tranzaksiya yaradıldı:', data);

    const transactionId = data.id;

    fetch(`https://acb-api.algoritmika.org/api/transaction/${transactionId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        console.log(`Tranzaksiya ${transactionId} silindi`);

        const p = document.createElement('p');
        p.textContent = `Tranzaksiya ${transactionId} uğurla silindi.`;
        document.body.appendChild(p);  
    })
})

// Saniye Olcen
let seconds = 0; 
let intervalId; 

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


startBtn.addEventListener('click', () => {
    
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++; 
            timerDisplay.textContent = seconds;
        }, 1000);
    }
});


stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; 
});


resetBtn.addEventListener('click', () => {
    clearInterval(intervalId); 
    intervalId = null; 
    seconds = 0; 
    timerDisplay.textContent = seconds; 
});


// Sekil

 const images = [
    'images/nn1.png', 
    'images/nn2.jpg', 
    'images/nn3.jpg', 
    
];


const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 4);

const imageContainer = document.getElementById('imageContainer');

shuffledImages.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('image');
    img.alt = `Random Image ${index + 1}`;

    img.addEventListener('click', () => {
        img.classList.toggle('large'); 
    });

    imageContainer.appendChild(img);
});


// Guardian
const apiKey = '2a53ed3d-359a-4448-bc86-b0ecb24dba72';
const url = `https://content.guardianapis.com/search?api-key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.response.results;
        const newsList = document.getElementById('news-list');

        articles.forEach(article => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${article.webUrl}" target="_blank">${article.webTitle}</a>`;
            newsList.appendChild(listItem);
        });
    })

