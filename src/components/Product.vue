<script setup>
import {ref} from 'vue'
const props = defineProps(['image', 'title', 'count', 'price'])

const image = ref(props.image)
const title = ref(props.title)
const count = ref(props.count)
const price = ref(props.price)

const counterIncrease = () => {
    count.value++
}

const counterDecrease = () => {
    if (count.value > 1) {
        count.value--
    }
}

</script>

<template>
    <div class="three-columns">
        <div class="column title">
            <img :src="image" class="product-image" />
            <div>{{title}}</div>
        </div>
        <div class="column center-vertically">
            <div class="count">
                <button class="circle-button" @click="counterDecrease">-</button>
                {{ count }}
                <button class="circle-button" @click="counterIncrease">+</button>
            </div>
        </div>
        <div class="column price center-vertically">
            <div class="price-align">{{ price }} ₽</div>
        </div>
    </div>
</template>

<style scoped>

div.title {
    font-size: large;
}

div.count {
    display: flex;
    align-items: center; /* vertically center the items */
  }

div.price {
    font-size: large;
    font-weight: bold;
    text-align: right;
}

div.price > .price-align {
    display: flex;
    align-items: center;
}

div.center-vertically {
    display: table-cell;
    vertical-align: middle;
}

.circle-button {
    margin: 1rem;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 24px;
    text-align: center;
    line-height: 35px;
    border: 0px solid black;
    box-shadow: 0px 2px 2px 1px rgba(135, 135, 135, 0.5);
    background: aliceblue;
    color: #21BE1D;
    display: inline;
  }

div.three-columns {
    display: flex;
    border-collapse: collapse;
    margin: auto;
}
div.three-columns > .column {
    flex: 2;
    border-left: 1cap;
    text-align: start;
}
div.three-columns > .column:first-child {
    /* Since we only want borders between the elements, remove the leftmost border */
    border-left: none; 
}

.product-image {
    border-radius: 2rem;
}
</style>