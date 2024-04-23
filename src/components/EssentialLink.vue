<template>
  <q-item
    clickable
    tag="a"
    @click="goToLink(link)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" class="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="label-title">{{ title }}</q-item-label>
      <q-item-label class="label-caption">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToLink (link) {
      this.$router.push(link)
    }
  }
})
</script>
<style>
.label-title {
  font-weight: bold;
  color: var(--main-davy);
}

.label-caption {
  font-size: 14px;
  color: var(--main-davy);
}

.icon {
  color: var(--main-davy);
}
</style>
