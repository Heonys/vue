import Vue from "vue";
import Vuex from "vuex";
import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemList,
    fetchList,
} from "../api/index";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        list: [],

        user: {},
        item: [],
    },
    getters: {
        fetchedItem(state) {
            return state.item;
        },
        fetchedUser(state) {
            return state.user;
        },
    },
    mutations: {
        SET_NEWS(state, payload) {
            state.news = payload;
        },
        SET_ASK(state, payload) {
            state.ask = payload;
        },
        SET_JOBS(state, payload) {
            state.jobs = payload;
        },
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_ITEM(state, payload) {
            state.item = payload;
        },
        SET_LIST(state, payload) {
            state.list = payload;
        },
    },
    actions: {
        FETCH_NEWS(context) {
            return fetchNewsList()
                .then((res) => {
                    context.commit("SET_NEWS", res.data);
                    return res;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async FETCH_ASK(context) {
            try {
                const res = await fetchAskList();
                context.commit("SET_ASK", res.data);
                return res;
            } catch (error) {
                console.log(error);
            }

            // .then((res) => {
            //     context.commit("SET_ASK", res.data);
            //     // this.users = res.data;
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
        },
        FETCH_JOBS(context) {
            return fetchJobsList()
                .then((res) => {
                    context.commit("SET_JOBS", res.data);
                    // this.users = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        FETCH_USER(context, username) {
            return fetchUserInfo(username)
                .then((res) => {
                    context.commit("SET_USER", res.data);
                    // this.users = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        FETCH_ITEM(context, userId) {
            return fetchItemList(userId)
                .then((res) => {
                    context.commit("SET_ITEM", res.data);
                    // this.users = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        FETCH_LIST(context, pageName) {
            return fetchList(pageName)
                .then((res) => {
                    context.commit("SET_LIST", res.data);
                    // this.users = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});

export default store;
