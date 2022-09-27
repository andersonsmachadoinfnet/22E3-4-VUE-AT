<template>
    <div class="container">
        <h1>Graduação em Engenharia de Software</h1>
        <img src="@/assets/INFNET-LOGO.png" alt="Logo da Instituição Infnet">
        <h2>{{disciplina}}</h2>
        <h3>Assessment AT</h3>
        <table class="table table-striped">
            <tbody>
                <tr><td>Aluno:</td><td>{{aluno}}</td></tr>
                <tr><td>Professor:</td><td>{{professor}}</td></tr>                
            </tbody>
        </table>
        <a @click="irParaPrincipal()" class="btn btn-primary">Iniciar</a>
    </div>
</template>
  
<script>
  export default {
    name: 'lvApresentacao',
    props: {
      aluno: String,
      disciplina: String,
      professor: String
    },
    methods: {
        irParaPrincipal() {
            this.$router.replace('/principal');    
        }    
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img {
    width: 30%;
    height: 30%;
  }
  </style>
  