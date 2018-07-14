import { mount } from '@vue/test-utils'
import Leg from '@/components/leg'

describe('Leg', () => {
  test('Component is a Vue instance', () => {
    const wrapper = mount(Leg)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
