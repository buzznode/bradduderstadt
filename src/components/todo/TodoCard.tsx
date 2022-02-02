import { FC, useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from '../../models/models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import '../../styles/styles.css';

interface TodoCardProps {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoCard: FC<TodoCardProps> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: todoText } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__card ${snapshot.isDragging ? 'todos__drag' : ''}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <input
              ref={inputRef}
              className='todos__card--text'
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
          ) : todo.completed ? (
            <s className='todos__card--text'>{todo.todo}</s>
          ) : (
            <span className='todos__card--text'>{todo.todo}</span>
          )}

          <div>
            <span
              className='todos__icon'
              onClick={() => {
                if (!edit && !todo.completed) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className='todos__icon' onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className='todos__icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default TodoCard;
