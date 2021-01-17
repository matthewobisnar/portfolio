<template>
    <div>
        <app-particles></app-particles>
        <div id="app__header" class="app__header" :style="app__header_style">
            <app-navigation></app-navigation>
            <div class="app_row">         
                <div class="app__column-header app__center-header" :style="app__col_header_style">
                    <div class="app__header_caption">
                        <p class="app__top_header">Hey there! I'm</p>
                        <h1 class="app__h1_header" :style="[isLaptop, isTablet, isMobile]">Matthew Bisnar</h1>
                        <p class="app__p_subheader">Web Developer & Designer</p>
                        <div>
                            <button class="app__btn_outline_light" v-scroll-to="{el: '#app__aboutme'}">My Projects</button>
                            <button class="app__btn_outline_light" v-scroll-to="{el: '#app__techstack'}">Tech Stack</button>
                        </div>
                    </div>
                </div>
                <div v-if="isStandardWidth" class="app__column-header app__center-header" :style="app__col_header_style">
                    <app-typed v-if="isStandardWidth"></app-typed>
                </div>
            </div>
            <app-lightbulb></app-lightbulb>
            <app-arrow-navigation></app-arrow-navigation>
        </div>
    </div>
</template>
<script src="./header.js"></script>
<style scoped src="./header.css"></style>