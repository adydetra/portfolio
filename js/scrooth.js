class Scrooth {
    constructor({ element: t = window, strength: s = 25, acceleration: e = 1, deceleration: i = 0.9175 } = {}) {
        (this.element = t),
            (this.distance = s),
            (this.acceleration = e),
            (this.deceleration = i),
            (this.running = !1),
            this.element.addEventListener("wheel", this.scrollHandler.bind(this), { passive: !1 }),
            this.element.addEventListener("mousewheel", this.scrollHandler.bind(this), { passive: !1 }),
            (this.scroll = this.scroll.bind(this));
    }
    scrollHandler(t) {
        t.preventDefault(),
            this.running
                ? ((this.isDistanceAsc = !1), (this.currentDistance = t.deltaY > 0 ? this.distance : -this.distance))
                : ((this.top = this.element.pageYOffset || this.element.scrollTop || 0), (this.running = !0), (this.currentDistance = t.deltaY > 0 ? 0.1 : -0.1), (this.isDistanceAsc = !0), this.scroll());
    }
    scroll() {
        this.running &&
            ((this.currentDistance *= !0 === this.isDistanceAsc ? this.acceleration : this.deceleration),
            !(Math.abs(this.currentDistance) < 0.1 && !1 === this.isDistanceAsc) || (this.running = !1),
            !(Math.abs(this.currentDistance) >= Math.abs(this.distance)) || (this.isDistanceAsc = !1),
            (this.top += this.currentDistance),
            this.element.scrollTo(0, this.top),
            requestAnimationFrame(this.scroll));
    }
}
const body = new Scrooth();