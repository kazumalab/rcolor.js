import RColor from '../src/index'

describe('RColor', () => {
  describe('#toRGB', () => {
    it('#FFFFFF', () => {
      const rcolor = new RColor('#FFFFFF')
      expect(rcolor.toRGB()).toEqual('rgb(255,255,255)')
    })
  
    it('#ff0000', () => {
      const rcolor = new RColor('#ff0000')
      expect(rcolor.toRGB()).toEqual('rgb(255,0,0)')
    })
  
    it('#516197', () => {
      const rcolor = new RColor('#516197')
      expect(rcolor.toRGB()).toEqual('rgb(81,97,151)')
    })
  })

  describe('#toReverse', () => {
    it('#FFFFFF', () => {
      const rcolor = new RColor('#FFFFFF')
      expect(rcolor.toReverse()).toEqual('#000000')
    })

    it('#1eb7ba', () => {
      const rcolor = new RColor('#1eb7ba')
      expect(rcolor.toReverse()).toEqual('#e14845')
    })
  })
})