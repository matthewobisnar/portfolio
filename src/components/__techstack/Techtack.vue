<template>
    <div id="app__techstack" class="app__techstack">
        <div class="app_row">         
            <div class="app__col-10">
                <h1 class="app_section_header" :style="[isLaptop, isTablet, isMobile]">Tech Stack</h1>
            </div>
            <div class="app__col-10">
                <div class="app__stack_ul">
                    <ul class="app__image-handler">
                        <li class="app__preview-caption" v-for="tech_stack in GET_TECH_STACK" :key="tech_stack.id">
                            <img :src="tech_stack.icon"/>
                            <div class="app__img-caption">{{tech_stack.name}}</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </div>
</template>

<script src="./techstack.js"></script>
<style scoped src="./techstack.css"></style>