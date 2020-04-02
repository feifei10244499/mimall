<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
    </div>
</template>

<script>
    import ProductParam from './../components/ProductParam'

    export default {
        name: "product",
        components: {
            ProductParam
        }
    }
</script>

<style lang="scss">
    .product {

        button {
            margin-left: 10px;
        }

    }
</style>
