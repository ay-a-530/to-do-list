document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addTodoButton = document.getElementById('addTodoButton');
    const todoList = document.getElementById('todoList');

    // ToDo追加関数
    const addTodo = () => {
        const todoText = todoInput.value.trim(); // 前後の空白を削除

        if (todoText === '') {
            alert('タスクを入力してください！');
            return;
        }

        const listItem = document.createElement('li');

        // タスクテキスト部分
        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;
        listItem.appendChild(todoSpan);

        // 完了/未完了の切り替え
        todoSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // アクションボタン（削除）
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x'; // 削除アイコンの代わり
        deleteButton.title = '削除';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });
        actionsDiv.appendChild(deleteButton);

        listItem.appendChild(actionsDiv);
        todoList.appendChild(listItem);

        todoInput.value = ''; // 入力フィールドをクリア
    };

    // 「追加」ボタンクリックでToDoを追加
    addTodoButton.addEventListener('click', addTodo);

    // EnterキーでもToDoを追加
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
