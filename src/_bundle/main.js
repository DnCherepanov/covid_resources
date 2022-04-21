/* eslint-disable no-undef */
// CSS
import './main.pcss';

// JS
import 'alpinejs';

const animateCount = (obj, initVal, lastVal, duration) => {
  let startTime = null;
  const step = () => {
    const currentTime = Date.now();
    if (!startTime) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const objj = obj;
    objj.innerText = Math.floor(progress * (lastVal - initVal) + initVal);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  window.requestAnimationFrame(step);
};

window.calculator = () => ({
  state: false,
  showCapacity: false,
  showSupplies: false,
  showResults: false,
  footage: null,
  employees: null,
  visitors: null,
  sanitizers: 0,
  sanitizers8: 0,
  sanitizers12: 0,
  sanitizers33: 0,
  towels: 0,
  towels24: 0,
  towels48: 0,
  towels72: 0,
  masks: 0,
  soap: 0,
  soap7: 0,
  soap10: 0,
  soap12: 0,
  countPeople() {
    const lastVal = Math.round(this.footage / 113);
    return animateCount(this.$refs.people, 0, lastVal, 500);
  },
  countSupplies() {
    this.showResults = true;
    const sum = parseInt(this.employees, 10) + parseInt(this.visitors, 10);
    const countSanitizer = 8.8 * sum;
    this.sanitizers8 = Math.round(countSanitizer / 8);
    this.sanitizers12 = Math.round(countSanitizer / 12);
    this.sanitizers33 = Math.round(countSanitizer / 33.8);
    this.sanitizers = new Intl.NumberFormat().format(countSanitizer);
    const countTowels = 225 * sum;
    this.towels24 = Math.round(countTowels / 7200);
    this.towels48 = Math.round(countTowels / 21648);
    this.towels72 = Math.round(countTowels / 30672);
    this.towels = new Intl.NumberFormat().format(countTowels);
    const countMasks = 22 * sum;
    this.masks = new Intl.NumberFormat().format(countMasks);
    const countSoap = 1.76 * sum;
    this.soap7 = Math.round(countSoap / 7.5);
    this.soap10 = Math.round(countSoap / 10);
    this.soap12 = Math.round(countSoap / 12.5);
    this.soap = new Intl.NumberFormat().format(countSoap);
  },
  switch() {
    this.state = !this.state;
  },
});
