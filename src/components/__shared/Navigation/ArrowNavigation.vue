<template>
    <div class="app__arrow_navigation">
        <button class="app__arrow_btn" @click="scrollUp()" v-scroll-to="{el: components[count].id}">
            <svg width="24" height="14" class="app__arrow_up" :class="{'adjust_arrow' : app__nav_detector.isBottom}" v-if="app__nav_detector.detect" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9394 0.939326C11.5251 0.353547 12.4749 0.35356 13.0607 0.939354L22.6065 10.4854C23.1923 11.0712 23.1923 12.021 22.6065 12.6067C22.0207 13.1925 21.0709 13.1925 20.4851 12.6067L12 4.12132L3.51458 12.6065C2.92879 13.1923 1.97904 13.1923 1.39326 12.6065C0.807482 12.0207 0.807495 11.0709 1.39329 10.4851L10.9394 0.939326ZM10.5 2.99998L10.5 1.99998L13.5 2.00002L13.5 3.00002L10.5 2.99998Z" fill="#aeaeae"/>
            </svg>
        </button>
        <button class="app__arrow_btn" @click="scrollDown()" v-scroll-to="{el: components[count].id}">
            <svg width="24" height="14" v-if="!app__nav_detector.isBottom" class="app__arrow_down" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.5147C23.1924 2.92891 23.1924 1.97916 22.6066 1.39338C22.0208 0.807591 21.071 0.807593 20.4853 1.39338L12 9.87868L3.5147 1.39342C2.92891 0.807631 1.97916 0.807633 1.39338 1.39342C0.807591 1.97921 0.807593 2.92896 1.39338 3.51474L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z" fill="#aeaeae"/>
            </svg>
        </button>
    </div>
</template>

<script>
import { resizerMixins } from '../../../Store/Resizer/ResizerMixins.js';

var methods = {
    scrollDown () {
        if (!this.app__nav_detector.detect) { this.count = 1; return; }
        if (this.count < (this.components.length -1)) { this.count += 1; return; }
    },
    scrollUp () {
        if (this.app__nav_detector.isBottom) { this.count = 4; return; }
        if (this.count > 0) { this.count -= 1; return; }
    },
}

export default {
    data () {
        return {
            count: 0,
            components: [
                {id: '#app__header'},
                {id: '#app__aboutme'},
                {id: '#app__techstack'},
                {id: '#app__myprojects'},
                {id: '#app__contents'},
                {id: '#app__footer'},
            ]
        }
    },
    mixins: [resizerMixins],
    methods,
}
</script>

<style scoped>
    .app__arrow_navigation {
        color:white;
    }

    .app__arrow_up {
        position: fixed;
        bottom: 40px;
        right:40px;
    }
    .adjust_arrow {
        bottom: 27px;
    }

    /* path {
        fill: var(--app-fill-color);
    } */
    
    .app__arrow_down {
        position: fixed;
        bottom: 10px;
        right:40px;
        z-index: 9999;
    }

    .app__arrow_btn {
        border: none !important;
    }

    .app__arrow_btn:focus {
        outline: none !important;
    }

    .app__arrow_down, .app__arrow_up {
        z-index: 9999;
        cursor: pointer;
        transition: all 0.5s ease-in;
        --webkit-transition: all 0.5s ease-in;
        --moz-transition: all 0.5s ease-in;
        --o-transition: all 0.5s ease-in;
        animation: float-in 4s infinite;
        --moz-animation: float-in 4s infinite;
        --o-animation: float-in 4s infinite;
    }

    .app__arrow_down:hover, .app__arrow_up:hover { 
        transform: scale(1.2);
    }

    @keyframes float-in {
        0% {
            --webkit-transform: scale(1);
            --moz-transform: scale(1);
            --o-transform: scale(1); 
            transform: scale(1); 
        } 
        50% { 
            --webkit-transform: scale(1.2);
            --moz-transform: scale(1.2);
            --o-transform: scale(1.2); 
            transform: scale(1.2);
        }
    }
</style>