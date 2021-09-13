import refs from './refs.js';
const { days, hours, mins, secs, smallHeader } = refs;


class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate.getTime();
        this.intervalId = null;
        this.time = 0;
  
    }
    //Methods//
     startTimer() {
            this.intervalId = setInterval(() => {
                let currentDate = Date.now();
                
                this.time = this.targetDate - currentDate;
                //console.log(this.time)

                //вставляємо значення лічильника в інтерфейс
                this.insertData(days, this.getDays(this.time))
                this.insertData(hours, this.getHours(this.time))
                this.insertData(mins, this.getMins(this.time))
                this.insertData(secs, this.getSecs(this.time))
                this.insertData(smallHeader, this.selector)

            }, 1000)
    }
    
    //приведення в 2х значний вигляд
    padValue(value, num, symbol) {
        return String(value).padStart(num, symbol)
    }

    //розбиття мілісекунд на дні-години-хвилини-секунди
    getDays(time) {
        return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '0');
    }
    getHours(time) {
        return this.padValue(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2, '0');
    }
    getMins(time) {
        return this.padValue(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2, '0');
    }
    getSecs(time) {
        return this.padValue(Math.floor((time % (1000 * 60)) / 1000));
    }

    //відображення у розмітці
    insertData(place, value) {
        place.textContent = value;
    } 
}

const newTimer = new CountdownTimer('#timer-1', new Date('Dec 31, 2021'))
newTimer.startTimer()
