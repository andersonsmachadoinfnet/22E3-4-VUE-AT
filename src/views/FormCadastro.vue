<template>
    <LvMenu menuTitle ="Assessment"/>
    <LvCadastro/>
</template>
  
<script>
  // @ is an alias to /src
import LvMenu from '@/components/lvMenu.vue';
import LvCadastro from '@/components/lvCadastro.vue';
  
  export default {
    name: 'FormCadastro',
    components: {
    LvMenu,
    LvCadastro
}
}
</script>