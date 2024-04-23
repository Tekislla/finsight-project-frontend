<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="menu-btn"
        />

        <q-toolbar-title>
        <q-img
          src="~assets/logo-filled-black.png"
          class="header-logo"
        />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-dragging
      bordered
      elevated
    >
      <q-list>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item
          clickable
          tag="a"
          @click="logout()"
          >
          <q-item-section
            avatar
          >
            <q-icon :name="'exit_to_app'" class="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="label-title">Sair</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { store } from 'src/store'
import EssentialLink from 'components/EssentialLink.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const essentialLinks = ref([])
    const leftDrawerOpen = ref(false)

    const loadMenuList = async () => {
      try {
        const response = await import('src/config/menu-list.json')
        essentialLinks.value = response.default
      } catch (error) {
        console.error('Erro ao carregar os links do menu:', error)
      }
    }

    loadMenuList()

    return {
      essentialLinks,
      leftDrawerOpen,

      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logout () {
        // TODO: Ajustar logout para funcionar e redirecionar sem precisar recarregar a página
        store.commit('logout')
        this.$router.go()
      }
    }
  },

  mounted () {
    if (!store.getters.isLogged) {
      this.$router.push('/')
    }
  }
})
</script>
<style>
</style>
