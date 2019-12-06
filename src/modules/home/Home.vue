<template>
    <div class="container">
        <div class="home-container">
            <img :src="img">
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const img = 'https://image.flaticon.com/icons/svg/2324/2324272.svg';
        return { img };
    },
};
</script>

<style>
.home-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.home-container img {
    height: 200px;
}
</style>
