<template>
    <div class="app__navigation">
        <nav class="app__navbar" v-if="isStandardWidth">
            <div class="app__brand">
                <a href="#">
                    <span class="app__bracket">{</span> m <span class="app__bracket">}</span>
                </a>
            </div>
            <ul class="app__nav app__mr">
                <li class="app__nav_item">
                    <a href="#" v-scroll-to="{el: '#app__aboutme'}" class="app__nav_link">About Me</a>
                </li>
                 <li class="app__nav_item">
                    <a href="#" v-scroll-to="{el: '#app__techstack'}" class="app__nav_link">Tech Stack</a>
                </li>
                <li class="app__nav_item">
                    <a href="#" v-scroll-to="{el: '#app__myprojects'}" class="app__nav_link">Projects</a>
                </li>
                <li class="app__nav_item">
                    <a href="#" v-scroll-to="{el: '#app__contents'}" class="app__nav_link">Contents</a>
                </li>
            </ul>
        </nav>
        <!-- Is Non Standard Width -->
        <nav class="app__navbar_mobile" v-if="!isStandardWidth">
            <div class="app__brand">
                <a href="#">
                    <span class="app__bracket">{</span> m <span class="app__bracket">}</span>
                </a>
            </div>
            <div class="app_nav-menu" >
                <button class="app__btn-transparent" @click="toggleCollapse = !toggleCollapse">
                    <svg width="35" height="20" v-if="!toggleCollapse" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="35" y2="0.5" stroke="white"/>
                        <line y1="6.5" x2="35" y2="6.5" stroke="white"/>
                        <line y1="12.5" x2="35" y2="12.5" stroke="white"/>
                        <line y1="19.5" x2="35" y2="19.5" stroke="white"/>
                    </svg>
                    <svg width="37" v-if="toggleCollapse" height="20" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.23855" y1="0.560573" x2="36.2385" y2="19.5606" stroke="white"/>
                        <line y1="-0.5" x2="39.8246" y2="-0.5" transform="matrix(-0.878853 0.477092 0.477092 0.878853 36 1)" stroke="white"/>
                    </svg>
                </button>
                <ul class="app__mobile_nav" :class="toggleCollapse ? 'app__mobile_collapse ' : null">
                    <li class="app__mobile_item" :class="toggleCollapse ? 'show' : null">
                        <a href="#" v-scroll-to="{el: '#app__aboutme'}" class="app__mobile_link">About Me</a>
                    </li>
                    <li class="app__mobile_item" :class="toggleCollapse ? 'show' : null">
                        <a href="#" v-scroll-to="{el: '#app__techstack'}" class="app__mobile_link">Tech Stack</a>
                    </li>
                    <li class="app__mobile_item" :class="toggleCollapse ? 'show' : null">
                        <a href="#" v-scroll-to="{el: '#app__myprojects'}" class="app__mobile_link">Projects</a>
                    </li>
                    <li class="app__mobile_item" :class="toggleCollapse ? 'show' : null">
                        <a href="#" v-scroll-to="{el: '#app__contents'}" class="app__mobile_link">Contents</a>
                    </li>
                </ul>
            </div>
        </nav> 

    </div>
</template>

<script>
import { resizerMixins } from '../../../Store/Resizer/ResizerMixins.js';

export default {
    data () {
        return {
            toggleCollapse: false
        }
    },
    mixins: [resizerMixins]
}
</script>

<style scoped>
    .app__brand {
        float:left;
    }

    .app__brand a {
        text-decoration: none;
        color:white;
        font-size: 18px;
    }
    .app__bracket {
        font-size: 30px;
    }

    .app__navbar, .app__navbar_mobile {
        background: transparent;
        position: relative;
        list-style: none;
        list-style-type: none;
        padding-top: 30px;
        padding-bottom: 30px;
        /* border: solid 1px white */
    }

    .app__mr, .app_nav-menu {
        text-align: right;
    }
    .app__mobile_collapse { 
        height: 285px !important;
        opacity: 1 !important;
    }

    .app__mobile_nav {
        position: absolute;
        right: 0;
        opacity: 0;
        height: 0px;
        background: #4e535d36;
        width: 100%;
        z-index: 10000;
        margin-top:5px;
        transition: all .3s cubic-bezier(0.6, -0.08, 1, 0.32);
        box-shadow: 0px 1px #222630;
        --webkit-box-shadow: 0px 1px #222630;
        --moz-box-shadow: 0px 1px #222630;
        --o-box-shadow: 0px 1px #222630;
        border-radius: 5px;
    }

    .app__mobile_item {
        display: block;
        list-style: none;
        list-style-type: none;
    }

    .app__mobile_item {
        padding-top: 0px;
        padding-right: 15px;
        padding-bottom: 0px;
        transition: all .3s ease-in;
    }

    .app__mobile_item.show {
        padding-top: 25px !important;  
        padding-bottom: 25px !important;
        
    }

    .app__nav_item {
        display:inline-block;
        list-style: none;
        list-style-type: none;
    }

    .app__nav_link, .app__mobile_link {
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        text-decoration: none;
        color:white;
        transition: all 1s ease-in forwards;
        --webkit-transition: all 1s ease-in forwards;
        --moz-transition: all 1s ease-in forwards;
        --o-transition: all 1s ease-in forwards;
    }

    .app__nav_item:not(:last-child) {
        padding-right: 20px;
    }

    .app__nav_link:hover, .app__mobile_link:hover {
        border-bottom: solid 1px #5CC8F6;
        padding-bottom: 10px;
        z-index: 1000;
        color: #5CC8F6;
    }

    .app__btn-transparent {
        background: transparent;
        border: none !important;
        cursor: pointer;
    }

    .app__btn-transparent:focus {
        outline: 0;
    }

</style>