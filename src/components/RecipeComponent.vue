<template>

<div></div>

</template>

<script setup lang="ts">
const props = defineProps({
 ingredients: Array,
});
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";


const prompt = PromptTemplate.fromTemplate("what is the meaning of life?");
const model = new ChatOpenAI({});