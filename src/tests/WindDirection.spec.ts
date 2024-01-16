import { shallowMount } from "@vue/test-utils";
import {describe, expect, test} from "vitest";
import WindDirection from "../components/WindDirection.vue";
describe("WindDirection", () => {
    test("renders without crashing", (): void => {
        const wrapper = shallowMount(WindDirection, {
            props: {
                degrees: 90,
            },
        });
        expect(wrapper).toBeTruthy();
    });
});
