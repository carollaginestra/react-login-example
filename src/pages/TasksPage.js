import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

const TASKS = [
    {
        id: 1,
        titulo: 'Learn React',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2,
        titulo: 'Learn JavaScript',
        descricao: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: 3,
        titulo: 'Learn React-Router',
        descricao: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    },
];

class TasksPage extends Component {
    render() {
        const tasksLinks = TASKS.map((task, index) => {
        return (
            <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
                {task.titulo}
            </Link>
            </li>
        )
        })
        return (
        <div>
            <h1>Tasks</h1>
            <ul>
                {tasksLinks}
            </ul>
            <Route
            path="/tasks/:taskId"
            render={props => {
                const taskId = Number(props.match.params.taskId);
                const task = TASKS.find(tar => tar.id === taskId);
                return (
                <div>
                    {task.descricao}
                </div>
                )
            }}
            />
        </div>
        )
    }
}

export default TasksPage;
