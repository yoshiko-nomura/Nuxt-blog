<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
      ...mapGetters({
      loadedPosts: 'post/loadedPosts'
    })
  },
  created() {
    this.$store.dispatch('post/setPosts', this.loadedPosts)
    // console.log(this.$store.getters.post.loadedPosts)
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>