<template>
  <div id="app">
    <app-header></app-header>
    <app-about-me></app-about-me>
    <app-tech-stack></app-tech-stack>
    <app-my-project></app-my-project>
    <app-timeline></app-timeline>
    <app-contents></app-contents>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/__header/Header.vue';
import AboutMe from './components/__aboutme/Aboutme.vue';
import TechStack from './components/__techstack/Techtack.vue';
import MyProject from './components/__myprojects/Myprojects.vue';
import Contents from './components/__contents/Contents.vue';
import Timeline from './components/__repos/repos.vue'; 
import Footer from './components/__shared/Footer/Footer.vue';

var components = {
  appHeader: Header,
  appAboutMe: AboutMe,
  appTechStack: TechStack,
  appMyProject: MyProject,
  appContents: Contents,
  appTimeline: Timeline,
  appFooter: Footer
}

export default {
  name: 'App',
  components
}

</script>

<style>
    @import './styles/__themes/themes.css';
    @import './styles/style.css';
</style>
