export default class RGB {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
    this.array = [r, g, b]
  }

  toString() {
    return `rgb(${this.r},${this.g},${this.b})`
  }

  toHex() {
    let hex = '#'
    hex += ('0' + this.r.toString(16)).slice(-2)
    hex += ('0' + this.g.toString(16)).slice(-2)
    hex += ('0' + this.b.toString(16)).slice(-2)
    return hex
  }

  reverse() {
    const rarray = this.array.map((value) => {
      return 255 - parseInt(value, 10)
    })

    return new RGB(rarray[0], rarray[1], rarray[2])
  }
}