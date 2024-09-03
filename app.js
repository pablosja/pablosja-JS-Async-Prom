async function fetchTodos() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function logTitles() {
    const todos = await fetchTodos();
    todos.forEach(todo => {
        console.log(todo.title);
    });
}

async function generateTable() {
    const todos = await fetchTodos();
    const todosTable = document.getElementById('todosTable');

    let tableHTML = `<table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Priority</th>
                                <th>Completed?</th>
                            </tr>
                        </thead>
                        <tbody>`;

    todos.forEach(todo => {
        tableHTML += `<tr>
                        <td>${todo.title}</td>
                        <td>${todo.priority}</td>
                        <td>${todo.isDone ? 'Yes' : 'No'}</td>
                      </tr>`;
    });

    tableHTML += `</tbody></table>`;

    todosTable.innerHTML = tableHTML;
}

logTitles();
generateTable();
