import {     
    SET_DIMENSIONS,
    SET_SCROLL_HEIGHT,
    GET_DIMENTSIONS,
    GET_LAPTOP_DIMENSIONS,
    GET_TABLET_DIMENSIONS,
    GET_MOBILE_DIMENSIONS,
    GET_SCROLL_HEIGHT
} from './namespaced.js';

import { mapGetters, mapActions } from 'vuex';

export const resizerMixins = {
    created() {
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('scroll', this.scrollHeight);
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeHandler);
        window.removeEventListener('scroll', this.scrollHeight);
    },
    computed: {
        ...mapGetters({
            GET_DIMENTSIONS,
            GET_LAPTOP_DIMENSIONS,
            GET_TABLET_DIMENSIONS,
            GET_MOBILE_DIMENSIONS,
            GET_SCROLL_HEIGHT,
        }),

        isStandardWidth() {
            return this.GET_DIMENTSIONS.width >= this.GET_TABLET_DIMENSIONS
        },
        isTablet() {
            return this.GET_DIMENTSIONS.width <= this.GET_TABLET_DIMENSIONS ? {
                fontSize: '55px',
            } : null
        },
        isLaptop() {
            return this.GET_DIMENTSIONS.width <= this.GET_LAPTOP_DIMENSIONS ? {
                fontSize: '55px'
            } : null
        },
        isMobile() {
            return this.GET_DIMENTSIONS.width <= this.GET_MOBILE_DIMENSIONS ? {
                fontSize: '48px',
            } : null
        },
        app__header_style() {
            return {
                minHeight: (this.GET_DIMENTSIONS.height) + 'px'
            }
        },
        app__col_header_style() {
            return {
                minHeight: (this.GET_DIMENTSIONS.height - 100) + 'px'
            }
        },
        app__col_style() {
            return {
                minHeight: (this.GET_DIMENTSIONS.height) + 'px',
                paddingBottom: '20px'
            }
        },
        app_col_adjust_mobile() {
            return this.GET_DIMENTSIONS.width <= this.GET_TABLET_DIMENSIONS ? null : this.app__col_style;
        },
        app__nav_detector() {
            return {
                isBottom: this.GET_SCROLL_HEIGHT.isBottom,
                detect: this.GET_SCROLL_HEIGHT.scrollHeight > this.GET_DIMENTSIONS.height,
                style: this.GET_SCROLL_HEIGHT.scrollHeight > this.GET_DIMENTSIONS.height ? 
                '#161A23': '#CED5DE',
                isBottomStyle:'#CED5DE'
            }
        }
    },
    methods: {
        ...mapActions ({
            SET_DIMENSIONS,
            SET_SCROLL_HEIGHT,
        }),
        resizeHandler () {
            this.SET_DIMENSIONS({
                width: window.innerWidth,
                height: window.innerHeight
            });
        },
        scrollHeight () {
            var scrollPos = window.scrollY
            var winHeight = window.innerHeight
            
            // Scroll Need to be fix..
            this.SET_SCROLL_HEIGHT({
                height: (scrollPos + winHeight),
                bottom: (scrollPos + winHeight == document.body.scrollHeight)
            })
        }
    },
}