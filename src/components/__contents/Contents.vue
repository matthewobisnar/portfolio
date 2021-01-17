<template>
    <div id="app__contents" class="app__contents" :style="app__header_style">
        <div class="app__section">         
            <h1 class="app_section_header">Contents</h1>
            <div class="app__section_content">
                <ul class="app__contents-list">
                    <li v-for="mycontents in GET_CONTENTS" :key="mycontents.id">
                        <div class="app__thumbnail">
                            <h1 class="text">
                                <a :href="mycontents.link">
                                    {{mycontents.title}}
                                </a>
                            </h1>
                            <p>
                                {{mycontents.description}}
                            </p>
                            <div class="date">
                                <small>{{mycontents.date}}</small>
                            </div>
                        </div>
                        <div class="app__category">
                            <div class="app__icon">
                                <img src="../../assets/icons/article.webp"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script src="./contents.js"></script>
<style scoped src="./contents.css"></style>