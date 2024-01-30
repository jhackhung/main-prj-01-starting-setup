<template>
    <the-header></the-header>
    <router-view></router-view>
</template>
<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: "Titillium Web", sans-serif;
}

body {
    margin: 0;
}

</style>