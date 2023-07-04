//GET
export const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      return [];
    }
  };

//POST
  export const createTodo = async (todo) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating todo:', error);
      return null;
    }
  };