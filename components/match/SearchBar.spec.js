import { shallowMount } from '@vue/test-utils'
import cmp from './SearchBar.vue'

describe('[UNIT] Testing the /match Search Bar component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      data() {
        return {
          emailInput: ''
        }
      }
    })
  })

  it('Snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Component validation', () => {
    it('should render the main (parent) component', () => {
      expect(wrapper.is(cmp)).toBe(true)
    })
  })
})
