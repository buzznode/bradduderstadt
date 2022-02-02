import React, { FC, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Footer from '../components/Footer';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import { Todo } from '../models/models';

const TodoPage: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, completed: false }]);
      setTodo('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setCompletedTodos(complete);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='App'>
          <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </DragDropContext>
      <Footer />
    </>
  );
};

export default TodoPage;
