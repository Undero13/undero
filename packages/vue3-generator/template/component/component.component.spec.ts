import { VueWrapper, shallowMount } from '@vue/test-utils';
import {{ name }}{{whatLowerCase}} from './{{path}}.{{what}}.vue';

describe('{{name}}{{whatLowerCase}}', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount({{name}}{{whatLowerCase}}, {
    });
  });

  it('view exist', () => {
    expect(wrapper).toBeDefined()
  });
});
