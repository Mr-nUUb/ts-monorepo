import { hello } from './index'

describe('Template Library', () => {
  it('should prepend name with greeting', () => {
    const result = hello('Joe')

    // jest
    expect(result).toBe('Hello Joe')

    // jest-extended
    expect(result).toBeString()
  })
})
