<template>
    <div>
        <section>
            <user-profile>
                <router-link :to="`/user/${fetchedItem.user}`" slot="username">
                    {{ fetchedItem.user }}
                </router-link>

                <div slot="time">
                    {{ "Posted " + fetchedItem.time_ago }}
                </div>
            </user-profile>
        </section>

        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>

        <!--  댓글  -->
        <section>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
import UserProfile from "@/components/UserProfiles.vue";
import { mapGetters } from "vuex";
// import UserProfiles from "@/components/UserProfiles.vue"

export default {
    created() {
        const userItem = this.$route.params.id;
        this.$store.dispatch("FETCH_ITEM", userItem);
    },
    computed: {
        ...mapGetters(["fetchedItem"]),
    },
    components: {
        UserProfile,
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
