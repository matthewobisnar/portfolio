<template>
    <div id="app__aboutme" class="app__aboutme" :style="app__col_style">
        <h1 class="app_section_header" :style="[isLaptop, isTablet, isMobile]">About me</h1>
        <p class="app_section_content" v-html="GET_ABOUTME"></p>
        <div class="app_get_intouch">
            <div class="app__img-handler">
                <img :src="GET_PICTURE"/>
            </div>
            <h1>Get in Touch</h1>
            <p class="app_section_content">
                Interested in working together? Send me an email or say hi on messenger If you would like to chat. I'd love to hear from you.
            </p>
            <div class="app__social-menu">
                <ul>
                    <li v-for="social in GET_SOCIALS" :key="social.id">
                        <a :href="social.link" v-html="social.icon"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script src="./aboutme.js"></script>
<style scoped src="./aboutme.css"></style>