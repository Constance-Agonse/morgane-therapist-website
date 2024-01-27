<template>
  <div class="max-w-[386px] bg-white flex flex-col items-center rounded-md p-6 gap-7">
    <div class="text-center">
      <i class="fas fa-calendar-check"></i>
      <h3>Title</h3>
    </div>
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto iure culpa, assumenda, earum consequatur id
      possimus qui tempora quisquam laboriosam natus. Molestiae quas assumenda blanditiis vel ipsum enim quis sint?</div>
  </div>
</template>

<script>
export default {
  name: 'SmallCard',
  props: {
    msg: String
  },
  data() {
    return {
    }
  }

}
</script>

