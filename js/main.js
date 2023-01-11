function Stopwatch(){
    let running, intervalId, duration = 0;

    
    

    let updateTime = function(){
        
        duration++
        document.querySelector('#timer').textContent = duration;  
    }



    this.reset = function(){
        if(duration == 0){
            throw new Error('Already Reset');
        }else if(running){
            throw new Error('Stop Timer');
        }

        document.querySelector('#timer').textContent = duration = 0;
        running=null;
        intervalId=null;

        

    }

    this.start = function(){
        if(running){
            throw new Error('Timer Already Started');
        }

        running = true;
        
        intervalId = setInterval(updateTime, 1000);
    }
    
    this.stop = function(){
        if(!running){
            throw new Error('Timer Already Stopped');
        }

        running = false;
        
        
        clearInterval(intervalId);

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



startButton.addEventListener('click', stopwatch.start);
stopButton.addEventListener('click', stopwatch.stop);
resetButton.addEventListener('click', stopwatch.reset);
