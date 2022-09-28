import { createStore } from 'vuex'

import produtos from "./dataProdutos";
import mutacoes from "./mutacoes";

export default createStore( {
    state    : produtos,
    getters  : { },
    mutations: mutacoes,
    actions  : { },
    modules  : { }
  }
)
