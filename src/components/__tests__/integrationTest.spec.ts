import { expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LoginView from "@/views/LoginView.vue";

test("Login view shows a text", () => {
  const wrapper = shallowMount(LoginView);
  const textElement = wrapper.find("h1").text();
  console.log("wrapper", textElement);
  expect(textElement).toEqual("Login");
});
