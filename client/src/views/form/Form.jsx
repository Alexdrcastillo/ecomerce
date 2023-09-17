import React, { useState } from 'react';
import NavBar from '../../components/navBar/Navbar';
import axios from "axios"

const Form = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",                
        image: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.title) formErrors.title = "El título es requerido";
        if (!formData.description) formErrors.description = "La descripción es requerida";
        if (!formData.price || isNaN(formData.price)) formErrors.price = "El precio debe ser un número";
        if (!formData.image) formErrors.image = "La imagen es requerida";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(formData);
            // Aquí puedes manejar el envío de tu formulario
            const envio = async () => {
               const envio = await axios.post(`http://localhost:4000/create`, formData)     
            }

            envio()

        }
    };

    const handleChange = (event) => {
        setFormData({   
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit} style={{marginTop: "400px"}}>
                <input type="text" name="title" onChange={handleChange} placeholder='title'/>
                {errors.title && <p>{errors.title}</p>}
                <input type="text" name="description" onChange={handleChange} placeholder='description'/>
                {errors.description && <p>{errors.description}</p>}
                <input type="text" name="price" onChange={handleChange}  placeholder='price'/>
                {errors.price && <p>{errors.price}</p>}
                <input type="text" name="image" onChange={handleChange} placeholder='image'/>
                {errors.image && <p>{errors.image}</p>}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
