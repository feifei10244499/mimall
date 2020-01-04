<template>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
</template>

<script>
    import NavFooter from "../components/NavFooter";
    export default {
        name: "home",
        components: {NavFooter}
    }
</script>

<style scoped>

</style>