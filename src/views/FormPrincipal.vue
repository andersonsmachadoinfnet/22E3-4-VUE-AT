<template>
    <LvMenu menuTitle ="Assessment"/>
    <LvCardsProdutos/>
</template>
  
<script>
  // @ is an alias to /src
import LvMenu from '@/components/lvMenu.vue';
import LvCardsProdutos from '@/components/lvCardsProdutos.vue';
  
  export default {
    name: 'FormPrincipal',
    components: {
    // lvMenu,
    LvMenu,
    LvCardsProdutos
    // LvCadastro
}
}
</script>