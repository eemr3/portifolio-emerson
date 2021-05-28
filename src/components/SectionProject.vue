<template>
  <section class="min-h-screen pb-24 bg-gray-900" id="project">
    <div class="flex flex-col justify-center items-center">
      <div class="container mx-auto pt-20 text-center">
        <h2 class="text-5xl text-gray-50 mb-4">MEUS PROJETOS</h2>
        <span class="text-gray-50 text-sm">ESTA É A MINHA HISTÓRIA</span>
      </div>
      <div class="border-b-2 border-gray-50 w-52 my-4"></div>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 mt-7 gap-y-20 gap-x-8 w-8/12 m-auto"
    >
      <div
        class="h-96 max-w-md"
        v-for="(project, index) in projects"
        :key="index.id"
      >
        <img
          class="object-cover h-96"
          :src="project.image"
          :alt="project.title"
        />

        <a :href="project.url" target="_blank">
          <p class="text-gray-900 text-xl text-center bg-gray-50 py-3 px-2">
            <span class="text-orange-400">&lt;</span>
            {{ project.title }}
            <span class="text-orange-400">&#47;&gt;</span>
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../services/api.js";

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    api.get("/projects.json").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<style>
</style>