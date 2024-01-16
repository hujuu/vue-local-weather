import HelloWorld from "../components/HelloWorld.vue";
import {describe, expect, test} from "vitest";
import { shallowMount, type VueWrapper } from '@vue/test-utils'


describe("HelloWorld", () => {
    test("hello world", async () => {
        expect("HelloWorld").toBe(HelloWorld.__name)
    })

    test("Component Test", async () => {
        const expected = "test message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg:expected }}) as VueWrapper<InstanceType<typeof HelloWorld>>
        expect(wrapper.text()).toContain(expected)
    })
})
