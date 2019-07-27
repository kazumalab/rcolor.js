import RGB from "./rgb";

/**
 * rcolor v1.0.0
 * https://github.com/kazumalab/rcolor.js
 * MIT licensed
 *
 * Copyright (C) 2019 kazumalab
 */

export default class RColor {
  constructor(hex) {
    this.hex = hex
  }

  get toRGB() {
    const hex = this.hex.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const rgb = new RGB(r, g, b)
    return rgb.toString()
  }

  get toReverse() {
    const hex = this.hex.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const rgb = new RGB(r, g, b)
    const rrgb = rgb.reverse()
    return rrgb.toHex()
  }
}