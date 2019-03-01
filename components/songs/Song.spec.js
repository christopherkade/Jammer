import { shallowMount } from '@vue/test-utils'
import cmp from './Song.vue'

describe('[UNIT] Testing the Song component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      propsData: {
        song: {
          name: 'mockedName',
          artist: 'mockedArtist'
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
    it('should render the song name', () => {
      expect(wrapper.text()).toContain('mockedName')
    })

    it('should render the song\'s artist', () => {
      expect(wrapper.text()).toContain('mockedArtist')
    })
  })
})
