import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const { dispatch } = useGlobalReducer();

    function agregar(e) {
        e.preventDefault();
        fetch('https://playground.4geeks.com/contact/agendas/rarroyo/contacts', {
            method: 'POST',
            body: JSON.stringify({
                "name": document.getElementById('name').value,
                "email": document.getElementById('email').value,
                "phone": document.getElementById('phone').value,
                "address": document.getElementById('address').value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch({ type: 'create_contact', payload: { contacto: data } })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1 className="mt-5">Añadir Contactos</h1>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phone" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>

                <button type="submit" onClick={agregar} className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
}