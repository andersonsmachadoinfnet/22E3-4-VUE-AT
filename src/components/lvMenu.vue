<template>
    <!-- <div id="navbar"> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
            <div class="container">

                <a class="navbar-brand" href="/">
                    <img src="../assets/INFNET-LOGO.png" alt="e-marceneiro" width="48" height="48">
                    {{menuTitle}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav px-3">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/principal">Lista de Itens</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/cadastro">Cadastrar</router-link> -->
                            <a class="nav-link" @click="irParaCadastrar">Novo Produto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- </div> -->
</template>

<script>
export default {
  props: {
        menuTitle: {}
  },
  methods: {
    irParaCadastrar () {
        this.$store.state.alteraIndice(0);
        this.$router.replace('/cadastro');
    }
  }
}
</script>

<style scoped>
.navbar.navbar-dark.bg-dark {
    background-color: #181848 !important;
}

</style>
    