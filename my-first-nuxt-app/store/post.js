import axios from "axios"
import Vuex from 'vuex'

// create a store
export const state = () => ({
  loadedPosts: []
});

// getters
export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
};

// mutations
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  }
};

// actions
export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios.get('https://nuxt-blog-32e8d.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        vuexContext.commit('setPosts', postsArray)
      });
  },     
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts',  posts)
  }
};
