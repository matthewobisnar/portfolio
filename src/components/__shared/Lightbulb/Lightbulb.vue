<template>
    <div class="app__switch">
        <div class="container" :class="app__nav_detector.detect ? 'show' : null">
            <input class="app__switch_lightbulb" @change="toggleBulb()" type="checkbox" :disabled="!app__nav_detector.detect" :checked="toggleLightbulb">
        </div>
    </div>
</template>

<script>
import { resizerMixins } from '../../../Store/Resizer/ResizerMixins.js';

var methods = {
    toggleBulb () {
		this.toggleLightbulb = !this.toggleLightbulb;
		localStorage.setItem('data-theme-toggle', this.toggleLightbulb);
		this.toggleLightbulb = localStorage.getItem("data-theme-toggle") == 'true' ? true : false;
		localStorage.setItem('data-theme', this.toggleLightbulb ? 'light' : 'dark');
		document.documentElement.setAttribute('data-theme', localStorage.getItem("data-theme"));
	},
	
	onload () {

		if (localStorage.getItem("data-theme") == null) {
				console.log("ss")
			localStorage.setItem('data-theme', 'light');
		}

		if (localStorage.getItem('data-theme-toggle') == null) {
			localStorage.setItem('data-theme-toggle', true)
		}

		this.toggleLightbulb = localStorage.getItem("data-theme-toggle") == 'true' ? true : false;
		document.documentElement.setAttribute('data-theme', localStorage.getItem("data-theme"));
	}
};

export default {
    data () {
        return {
            toggleLightbulb: true 
        }
	},
	created () {
		window.addEventListener('load', this.onload.bind(this));
	},
    mixins: [resizerMixins],
    methods,
}
</script>

<style scoped>

.container input, .container input:before,  .container input:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	z-index: 9999;
}

.show {
    opacity: 1 !important;
}

.container {
    opacity: 0;
	box-sizing: border-box;
	margin: 0;
    padding: 0;
    transition: all 0.5s ease-in;
    --webkit-transition: all 0.5s ease-in;
    --moz-transition: all 0.5s ease-in;
    --o-transition: all 0.5s ease-in;
    animation: float-in 4s infinite;
    --moz-animation: float-in 4s infinite;
    --o-animation: float-in 4s infinite;
}
.container input {
	font-size: 1.1em;
	line-height: 1.5;
}
input {
    z-index: 9999;
    cursor: pointer;
	display: block;
	margin-bottom: 1.5em;
    transform:rotate(270deg);
}
.app__switch {
	padding: 1.5em 0 0 0;
	position:fixed;
	top:80%;
	z-index: 9999;
    right:26px;
	text-align: center;	
}
.app__switch_lightbulb {
	background-color: rgb(183 183 184);
	border-radius: 0.75em;
	box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;
	color: #fdea7b;
	display: inline-flex;
	align-items: center;
	margin: auto;
	padding: 0.15em;
	width: 3em;
	height: 1.5em;
	transition: background-color animation 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
	-webkit-appearance: none;
	-moz-appearance: none;
    appearance: none;
}
.app__switch_lightbulb:before, .app__switch_lightbulb:after {
	content: "";
	display: block;
}
.app__switch_lightbulb:before {
	background-color: #d7d7d7;
	border-radius: 50%;
	width: 1.2em;
	height: 1.2em;
	transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
	z-index: 1;
}
.app__switch_lightbulb:after {
    background: linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%, repeating-linear-gradient(90deg,#bbb 0,#bbb,#999 20%,#161a23 20%,#161a23 40%) 0 50% / 50% 100%, radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);
	background-repeat: no-repeat;
	border: 0.25em solid transparent;
	border-left: 0.4em solid #d8d8d8;
	border-right: 0 solid transparent;
	transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
	transform: translateX(-22.5%);
	transform-origin: 25% 50%;
	width: 1.2em;
	height: 1em;
}

/* Checked */
.app__switch_lightbulb:checked {
	background-color: rgb(174 174 174);
	box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;
}
.app__switch_lightbulb:checked:before {
	background-color: currentColor;
	transform: translateX(125%)
}
.app__switch_lightbulb:checked:after {
	border-left-color: currentColor;
	transform: translateX(-2.5%) rotateY(180deg);
}

/* Other States */
.app__switch_lightbulb:focus {
	outline: 0;
}

@keyframes float-in {
    0% {
        --webkit-transform: scale(1);
        --moz-transform: scale(1);
        --o-transform: scale(1); 
        transform: scale(1); 
    } 
    50% { 
        --webkit-transform: scale(1.1);
        --moz-transform: scale(1.1);
        --o-transform: scale(1.1); 
        transform: scale(1.1);
    }
}

</style>