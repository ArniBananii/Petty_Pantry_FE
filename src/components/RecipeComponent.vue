<template>
  <div
    class="form-control text-format"
    style="background-color: #181818; border: 0; color: coral"
  >
    <div v-if="Object.keys(answer).length == 0" class="text-center">
      <h4 style="color: coral">
        A fitting recipe for you is being generated...Please wait.
      </h4>
    </div>
    {{ answer.content }}
  </div>
</template>

<script setup lang="ts">
import { ChatOpenAI } from "@langchain/openai";
import { isExperationThisWeek } from "@/utils/checkExperation";
import { OPENAI_KEY, UNIQUE_INGREDIENTS_USER_ENDPOINT } from "@/constants";
import { ChatPromptTemplate } from "langchain/prompts";
import { onMounted, ref, type Ref, unref } from "vue";
import type { BaseMessageChunk } from "langchain/schema";
import type { UniqueIngredient } from "@/@types";
import { useFetch } from "@vueuse/core";

const user = JSON.parse(localStorage.getItem("user") ?? "");
const answer = ref({} as BaseMessageChunk) as Ref<BaseMessageChunk>;

const chatModel = new ChatOpenAI({
  openAIApiKey: OPENAI_KEY,
});
const prompt = ChatPromptTemplate.fromMessages([
  [
    "human",
    "You are a world class cook that will help us create a recipe for a delicious meal out of the given ingredients.",
  ],
  ["user", "{input}"],
]);
const chain = prompt.pipe(chatModel);

onMounted(async () => {
  try {
    const uniqu = await useFetch(
      `${UNIQUE_INGREDIENTS_USER_ENDPOINT}${user.userID}`
    )
      .get()
      .json();

    const getRecepieByUniqueIngr = async (
      x: UniqueIngredient[] | Ref<UniqueIngredient[]>
    ) => {
      const unwrapped = unref(x);
      const test = unwrapped
        .filter((ingr: UniqueIngredient) => isExperationThisWeek(ingr))
        .map((ingr: UniqueIngredient) => ingr.name);

      console.log("names", test);
      console.log("test", test);
      answer.value = await chain.invoke({
        input: test,
      });
    };
    getRecepieByUniqueIngr(uniqu.data);
  } catch (error) {
    console.log(error);
  }
});

// console.log("answer", answer.value.content);
</script>

<style scoped>
.text-format {
  max-height: 1000px;
  overflow-y: auto;
  white-space: pre-wrap;
}
</style>
