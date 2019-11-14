<template>
    <div>
        <div class="hero is-fullheight is-flex is-vcentered">
            <div v-tilt class="card hello-world-box">
                <div class="card-content">
                    <img src="@/assets/images/backpack.svg" />
                    <h1 align="center">{{ description }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        description: {
            type: String,
            required: true,
        },
    },
    setup() {
        return {};
    },
};
</script>

<style scoped>
.hello-world-box {
    max-width: 200px;
}

.is-vcentered {
    align-items: center;
    justify-content: center;
}
</style>
