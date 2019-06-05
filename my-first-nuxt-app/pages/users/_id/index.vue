<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate (data) {
    // console.log(data)
    // return true

    // return data.params.id == 1  userが1の場合のみ可　===にしちゃうと罰

    return /^\d+$/.test(data.params.id) 
    // idが数字のみ可
  },
  layout: 'users'
}
</script>