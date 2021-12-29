import React, { useRef } from "react"

const NewTodo: React.FC<{onAddToDo: (text: string) => void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value
    // !.value = confident this can't be null
    // ?.value = if value present, store value | null will be stored 
      // so type will be 'string' | null
    
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddToDo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;