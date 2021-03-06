 function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
     e.target.classList.remove('playing');
 }

 function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     if (!audio) return;
     key.classList.add('playing');
     audio.currentTime = 0;
     audio.play();
 }
 const keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown', playSound);

 /* 

        function playsong(e) {
            const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
            const key = document.querySelector('.key[data-key="${e.keyCode}"]');
            if (!audio) return; //Skip the function to run all together
            key.classList('playing');
            audio.currentTime = 0;
            audio.play();
        }

        function removeTransition(e) {
            if (e.propertyName !== 'transform') return; //Skip if its a transform.
            this.classList.remove('playing');
        }

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

        window.addEventListener('keydown', playsong); */

 /* 

 function playsong(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
     audio.currentTime = 0;
     audio.play();
     key.classList.add('playing');
 };

 function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
     this.classList.remove(`playing`);
 }
 const keys = document.querySelectorAll(`.key`);
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));

 window.addEventListener('keydown', playsong); */