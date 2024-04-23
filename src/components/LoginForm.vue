<template>
  <q-card bordered class="q-pa-lg">
    <q-img
        src="~assets/logo-filled-white.png"
        style="height: 100px;
        width: 300px"
    />
    <q-card-section>
      <q-form class="q-gutter-md">
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
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn v-on:click="login()" size="lg" class="main-btn full-width" label="Entrar" no-caps/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { store } from 'src/store'

export default defineComponent({
  name: 'LoginForm',

  data () {
    return {
      email: '',
      senha: '',
      isPwd: ref(true)
    }
  },

  methods: {
    login () {
      store.commit('setUser', {
        email: this.email,
        senha: this.senha,
        token: '1234567'
      })
      this.$router.push('/app')
    }
  },

  mounted () {
    if (store.getters.isLogged) {
      this.$router.push('/app')
    }
  }
})
</script>

<style>
</style>
