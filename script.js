(function () {
  'use strict';

  class Countdown {
    constructor(futureDate) {
      this.futureDate = new Date(futureDate + ' GMT-0300');
      this.daysEle = document.querySelector('[data-cd="days"]');
      this.hoursEle = document.querySelector('[data-cd="hours"]');
      this.minutesEle = document.querySelector('[data-cd="minutes"]');
      this.secondsEle = document.querySelector('[data-cd="seconds"]');
      this.init();
    }
    init() {
      this.timer = setInterval(() => {
        this.counter();
      }, 1000);
    }
    counter() {
      const currentDate = new Date();
      this.diff = this.futureDate.getTime() - currentDate.getTime();
      this.daysEle.innerText = this.getDays();
      this.hoursEle.innerText = this.getHours();
      this.minutesEle.innerText = this.getMinutes();
      this.secondsEle.innerText = this.getSeconds();
    }
    getDays() {
      const days = Math.floor(this.diff / 1000 / 60 / 60 / 24);
      return days >= 0 ? days : 0;
    }
    getHours() {
      return this.zeroFill(Math.floor(this.diff / 1000 / 60 / 60) % 24);
    }
    getMinutes() {
      return this.zeroFill(Math.floor(this.diff / 1000 / 60) % 60);
    }
    getSeconds() {
      return this.zeroFill(Math.floor(this.diff / 1000) % 60);
    }
    zeroFill(num) {
      let n = num < 0 ? 0 : num;
      return n > 9 ? n : '0' + n;
    }
    updateDate(date) {
      clearInterval(this.timer);
      this.futureDate = new Date(date + ' GMT-0300');
      this.init();
    }
  }

  const data = "2020-01-14";
  const countdown = new Countdown(data);
})();
