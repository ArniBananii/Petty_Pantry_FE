<template>
  <div class="form-control text-format" style="background-color: #181818; border: 0; color: coral">
    <div v-if="Object.keys(answer).length == 0" class="text-center">
      <h4 style="color: coral">
        A fitting recipe for you is being generated...Please wait.
      </h4>
    </div>
    {{ answer.content }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ingredients: Array,
});

import { ChatOpenAI } from "@langchain/openai";
import { OPENAI_KEY } from "@/constants";
import { ChatPromptTemplate } from "langchain/prompts";
import { onMounted, ref, type Ref } from "vue";
import type { BaseMessageChunk } from "langchain/schema";

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
  answer.value = await chain.invoke({
    input: "I have eggs, flour, milk, sugar, salt",
  });

  console.log("answer", answer.value.content);
});
</script>

<style scoped>
.text-format {
  max-height: 1000px;
  overflow-y: auto;
  white-space: pre-wrap;
}

</style>
