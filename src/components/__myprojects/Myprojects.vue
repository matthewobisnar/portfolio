<template>
    <div id="app__myprojects" class="app__myprojects" :style="app__header_style">
        <div class="app__section">
            <h1 class="app__section_header">My Projects</h1>
            <ul class="app__project-list">
                <li v-for="project in GET_MY_PROJECTS" :key="project.id">
                    <div class="app__thumbnail">
                        <img ng-if="project.image" :src="project.image" :class="!project.image ? 'app__hide' : null">
                        <div class="app__overlay">
                            <div class="text">{{project.title}}</div>
                            <div class="app__btn_menu">
                                <a :href="link.link" v-for="link in project.links" :key="link.id">
                                    <button class="app__btn">{{link.name}}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="app__category">
                        <div class="app__icon" v-for="categories in project.categories" :key="categories.id">
                            <img :src="categories.icon"/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./myprojects.js"></script>
<style scoped src="./myprojects.css"></style>