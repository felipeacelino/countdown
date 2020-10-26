(function () {
  "use strict";

  class Countdown {
    constructor(futureDate) {
      this.ele = document.querySelector(".countdown");
      this.futureDate = futureDate;
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
      setTimeout(() => {
        this.ele.classList.add("active");
      }, 1000);
    }
    counter() {
      const currentDate = new Date();
      this.diff = this.futureDate.getTime() - currentDate.getTime();
      const days = this.getDays();
      const hours = this.getHours();
      const minutes = this.getMinutes();
      const seconds = this.getSeconds();
      if (this.daysEle) {
        this.daysEle.innerText = days;
        const daysInf = document.querySelectorAll(".cd-days");
        if (days < 1) {
          daysInf.forEach((item) => (item.style.display = "none"));
        } else {
          daysInf.forEach((item) => (item.style.display = "block"));
        }
      }
      if (this.hoursEle) {
        this.hoursEle.innerText = hours;
      }
      if (this.minutesEle) {
        this.minutesEle.innerText = minutes;
      }
      if (this.secondsEle) {
        this.secondsEle.innerText = seconds;
      }
      if (this.diff < 1000) {
        this.destroy();
      }
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
      return n > 9 ? n : "0" + n;
    }
    updateDate(date) {
      clearInterval(this.timer);
      this.futureDate = new Date(date + " GMT-0300");
      this.init();
    }
    destroy() {
      clearInterval(this.timer);
    }
  }

  const $texts = document.querySelector("h1");
  const $el = document.querySelector(".countdown");
  const date = new Date($el.dataset.date);
  const countdown = new Countdown(date);
  setTimeout(() => {
    $texts.classList.add("active");
  }, 700);
})();
