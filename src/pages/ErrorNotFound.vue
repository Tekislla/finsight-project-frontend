<template>
  <div class="fullscreen secondary-btn text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nada por aqui...
      </div>

      <q-btn
        class="main-btn q-mt-xl"
        unelevated
        to="/"
        label="Voltar para o início"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
