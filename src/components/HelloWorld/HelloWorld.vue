<template>
    <div>
        <h1>Hello {{ title }}</h1>
        <img src="../../assets/backpack.svg" alt="" />
    </div>
</template>

<script>
export default {
    props: ['title'],
};
</script>
