<template>
  <div id="app">
    <router-view/> 
  </div>
</template>
<script>
export default {
  created() {
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    console.log(sessionStorage.getItem("store"))
    console.log(this.$store.state)
    this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      
    
  },
};
</script>
<style  >
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100vw;
  height: 100vh;
}
</style>
