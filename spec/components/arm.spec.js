import { mount } from '@vue/test-utils'
import Arm from '@/components/arm'

describe('Arm', () => {
  test('Component is a Vue instance', () => {
    const wrapper = mount(Arm)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
