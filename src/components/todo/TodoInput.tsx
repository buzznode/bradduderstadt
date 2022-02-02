import { FC, useRef } from 'react';
import '../../styles/styles.css';

interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: FC<TodoInputProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='todos__input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter a task'
        className='todos__input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='todos__input__submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
