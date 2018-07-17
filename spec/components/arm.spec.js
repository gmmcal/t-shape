import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Arm from '@/components/arm'
import { __createMocks as createStoreMocks } from '../mocks/store'

describe('Arm', () => {
  let wrapper

  beforeAll(() => {
    jest.mock('@/store')
    const localVue = createLocalVue()

    localVue.use(Vuex)

    const storeMocks = createStoreMocks()
    wrapper = mount(Arm, {
      store: storeMocks.store,
      localVue,
    })
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
