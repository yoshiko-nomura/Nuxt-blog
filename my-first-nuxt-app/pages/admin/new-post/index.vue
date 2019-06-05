<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post('https://nuxt-blog-32e8d.firebaseio.com/posts.json', {
          ...postData,
          updatedDate: new Date()
      })
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  }
  // data() {
  //   return {
  //     editedPost: {
  //       author: '',
  //       title: '',
  //       thumbnailLink: '',
  //       content: ''
  //     }
  //   }
  // },
  // methods: {
  //   onSave() {
  //     // Save the post
  //     console.log(this.editedPost);
  //   },
  //   onCancel() {
  //     // Navigate back
  //     this.$router.push('/admin');
  //   }
  // }
}
</script>

<style>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>