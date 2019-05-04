const defaults = {
  width: "300",
  height: "300"
}
class Canvas {
  constructor(el, options) {
    this.el = el;
    this.opt = {
      ...defaults,
      ...options
    };
    this.ctx = this.el.getContext('2d');

    this.init()
  }

  init() {
    this.el.width = this.opt.width;
    this.el.height = this.opt.height;
    this.render(this.ctx);
  }
  render(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 650);
  }
}