<template>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <LvApresentacao 
        aluno="Anderson Soares Miler Machado"
        diciplina="Frameworks Front-end e conexão com Back-end [22E3_4]"
        professor="Gioliano Barbosa Bertoni"
      />
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import LvApresentacao from '@/components/lvApresentacao.vue';
  
  export default {
    name: 'BemVindo',
    components: {
      LvApresentacao
  }
}
</script>