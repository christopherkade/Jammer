import { shallowMount } from '@vue/test-utils'
import cmp from './SearchBar.vue'

describe('[UNIT] Testing the /songs Search Bar component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      propsData: {
        items: [],
        isAsync: false
      },
      data() {
        return {
          isLoading: true,
          results: [
            { name: 'mockedName1', artist: 'mockedArtist1' },
            { name: 'mockedName2', artist: 'mockedArtist2' }
          ],
          isOpen: true
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

  describe('Content validtion', () => {
    it('should render the loading message', () => {
      expect(wrapper.text()).toContain('Loading results...')
    })

    it('should display the result list in a pannel', () => {
      wrapper.setData({ isLoading: false })
      expect(wrapper.text()).toContain('mockedName1 - mockedArtist1')
    })
  })
})
