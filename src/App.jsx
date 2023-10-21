import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

import "./styles.scss";

function App() {
  const formInitialState = {
    name: "",
    age: "",
    gender: "",
    date: "",
    owner: ""
  }
  
  const [ error, setError ] = useState({});
  const [ form, setForm ] = useState(formInitialState);
  const [ mascotas, setMascotas ] = useState([]);

  const handleInputChange = (e) => {
    setForm({ ...form, [ e.target.name ]: e.target.value });
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    for (const key in form) {
      const element = form[ key ];
  
      if (!element) {
        setError({ [ key ]: !element, error: 'Este campo es obligatorio' })
        return
      }
     
    }

    fetch('http://localhost:8000/mascotas', {
      method: 'POST',
      body: JSON.stringify({
        id: window.crypto.randomUUID(),
        ...form
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    setForm(formInitialState);
    setError({})
  };

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch('http://localhost:8000/mascotas')
      const result = await response.json()
      setMascotas(result)
    }
    getPost()
  }, [ form ])

  return (
    <div className="app">
      <Form
        form={ form }
        handleFormSubmit={ handleFormSubmit }
        handleInputChange={ handleInputChange }
        error={ error }
      />
      <section className="section">
        { mascotas.map((registration) => (
          <Card
            key={ registration.id }
            registration={ registration }
          />
        )) }
      </section>
    </div>
  );
}

export default App;
