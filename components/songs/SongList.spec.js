import { shallowMount, config } from '@vue/test-utils'
import cmp from './SongList.vue'
import cmpChild1 from './Song.vue'
import cmpChild2 from '@/components/Spinner.vue'

describe('[UNIT] Testing the Song component', () => {
  let wrapper

  config.mocks.$store = {
    state: {
      songs: {
        isLoading: false,
        songs: [
          {}
        ]
      }
    }
  }

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      propsData: {
        songs: [
          {}
        ]
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

    it('should render the child song component correctly', () => {
      expect(wrapper.find(cmpChild1).exists())
    })

    it('should render the child search bar component correctly', () => {
      expect(wrapper.find(cmpChild2).exists())
    })

    it('should render the songs as a list of length 1', () => {
      expect(wrapper.findAll(cmpChild1).length).toBe(1)
    })
  })
})
