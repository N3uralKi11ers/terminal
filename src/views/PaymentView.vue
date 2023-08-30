<script setup>
import {ref} from 'vue'
const total = ref(1000)
</script>


<template>
    <div class="container">
        <h1>Выберите карту</h1>
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

a {
    margin-block: 1em;
}
a.success {
    text-decoration: none;
    background-color: #21BE1D;
    color: aliceblue;
    padding-inline: 10rem;
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
}
</style>