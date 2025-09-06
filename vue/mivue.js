var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!',
    contador : 1
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Usted cargó esta página el ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Construir algo increíble' },
      { text: 'Nuevo Elemento' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hola Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hola Vue!'
  }
})


// Define un nuevo componente llamado todo-item
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetales' },
      { id: 1, text: 'Queso' },
      { id: 2, text: 'Carne' },
      { id: 3, text: 'Semillas' },
      { id: 4, text: 'Frutas' }  
    ]
  }
})