import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Contacts = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(function() {
        fetch('https://playground.4geeks.com/contact/agendas/rarroyo')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'get_contacts', payload: {contactos: data.contacts }})
        })
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Mis Contactos</h1>
            <div className="contactos-container">
                {store.contactos ? store.contactos.map(contacto => (
                    <div className="contacto">
                        <div className="info-left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="..." />
                        </div>
                        <div className="info-contacto">
                            <div className="datos-personales">
                                <h5 className="nombre-contacto">{contacto.name}</h5>
                                <div className="info-secundaria">
                                    <p className="calle-contacto"><i className="fa-solid fa-location-dot"></i> {contacto.address}</p>
                                    <p className="tel-contacto"><i className="fa-solid fa-phone"></i> {contacto.phone}</p>
                                    <p className="email-contacto"><i className="fa-solid fa-envelope"></i> {contacto.email}</p>
                                </div>
                            </div>
                            <div className="acciones">
                                <p className="editar"><i className="fa-solid fa-pen-to-square"></i></p>
                                <p className="eliminar"><i className="fa-solid fa-x"></i></p>
                            </div>
                        </div>
                    </div>
                )) : "Cargando..."}
            </div>
        </div>
    );
}