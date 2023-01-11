function Stopwatch(){
    let startTIme, endTime, running, duration = 0;

    

    this.reset = function(){
        if(duration == 0){
            throw new Error('Already Reset');
        }

        duration = 0;
        startTIme=null;
        endTime=null;
        running=null;

    }

    this.start = function(){
        if(running){
            throw new Error('Timer Already Started');
        }

        running = true;
        
        startTIme = new Date();
    }
    
    this.stop = function(){
        if(!running){
            throw new Error('Timer Already Stopped');
        }

        running = false;
        
        endTime = new Date();

        duration += endTime.getSeconds() - startTIme.getSeconds() ;

    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            if(running){
                throw new Error('Stop Timer')
            }

            return duration+' seconds';
        },
        set: function(){
            throw new Error('Not Allowed');
        }
    });



}


let stopwatch = new Stopwatch();


let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');
let resetButton = document.querySelector('#reset');
let timer = document.querySelector('#timer');


startButton.addEventListener('click', stopwatch.start);
stopButton.addEventListener('click', stopwatch.stop);
resetButton.addEventListener('click', stopwatch.reset);
