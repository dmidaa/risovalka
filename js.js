const button = document.getElementById('button-yes');
const button_no = document.getElementById('button-no')
const text = document.getElementById('text')
const background_all = document.getElementById('background-all')
const heartRain = document.getElementById('heartRain');


function createHearts(){
        const TimerId = setTimeout(createHearts, 500)
        const heart = document.createElement('div');
        heart.className = 'heart';
                    
        const hearts = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '💖', '💗'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
        heart.style.textShadow = '0 0 10px currentColor';
        heartRain.appendChild(heart);
    
}

yes = 0
no_run = 0

document.querySelector('.button-yes').addEventListener('click', function() {
    if (yes == 0){text.innerHTML = 'ТОЧНО?';
        this.style.setProperty('--pulse-duration', '1s');
        background_all.style.backgroundColor = 'lavenderblush';
    }
    if (yes == 1){text.innerHTML = 'УВЕРЕНА?';
        this.style.setProperty('--pulse-duration', '0.5s')
        createHearts()
    }
    if (yes == 2){text.innerHTML = 'ДРУГОГО ШАНСА НЕ БУДЕТ';
        button_no.remove()
        button.style.width = '360px';
        button.innerHTML = 'Я СОГЛАСНА!!';
        this.style.setProperty('--pulse-duration', '0.3s')
    }
    if (yes == 3){
        const iframe = document.createElement('iframe');
        iframe.src = `https://dmidaa.github.io/risovalka/text1?v=${Date.now()}`;
        iframe.style.width = '100%';
        iframe.style.height = '100vh';
        iframe.style.border = 'none';
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.zIndex = '9999';
        
        // Очищаем страницу и вставляем iframe
        document.body.innerHTML = '';
        document.body.appendChild(iframe);
    }
    
    yes++
});

function run(){
            
    let newX = Math.random() * (700);
    let newY = Math.random() * (500);
            
    button_no.style.left = newX + 'px';
    button_no.style.top = newY + 'px';
}
function handleMouseOver(e){
    if (yes < 1){
        if (no_run < 15){
            no_run++
            run()
        }
    }
}

document.querySelector('.button-no').addEventListener('mouseover', handleMouseOver);

document.querySelector('.button-no').addEventListener('click', function (){
    if (yes <= 0){
        text.innerHTML = 'ОК. Я тебя понял'
        yes = -99
    } else if (yes < 3) {text.innerHTML = 'Поздно уже'}
})

// 👇 ЭТА ФУНКЦИЯ ПРЕВРАЩАЕТ CANVAS В ФАЙЛ И ОТПРАВЛЯЕТ
async function sendDrawingToServer(canvas) {
    // 1. Canvas → Blob (бинарные данные)
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    
    // 2. Blob → File (с именем)
    const file = new File([blob], 'drawing.png', { type: 'image/png' });
    
    // 3. FormData + отправка
    const formData = new FormData();
    formData.append('image', file);        // поле 'image' — сервер будет ждать его
    formData.append('userId', '123');      // можешь добавить свои данные

    try {
        const response = await fetch('https://твой-сервер.com/upload', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            console.log('✅ Рисунок улетел!');
        } else {
            console.error('❌ Ошибка отправки');
        }
    } catch (error) {
        console.error('❌ Сеть упала:', error);
    }
}



/* РИСОВАНИЕ СЕРДЦА!!!!!
РИСОВАНИЕ СЕРДЦА!!!!!
РИСОВАНИЕ СЕРДЦА!!!!!
РИСОВАНИЕ СЕРДЦА!!!!!
РИСОВАНИЕ СЕРДЦА!!!!!
*/ 


