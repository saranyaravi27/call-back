let countdown = 10;
var timer = document.getElementById('sec')
setTimeout(() => {
    timer.innerText =countdown
     countdown--;
    setTimeout(() => {
        timer.innerText = countdown
         countdown--;
        setTimeout(() => {
            timer.innerText = countdown
             countdown--;
            setTimeout(() => {
                timer.innerText = countdown 
                countdown--;
                setTimeout(() => {
                    timer.innerText = countdown
                    countdown--;
                    setTimeout(() => {
                        timer.innerText = countdown
                        countdown--;
                        setTimeout(() => {
                            timer.innerText = countdown
                            countdown--;
                            setTimeout(() => {
                                timer.innerText = countdown
                                countdown--;
                                setTimeout(() => {
                                    timer.innerText = countdown
                                    countdown--;
                                    setTimeout(() => {
                                        timer.innerText = countdown
                                        countdown--;
                                        document.getElementById('timer-content').style.display = 'none';
                                        document.getElementById('wishes-content').style.display = 'block';
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);