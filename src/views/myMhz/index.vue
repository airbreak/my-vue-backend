<!--Created by jiangjianming@bmkp.cn on 2018/5/21.-->
<template>
    <div class="wrapper-box">
        <ul>
          <li v-for="item in arr">
            {{item}}
          </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      arr: []
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.arr = ['A','B','C','D']
    })
  }
}
</script>

<style lang="sass" scoped>

</style>
