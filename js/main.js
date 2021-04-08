function initVue() {
    new Vue({
        el: '#app',
        data: {
            'todos': [],
            'todo': '',
        },
        methods: {
            addTodo: function () {
                if (!this.todo == '') {
                    this.todos.push(this.todo);
                }
                this.todo = '';
            },
            deleteTodo: function (index) {
                this.todos.splice(index, 1)
            }
        }
    });
}

function init() {
    initVue();
}

document.addEventListener('DOMContentLoaded', init);