// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Consulta() {
    const [id, setid] = useState('');
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const [category, setcategory] = useState('');


    const handleBuscar = async () => {
        console.log('Iniciando búsqueda...');
        try {
            const response = await fetch(`https://api.vercel.app/blog`);
            const data = await response.json();

            if (data) {
                setid(data.id);
                settitle(data.settitle)
                setauthor(data.author);
                setcategory(data.category);

            } 
        } catch (error) {
            console.error('Error al consultar', error);
        }
    };

    return (
        <div>
            <h1>Consulta</h1>
            <div>
                <label>id:</label>
                <input type="text" value={id} disabled />
            </div>
            <div>
                <label>title:</label>
                <input type="text" value={title} disabled />
            </div>
            <div>
                <label>author:</label>
                <input type="text" value={author} disabled />
            </div>
            <div>
                <label>category:</label>
                <input type="text" value={category} disabled />
            </div>
            <div>
                <button onClick={handleBuscar}>Buscar</button>
            </div>
        </div>
    );
}

export default Consulta;
