import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../../models/models';
import TodoCard from './TodoCard';
import '../../styles/styles.css';

interface TodoListProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className='container todos__container'>
      <Droppable droppableId='TodosList'>
        {(provided, snapshot) => (
          <div
            style={{
              minHeight: `${
                snapshot.isDraggingOver ? (todos.length + 1) * 100 : 0
              }px`,
            }}
            className={`todos ${
              snapshot.isDraggingOver ? 'todos__dragactive' : ''
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Active Tasks</span>
            {todos?.map((todo, index) => (
              <TodoCard
                key={todo.id}
                index={index}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div
            style={{
              minHeight: `${
                snapshot.isDraggingOver ? (todos.length + 1) * 100 : 0
              }px`,
            }}
            className={`todos todos__remove ${
              snapshot.isDraggingOver ? 'todos__dragcomplete' : 'todos__remove'
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <TodoCard
                key={todo.id}
                index={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
