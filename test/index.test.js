import { rcolor } from '../src/index'

describe('index.js', () => {
  it('success', () => {
    expect(rcolor()).toBe('#fffff')
  })
})