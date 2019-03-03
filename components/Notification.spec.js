import { shallowMount, config } from '@vue/test-utils'
import cmp from './Notification.vue'

describe('[UNIT] Testing the Notification component', () => {
  let wrapper

  config.mocks.$store = {
    state: {
      notification: {
        isShown: true,
        type: 'is-danger',
        message: 'notificationMock'
      }
    },
    mutations: {
      setIsShown: jest.fn()
    }
  }

  beforeEach(() => {
    wrapper = shallowMount(cmp)
  })

  it('Snapshot testing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Component validation', () => {
    it('should render the main (parent) component', () => {
      expect(wrapper.is(cmp)).toBe(true)
    })
  })

  describe('Content validation', () => {
    it('should render a notification message', () => {
      expect(wrapper.text()).toContain('notificationMock')
    })

    it('should render a notification with the correct style', () => {
      expect(wrapper.find('.message').attributes('class')).toContain('is-danger')
    })
  })
})
