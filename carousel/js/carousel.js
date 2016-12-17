class Carousel {
  constructor() {
    let $ = document.querySelector.bind(document);
    let $All = document.querySelector.bind(document);
    this.box = $('.carousebox');
    this.next = $('.next');
    this.prev = $('.prev');
    this.items = document.querySelectorAll('.content li');
    this.counter = 0;
    this.amout = this.items.length;
    this.current = this.items[0];
    this.navigate;

  }

  init (direction) {
    this.box.classList.add('active');

    this.navigate = (direction) => {
      this.current.classList.remove('current');
      this.counter = this.counter + direction;
      if(direction === -1 && this.counter < 0) {
        this.counter = this.amout - 1;
      }
      if(direction === 1 && !this.items[this.counter]) {
        this.counter = 0;
      }
      this.current = this.items[this.counter];
      this.current.classList.add('current');
    }

    this.prev.addEventListener('click', (ev) => {
      this.navigate(-1);
    });
    this.next.addEventListener('click', (ev) => {
      this.navigate(1);
    });
  }

  showSelector() {
    return this.amout;
  }


}
