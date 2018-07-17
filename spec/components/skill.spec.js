import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Skill from '@/components/skill'
import { __createMocks as createStoreMocks } from '../mocks/store'

describe('Skill', () => {
  let wrapper

  beforeAll(() => {
    jest.mock('@/store')
    const localVue = createLocalVue()

    localVue.use(Vuex)

    const storeMocks = createStoreMocks()
    wrapper = shallowMount(Skill, {
      propsData: {
        skill: {}
      },
      store: storeMocks.store,
      localVue,
    })
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
