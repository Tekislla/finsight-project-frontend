<template>
  <q-layout>
    <div class="bg-silver fullscreen text-white text-center q-pa-md flex flex-center">
      <div>
        <q-tabs
          v-model="tab"
        >
        <q-tab-panels class="bg-silver" v-model="tab" animated transition-next="scale" transition-prev="scale">
          <q-tab-panel name="login">
            <login-form></login-form>
          </q-tab-panel>
          <q-tab-panel name="cadastro">
            <cadastro-form></cadastro-form>
          </q-tab-panel>
        </q-tab-panels>
        </q-tabs>
        <p>{{ displayText }}<a class="clickable-link" @click="changeTab"><strong>{{ displayTextAction }}</strong></a></p>
      </div>
    </div>
  </q-layout>
  </template>

<script>
import { defineComponent, ref } from 'vue'
import LoginForm from 'components/LoginForm.vue'
import CadastroForm from 'src/components/CadastroForm.vue'

export default defineComponent({
  name: 'IndexLayout',
  components: {
    LoginForm,
    CadastroForm
  },
  methods: {
    changeTab () {
      if (this.tab === 'login') {
        this.tab = 'cadastro'
        this.displayText = 'Já tem uma conta? '
        this.displayTextAction = 'Faça login!'
      } else {
        this.tab = 'login'
        this.displayText = 'Ainda não tem uma conta? '
        this.displayTextAction = 'Registre-se!'
      }
    }
  },

  data () {
    return {
      displayText: 'Ainda não tem uma conta? ',
      displayTextAction: 'Registre-se!',
      tab: ref('login')
    }
  }
})

</script>
<style>
</style>
