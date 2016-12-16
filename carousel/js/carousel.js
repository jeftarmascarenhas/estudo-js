class Carousel {
  constructor() {
    this.box = document.querySelector('.carousebox');
    this.next = document.querySelector('.next');
    this.prev = document.querySelector('.prev');
    this.items = document.querySelector('.content li');
    this.counter = 0;
    this.amout = this.items.length;
    this.current = this.items[0];
  }

  showSelector () {
    return this.box;
  }

}
