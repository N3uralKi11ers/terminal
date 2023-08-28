<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const pages = ref([
  {
    title: 'Вход по биометрии',
    message: 'Поднесите ваше лицо к экрану устройства и посмотрите в камеру',
    link: 'login'
  }
])

const showNextButton = ref(false)
const addStyles = ref('')
const checkBiometry = ref(true) // use API

onMounted(() => {
    setTimeout(() => {
        showNextButton.value = true
        addStyles.value = 'filter: blur(8px); -webkit-filter: blur(8px); border-width: 3px; '

        if (checkBiometry.value) {
            addStyles.value += 'border-color: #21BE1D'
        } else {
            addStyles.value += 'border-color: red'
        }
    }, 3000)
})

</script>

<template>
    <div>
        <h1>{{pages[0].title}}</h1>
        <p>{{pages[0].message}}</p>
        <Transition>
            <img src="https://thispersondoesnotexist.com/" alt="UserPhoto" class="user-image" :style=addStyles>
        </Transition>
    </div>
    <Transition>
        <RouterLink to="payment" class="button" v-show="showNextButton">К ОПЛАТЕ</RouterLink>
    </Transition>
</template>

<style scoped>
a.button {
    text-decoration: none;
    background-color: #21BE1D;
    color: aliceblue;
    padding-inline: 8rem;
    padding-block: 1rem;
    margin-top: 10px;
    border-radius: 1em;
    font-weight: bold;
}

p {
    margin-block: 2rem;
    width: 300px;
    margin: auto;
    color: rgba(0, 0, 0, 0.5);
}

img.user-image {
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 2rem;
    display: inline-block;
    height: auto;
    max-width: 450px;

    border: 0px solid #21BE1D;
}

img.add-blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
}

@media (max-width: 600px) {
    img {
        width: calc(100% - 10px); /* Override width to show only one image in a row on smaller screens */
    }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>