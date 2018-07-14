import { mount } from '@vue/test-utils'
import Arm from '@/components/arm'
import Leg from '@/components/leg'
import TShape from '@/components/t-shape'

describe('TShape', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(TShape)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('Child components', () => {
    test('Arm', () => {
      const child_component = wrapper.find(Arm)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Leg', () => {
      const child_component = wrapper.find(Leg)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
