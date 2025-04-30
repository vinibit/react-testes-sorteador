import React, { useState } from 'react';

interface FormProps {
    onSubmit: (name: string) => void;
}

const Form: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (name.trim()) {
            // onSubmit(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Insira o nome dos participantes"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button type="submit" disabled={true}>
                Submit
            </button>
        </form>
    );
};

export default Form;