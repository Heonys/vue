<template>
    <div>
        <section>
            <div class="user-container">
                <div>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-description">
                    <slot name="username"> </slot>
                    <slot name="time"> </slot>
                    <slot name="karma"> </slot>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        },
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
