<template>
<!-- <nuxt-link :to="'posts/' + 1" class="post-preview"> -->
<!-- <nuxt-link :to="'posts/' + id" class="post-preview"> -->
<nuxt-link :to="postLink" class="post-preview">
        <article>
          <!-- <div class="post-thumbnail" style="background-image: url('https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg')"></div> -->
          <div class="post-thumbnail"
          :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
          <div class="post-content">
            <!-- <h1>Post Title</h1> -->
            <h1>{{ title }}</h1>
            <!-- <p>Preview Text</p> -->
            <p>{{ previewText }}</p>
            <p></p>
          </div>
        </article>
      </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props:  {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style>

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
