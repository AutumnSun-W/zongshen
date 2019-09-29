<template>
<div>
    <div class="foter">
      <p>账户余额：<span>￥0.00</span></p>
      
  </div>
  <van-pagination v-model="currentPage" :page-count="2" mode="simple" />
  </div>
</template>
<script>
export default {
  name:'balance',
  data() {
    return {
      currentPage: 1,
    }
  },
};
</script>
<style  >
.foter {
  padding: 10px;
  color: #999;
  font-size: 14px;
  border-bottom:1px solid #ccc;
  margin-bottom:4vh;  
}

.foter span{
  font-weight: bold;
  color: #dd5b53;
}
.van-pagination .van-pagination__item{
  background:#ca151d;
  color:#fff
}

</style>
