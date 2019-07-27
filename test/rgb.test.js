import RGB from '../src/rgb'

describe('RGB', () => {
  describe('#toString', () => {
    it('255,255,255', () => {
      const rgb = new RGB(255, 255, 255)
      expect(rgb.toString()).toEqual('rgb(255,255,255)')
    })

    it('100,100,100', () => {
      const rgb = new RGB(100, 100, 100)
      expect(rgb.toString()).toEqual('rgb(100,100,100)')
    })
  })

  describe('toHex', () => {
    it('255,255,255', () => {
      const rgb = new RGB(255,255,255)
      expect(rgb.toHex()).toEqual('#ffffff')
    })

    it('100,100,100', () => {
      const rgb = new RGB(100,100,100)
      expect(rgb.toHex()).toEqual('#646464')
    })
  });

  describe('#reverse', () => {
    it('255,255,255', () => {
      const rgb = new RGB(255, 255, 255)
      const rrgb = rgb.reverse()

      expect(rrgb).toBeInstanceOf(RGB)
      expect(rrgb.toString()).toEqual('rgb(0,0,0)')
    })

    it('100, 100, 100', () => {
      const rgb = new RGB(100, 100, 100)
      const rrgb = rgb.reverse()

      expect(rrgb).toBeInstanceOf(RGB)
      expect(rrgb.toString()).toEqual('rgb(155,155,155)')
    })
  })
})