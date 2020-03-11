let app = new Vue({
  el: "#app",
  data: {
      title: 'ToDos',
      todos: [
        { text: 'option 1', done: false, id: Date.now() },
        { text: 'option 2', done: false, id: Date.now() + 1 }
      ]
    },
  watch:{
    todos: function(NEWtodos) {
      localStorage.setItem('todo' , JSON.stringify(this.todos))

    }
  },
  methods: {
    addTodo(event) {
      const text = event.target.value
      this.todos.push({text, done: false, id: Date.now()})
      event.target.value = ''
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },      
    checkTodo(todo){
      todo.done = !todo.done
      localStorage.setItem('todo' , JSON.stringify(this.todos))
    },
  },
  mounted() {
  this.todos=JSON.parse(window.localStorage.getItem('todo'))
  },
});