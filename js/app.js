const sound = document.querySelector('audio')
const buttons = Array.from(document.querySelectorAll('button'));

function playSound() {
    document.querySelector('#instruct').style.display = 'block';
    document.querySelector('#error').style.display = 'none';
    document.getElementById('audio').play();
}

window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'KeyQ':
            sound.src = 'audio/key01.mp3'
            playSound()
            break
        case 'KeyW':
            sound.src = 'audio/key02.mp3'
            playSound()
            break
        case 'KeyE':
            sound.src = 'audio/key03.mp3'
            playSound()
            break
        case 'KeyR':
            sound.src = 'audio/key04.mp3'
            playSound()
            break
        case 'KeyT':
            sound.src = 'audio/key05.mp3'
            playSound()
            break
        case 'KeyY':
            sound.src = 'audio/key06.mp3'
            playSound()
            break
        case 'KeyU':
            sound.src = 'audio/key07.mp3'
            playSound()
            break
        case 'KeyI':
            sound.src = 'audio/key08.mp3'
            playSound()
            break
        case 'KeyO':
            sound.src = 'audio/key09.mp3'
            playSound()
            break
        case 'KeyP':
            sound.src = 'audio/key10.mp3'
            playSound()
            break
        default: 
            document.querySelector('#instruct').style.display = 'none';
            document.querySelector('#error').style.display = 'block';
        }        
    }
)




buttons.map( button => {
    button.addEventListener('click', function(x) {
        switch(x.target.dataset.letter) {
        case 'q':
            sound.src = 'audio/key01.mp3'
            playSound()
            break
        case 'w':
            sound.src = 'audio/key02.mp3'
            playSound()
            break
        case 'e':
            sound.src = 'audio/key03.mp3'
            playSound()
            break
        case 'r':
            sound.src = 'audio/key04.mp3'
            playSound()
            break
        case 't':
            sound.src = 'audio/key05.mp3'
            playSound()
            break
        case 'y':
            sound.src = 'audio/key06.mp3'
            playSound()
            break
        case 'u':
            sound.src = 'audio/key07.mp3'
            playSound()
            break
        case 'i':
            sound.src = 'audio/key08.mp3'
            playSound()
            break
        case 'o':
            sound.src = 'audio/key09.mp3'
            playSound()
            break
        case 'p':
            sound.src = 'audio/key10.mp3'
            playSound()
            break    
        default: 
            console.log('Press a button on your screen or on your keyboard!')
        }         
    })
})