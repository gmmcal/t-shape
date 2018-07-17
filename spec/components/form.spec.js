import { mount } from '@vue/test-utils'
import Form from '@/components/form'

describe('Form', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Form)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
