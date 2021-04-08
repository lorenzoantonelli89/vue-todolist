function initVue() {
    new Vue({
        el: '#app',
        data: {
            'todos': [],
            'todo': ''
        },
        methods: {
            addTodo: function () {
                this.todos.push(this.todo);
                this.todo = '';
            },
            deleteTodo: function () {
                
            }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);