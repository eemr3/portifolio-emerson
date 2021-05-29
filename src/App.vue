<template>
  <div>
    <nav-bar />
    <Header />
    <section-about />
    <section-project />
    <section-skills />
    <section-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionSkills from "./components/SectionSkills.vue";
import SectionProject from "./components/SectionProject.vue";
import SectionFooter from "./components/SectionFooter.vue";

export default {
  components: {
    Header,
    NavBar,
    SectionAbout,
    SectionProject,
    SectionSkills,
    SectionFooter,
  },
};
</script>

