
```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.push({
                id: state.length,
                text: action.payload,
                completed: false,
            });
        },
        toggleTask(state, action) {
            const task = state.find(t => t.id === action.payload);
            task.completed = !task.completed;
        },
        removeTask(state, action) {
            const index = state.findIndex(t => t.id === action.payload);
            state.splice(index, 1);
        },
        clearCompleted(state) {
            state.filter(t => !t.completed);
        },
    }
});

export const { addTask, toggleTask, removeTask, clearCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;

// TasksComponent.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, removeTask, clearCompleted } from './tasksSlice';

export default function TasksComponent() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const onAdd = () => {
        dispatch(addTask(inputValue));
        setInputValue('');
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onAdd}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        {task.text}
                        <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
        </div>
    );
}
```

---

| Ошибка                                           | Объяснение                                                                                                              | Как исправить                                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **1. Некорректное создание уникального `id`**    | Использование длины массива в качестве id приводит к дублированию при удалениях и добавлениях.                          | Генерировать уникальный id через `nanoid()` (есть в RTK) или UUID.                     |
| **2. Возможная ошибка при `toggleTask`**         | Если задача не найдена (`undefined`), попытка присвоить свойство вызовет ошибку.                                        | Проверять, что задача найдена, прежде чем изменять.                                    |
| **3. `removeTask` может удалить не тот элемент** | Если `findIndex` вернёт -1, `splice(-1, 1)` удалит последний элемент массива.                                           | Проверять, что индекс найден (`!== -1`) перед вызовом `splice`.                        |
| **4. `clearCompleted` ничего не меняет**         | `filter` возвращает новый массив, но в reducer его не возвращают, а просто вызывают — state не изменится.               | Нужно либо `return state.filter(...)`, либо мутировать state с помощью `splice`/цикла. |
| **5. Непроверенный ввод в `addTask`**            | Можно добавить пустую строку, что ухудшает UX.                                                                          | Добавить проверку на пустой ввод перед добавлением.                                    |
| **6. Нет мемоизации селектора `useSelector`**    | В больших приложениях без мемоизации могут быть лишние ререндеры.                                                       | Использовать `createSelector` из Reselect.                                             |
| **7. Обработчики и рендеры не оптимизированы**   | Например, `onChange` в checkbox создаётся на каждый рендер, что может вызывать лишние перерисовки дочерних компонентов. | Мемоизировать колбеки через `useCallback`.                                             |
