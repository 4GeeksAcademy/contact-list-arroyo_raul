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

    case 'create_contact':
      const { contacto } = action.payload

      return {
        ...store,
        contactos: [...store.contactos, contacto]
      };
    default:
      throw Error('Unknown action.');
  }    
}
