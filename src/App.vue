<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
	import {mapActions} from 'vuex';
    export default {
        name: "app",
        components: {},
        // data() {
        //
        // },
        mounted() {
            this.getUser();
            this.getCartCount();
        },
        methods: {
            getUser() {
                this.axios.get('/user').then((res) => {
                    // todo  保存到vuex里面
                    // this.$store.dispatch('saveUserName', res.username);
					this.saveUserName(res.username);
                })
            },
            getCartCount() {
                this.axios.get('/carts/products/sum').then((res) => {
                    // this.$store.dispatch('cartCount', res);
					this.cartCount(res);
                })
            },
			...mapActions(['saveUserName','cartCount'])
        }
    };
</script>

<style lang="scss">
    @import "./assets/scss/reset.scss";
    @import "./assets/scss/config.scss";
    @import "./assets/scss/button.scss";
</style>
