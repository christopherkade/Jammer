import { shallowMount } from '@vue/test-utils'
import cmp from './EmailList.vue'

describe('[UNIT] Testing the /match Email List component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(cmp, {
      computed: {
        userList() {
          return [
            {
              email: 'mockedEmail1'
            }
          ]
        },
        userEmail() {
          return 'mockedEmail'
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

  describe('Content validation', () => {
    it('should render the user name tag', () => {
      expect(wrapper.text()).toContain('mockedEmail1')
    })
  })
})
