<script setup>
import IconCheckmarkVue from '../components/icons/IconCheckmark.vue';
</script>

<template>
    <div class="container">
        <h1>Платеж завершен</h1>
        <img src="https://thispersondoesnotexist.com/" alt="UserPhoto" class="user-image">
        <IconCheckmarkVue class="checkmark" />
        <div />
        <RouterLink to="/" class="cancel" style="margin-right: 4rem;">НЕ НУЖНО</RouterLink>
        <RouterLink to="/" class="success">ЧЕК</RouterLink>
    </div>
</template>

<style scoped>

div.container {
    padding: 1rem;
}


img.user-image {
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    display: inline-block;
    height: auto;
    max-width: 450px;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    position: relative;
    border: 3px solid #21BE1D;
}

.checkmark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }

.success-text {
    color: #21BE1D;
    display: inline;
}

div.bill-text {
    font-weight: bold;
    font-size: x-large;
    display: inline;
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

a.success {
    text-decoration: none;
    background-color: #21BE1D;
    color: aliceblue;
    padding-inline: 6rem;
    padding-block: 1rem;
    margin-top: 10px;
    border-radius: 1em;
    font-weight: bold;
}

a.cancel {
    text-decoration: none;
    color: #21BE1D;
    font-weight: bold;
    padding-left: 1rem;
}

</style>