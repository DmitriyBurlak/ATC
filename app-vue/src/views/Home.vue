<template>

<div class="wrapper">
    <div class="header">
      <h1 class="title">1/2 Какая у вас АТС?</h1> 
    </div>
    <div class="main">
      <div class="main__columns">
        <div class="main__items">

        </div>
      </div> 
      <router-link class="main__button" tag="button" to="/two-page" :disabled="true">Перейти к следующему шагу <img src="../images/vector.png" alt=""></router-link>
      <!-- <button class="main__button" disabled></button> -->
    </div>
</div>

</template>


<script>
export default {
  name: 'Home',
}

</script>


<style lang="scss">

</style>