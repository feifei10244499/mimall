<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub ? '/#/product/'+sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                                            {{sub ? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电话 盒子</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音箱</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <!--<div class="children"></div>-->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <!--<div class="children"></div>-->
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                        <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <div class="product-box"></div>
        </div>
        <ServiceBar></ServiceBar>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import ServiceBar from './../components/ServiceBar'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "index",
        components: {
            ServiceBar,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    effect: 'cube',
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                slideList: [{
                    id: '42',
                    img: "/imgs/slider/slide-1.jpg"
                }, {
                    id: '45',
                    img: "/imgs/slider/slide-2.jpg"
                }, {
                    id: '46',
                    img: "/imgs/slider/slide-3.jpg"
                }, {
                    id: '',
                    img: "/imgs/slider/slide-4.jpg"
                }, {
                    id: '',
                    img: "/imgs/slider/slide-5.jpg"
                }],

                menuList: [[
                    {
                        id: 30,
                        img: '/imgs/item-box-1.png',
                        name: '小米cc9'
                    }, {
                        id: 31,
                        img: '/imgs/item-box-2.png',
                        name: '小米8青春版'
                    }, {
                        id: 32,
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi K20 Pro'
                    }, {
                        id: 33,
                        img: '/imgs/item-box-4.jpg',
                        name: '移动4G专区'
                    }
                ], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],

                adsList: [
                    {
                        id: 33,
                        img: "/imgs/ads/ads-1.png"
                    },
                    {
                        id: 48,
                        img: "/imgs/ads/ads-2.jpg"
                    },
                    {
                        id: 45,
                        img: "/imgs/ads/ads-3.png"
                    },
                    {
                        id: 47,
                        img: "/imgs/ads/ads-4.jpg"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "./../assets/scss/mixin";
    @import "./../assets/scss/config";

    .index {
        .swiper-box {
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 2;
                padding: 26px 0;
                background-color: #55585a6e;
                box-sizing: border-box;

                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;

                        a {
                            position: relative;
                            display: block;
                            color: #ffffff;
                            padding-left: 30px;
                            font-size: 16px;

                            &:after {
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: ' ';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                            }
                        }

                        &:hover {
                            background-color: #FF6600;

                            .children {
                                display: block;
                            }
                        }

                        .children {
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;

                            ul {
                                display: flex;
                                justify-content: space-between;
                                height: 75px;

                                li {
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;

                                    &:hover {
                                        a {
                                            color: #FF6600;
                                        }
                                    }
                                }

                                a {
                                    color: #333333;
                                    font-size: 14px;
                                }

                                img {
                                    width: 35px;
                                    height: 42px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }

            .swiper-container {
                height: 451px;

                .swiper-button-prev {
                    left: 274px;
                }

                img {
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .ads-box {
            display: flex;
            justify-content: space-between;
            margin-top: 14px;
            margin-bottom: 30px;

            img {
                width: 296px;
                height: 167px;
            }
        }

        .banner {
            margin-bottom: 50px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
