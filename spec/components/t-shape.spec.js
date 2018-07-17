import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Arm from '@/components/arm'
import Leg from '@/components/leg'
import TShape from '@/components/t-shape'
import { __createMocks as createStoreMocks } from '../mocks/store'

describe('TShape', () => {
  let wrapper

  beforeAll(() => {
    jest.mock('@/store')
    const localVue = createLocalVue()

    localVue.use(Vuex)

    const storeMocks = createStoreMocks()
    wrapper = mount(TShape, {
      store: storeMocks.store,
      localVue,
    })
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
