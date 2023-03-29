
    import { mount } from '@vue/test-utils';
    import HelloWorld from '@/components/HelloWorld.vue';

    describe('HelloWorld', () => {
      it('renders the component', () => {
        const wrapper = mount(HelloWorld);
        expect(wrapper.exists()).toBe(true);
      });
    });
  