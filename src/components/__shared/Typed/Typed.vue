<template>
    <div class="app__typed">
        <pre></pre>
    </div>

</template>
<script>
import Typed from 'typed.js';
import { options } from './options.js';

const methods = {
    initializedTyped() {
        new Typed(".app__typed pre", options)
    }
};

export default {
    mounted() {
        this.initializedTyped()
    },
    methods
}
</script>
<style scoped>
    .app__typed pre {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #fff !important;
        letter-spacing: 2px;
        line-height: 1.5rem;
    }
</style>