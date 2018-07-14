import { shallowMount } from '@vue/test-utils'
import Skill from '@/components/skill'

describe('Skill', () => {
  test('Component is a Vue instance', () => {
    const wrapper = shallowMount(Skill)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
