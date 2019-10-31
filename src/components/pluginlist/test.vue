<template>
  <div>
    <div v-for="(i,index) in arr">
      <div v-for="(item,ind) in i">
        {{item.price*count}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return { arr: [
        [{ price: 2 ,count:2}],
        [{ price: 10 ,count:100}],
        [{ price: 999,countr:999 }]
      ], count: 2 }
  }
}

</script>
