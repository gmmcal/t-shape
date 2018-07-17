import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Leg from '@/components/leg'
import { __createMocks as createStoreMocks } from '../mocks/store'

describe('Leg', () => {
  let wrapper

  beforeAll(() => {
    jest.mock('@/store')
    const localVue = createLocalVue()

    localVue.use(Vuex)

    const storeMocks = createStoreMocks()
    wrapper = mount(Leg, {
      store: storeMocks.store,
      localVue,
    })
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
