<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  // data() {
  //   return {
  //     loadedPosts: {
  //       author: 'Maximilian',
  //       title: 'My awesome Post',
  //       content: 'Super amazing, thanks for that!',
  //       thumbnailLink: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
  //   }

  //   }
  // }
  asyncData(context) {
    // console.log(context)
  return axios.get('https://nuxt-blog-32e8d.firebaseio.com/posts/' + context.params.id + '.json')
  .then(res => {
    return {
      loadedPost: res.data
    }
  })
  .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      axios.put('https://nuxt-blog-32e8d.firebaseio.com/posts/' + context.params.id + '.json', editedPost)
      .then(res => console.log(res))
      .catch(e => console.log(e))
    }
  },
}
</script>