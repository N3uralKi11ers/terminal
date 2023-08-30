<script setup>
import Product from '../components/Product.vue'
import {useCartStore} from '@/stores/cart'

const store = useCartStore()
const cart = store.cart
const total = store.total

</script>


<template>
    <div class="container">
        <h1>Моя корзина</h1>
        <div class="margin-space">
            <div class="three-columns">
                <div class="column">Наименование товара</div>
                <div class="column" style="text-align: center; padding-left: 2rem;">Количество</div>
                <div class="column" style="text-align: center; padding-left: 2rem;">Цена</div>
            </div>
        </div>
        <div class="cart-container">
            <div v-for="product in cart" :key="product.title" style="margin-top: 1rem;">
                <Product :title="product.title" :image="product.image" :count="product.count" :price="product.price"/>
            </div>
        </div>
        <div class="rel">
            <div class="bill-block">
                <div class="bill-text">ИТОГ:</div>
                <div class="bill-text">{{total}} ₽</div>
            </div>
            <RouterLink to="success" class="success">ОПЛАТИТЬ</RouterLink>
            <RouterLink to="/" class="cancel">ОТМЕНА</RouterLink>
        </div>
    </div>
</template>

<style scoped>

div.margin-space {
    margin-top: 3rem;
    margin-bottom: 1rem;
}

div.three-columns {
    display: table;
    width: 450px;
    border-collapse: collapse;
    margin: auto;
}
div.three-columns > .column {
    display: table-cell;
    width: 33.33%;
    text-align: start;
    font-size: large;
}


div.container {
    padding: 1rem;
}

div.bill-block {
    text-align: justify;
    display: flex;
    justify-content:space-between;
}

div.bill-text {
    font-weight: bold;
    font-size: x-large;
    display: inline;
}

div.cart-container {
    margin-top: 1rem;
    margin-bottom: 12rem;
}

a {
    margin-block: 1em;
}
a.success {
    text-decoration: none;
    background-color: #21BE1D;
    color: aliceblue;
    padding-inline: 12rem;
    padding-block: 1rem;
    margin-top: 10px;
    border-radius: 1em;
    font-weight: bold;
}

a.cancel {
    text-decoration: none;
    color: #21BE1D;
    font-weight: bold;
}

div.rel {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    margin: auto;
    background: white;
}
</style>