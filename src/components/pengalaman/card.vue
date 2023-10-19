<template>
  <div class="">
    <div class="bg-[#1d4838] rounded-2xl w-96 h-14 font-bold mb-5">
      <p class="text-white text-xl p-3">
        {{ title }} <font-awesome icon="['fa', 'faInfoCircle']" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
