<template>
  <q-card bordered class="q-pa-lg">
          <q-img
              src="~assets/logo-filled-white.png"
              style="height: 100px;
              width: 300px"
          />
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input square filled v-model="nome" type="text" label="Nome" />
        <q-input square filled v-model="cpf" type="text" label="CPF" mask="###.###.###-##" :maxlength="14" @input="validateCPF" />
        <q-input square filled v-model="email" type="email" label="E-mail" />
        <q-input square filled label="Senha" v-model="senha" :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              v-show="this.senha.length > 0"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input square filled label="Confirme sua senha" v-model="confirmaSenha" :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
            <q-icon
              v-show="this.senha.length > 0"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn v-on:click="cadastrar()" size="lg" class="main-btn full-width" label="Cadastrar" no-caps/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  data () {
    return {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      confirmaSenha: '',
      isPwd: ref(true)
    }
  },

  methods: {
    cadastrar () {
      this.validateCPF()
      alert(this.cpf)
    },
    validateCPF () {
      this.cpf = this.cpf.replace(/\D/g, '')
    }
  }
})

</script>
<style>
</style>
