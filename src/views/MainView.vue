<script setup>
import IconCentrInvest from '../components/icons/IconCentrInvest.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const onTap = () => {
    router.push({
        name: 'login',
      })
}

</script>

<template>
    <div class="container full-size" v-touch:tap="onTap">
        <IconCentrInvest />
        <h3>Коснитесь экрана для начала</h3>
        <h3>работы терминала</h3>
    </div>
</template>

<style scoped>
h3 {
    font-size: 1.2rem;
}

div.full-size {
    width: 100%;
    height: 100vh;
}

div.container {
    padding: 2rem;
}
</style>