<template>
  <q-page class="main-page flex">
    <div class="container text-center q-pa-md flex flex-center">
      <q-card class="container-card q-pa-lg">
        <q-card-section class="main-section q-gutter-md">

          <!-- Card Saldo Atual -->
          <q-card bordered class="main-card q-pa-lg">
            <q-card-section>
              <q-item-label><strong>Compromissos</strong></q-item-label>
              <q-item-label>5</q-item-label>
            </q-card-section>
          </q-card>

          <!-- Card Entradas -->
          <q-card bordered class="main-card q-pa-lg">
            <q-card-section>
              <q-item-label><strong>Finalizados</strong></q-item-label>
              <q-item-label>3</q-item-label>
            </q-card-section>
          </q-card>

          <!-- Card Saídas -->
          <q-card bordered class="main-card q-pa-lg">
            <q-card-section>
              <q-item-label><strong>Pendentes</strong></q-item-label>
              <q-item-label>2</q-item-label>
            </q-card-section>
          </q-card>
        </q-card-section>

        <!-- Card de pesquisa e botões -->
        <q-card-section class="q-gutter-md">
          <q-input
            outlined
            v-model="search"
            placeholder="Pesquisar"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="btn-card q-gutter-md">
          <q-btn
            v-on:click="registrarCompromisso()"
            unelevated
            size="md"
            label="Registrar compromisso"
            no-caps
            class="black-btn"
          />
        </q-card-section>

        <!-- Tabela de finanças -->
        <q-card-section>
          <q-table
          :rows="rows"
          :columns="columns"
          row-key="nome"
          no-data-label="Nenhum registro encontrado"
          >
          <template v-slot:body-cell-acoes="props">
            <q-td :props="props">
            <q-btn-group unelevated>
              <q-btn  class="secondary-btn" size="md" round icon="mode_edit" @click="editarRegistro(props.row)">
                <q-tooltip>Editar</q-tooltip>
              </q-btn>
              <q-btn class="main-btn" size="md" round icon="delete" @click="excluirRegistro(props.row)">
                <q-tooltip>Excluir</q-tooltip>
              </q-btn>
              <q-btn class="black-btn" size="md" round icon="check" @click="alterarSituacaoRegistro(props.row)">
                  <q-tooltip>Finalizar</q-tooltip>
              </q-btn>
            </q-btn-group>
            </q-td>
          </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MeusCompromissos',

  data () {
    return {
      columns: [
        {
          name: 'nome',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.nome,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'data',
          required: true,
          label: 'Data',
          align: 'left',
          field: row => row.data,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'valor',
          required: true,
          label: 'Valor',
          align: 'left',
          field: row => row.valor,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'categoria',
          required: true,
          label: 'Categoria',
          align: 'left',
          field: row => row.categoria,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'pago',
          required: true,
          label: 'Pago?',
          align: 'left',
          field: row => row.tipo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'acoes',
          label: 'Ações',
          align: 'right'
        }
      ],
      rows: [
        {
          nome: 'nome1',
          tipo: 'tipo1',
          data: 'data1',
          valor: 'valor1',
          categoria: 'categoria1'
        },
        {
          nome: 'nome2',
          tipo: 'tipo2',
          data: 'data2',
          valor: 'valor2',
          categoria: 'categoria2'
        },
        {
          nome: 'nome3',
          tipo: 'tipo3',
          data: 'data3',
          valor: 'valor3',
          categoria: 'categoria3'
        },
        {
          nome: 'nome4',
          tipo: 'tipo2',
          data: 'data2',
          valor: 'valor2',
          categoria: 'categoria2'
        },
        {
          nome: 'nome5',
          tipo: 'tipo2',
          data: 'data2',
          valor: 'valor2',
          categoria: 'categoria2'
        }
      ]
    }
  },

  methods: {
    registrarCompromisso () {
      alert('Registrar compromisso')
    },
    editarRegistro (row) {
      alert(`Editar registro ${row.nome}`)
    },
    excluirRegistro (row) {
      alert(`Excluir registro ${row.nome}`)
    },
    alterarSituacaoRegistro (row) {
      alert(`Finalizar registro ${row.nome}`)
    }
  }
})

</script>

<style>
.container {
  width: 90%;
}

.container-card {
  width: 100%;
  height: 100%;
  border-style: none;
  box-shadow: none;
}

.main-card {
  width: 200px;
}

.btn-card {
  text-align: left;
}

.table-card {
  border-style: none;
  box-shadow: none;
  width: 100%;
}

.main-section {
  display: flex;
  justify-content: center;
}

.main-page {
  justify-content: center;
}
</style>
