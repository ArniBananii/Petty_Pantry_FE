<template>
  <div>{{ answere.content }}</div>
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

const answere = ref({} as BaseMessageChunk) as Ref<BaseMessageChunk>;
const chatModel = new ChatOpenAI({
  openAIApiKey: OPENAI_KEY,
});
const prompt = ChatPromptTemplate.fromMessages([
  [
    "human",
    "You are a world class cook that will help us create a receipe for a delicious meal out of the given ingredients.",
  ],
  ["user", "{input}"],
]);
const chain = prompt.pipe(chatModel);

onMounted(async () => {
  answere.value = await chain.invoke({
    input: "I have eggs, flour, milk, sugar, salt",
  });

  console.log("answere", answere.value.content);
});
</script>
