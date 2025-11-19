export const initialStore=()=>{
  return{
    message: null,
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_contacts':
      const { contactos } = action.payload

      return{ 
        ...store,
        contactos: contactos || [] 
      };

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
