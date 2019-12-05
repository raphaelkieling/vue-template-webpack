<template>
    <div class="container">
        <h1>Home</h1>
        <div class="home-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, est ipsa. Nostrum suscipit ratione
            alias itaque! Placeat exercitationem cum pariatur, aperiam officia ratione corrupti ut inventore fuga id,
            quidem ea.
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
</style>
