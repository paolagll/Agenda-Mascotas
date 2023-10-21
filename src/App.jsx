import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

import "./styles.scss";

function App() {
  const formInitialState = {
    name: "",
    ageYears: "",
    ageMonths: "",
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
    const currentDate = new Date();

    for (const key in form) {
      const element = form[ key ];
  
      if (!element) {
        setError({ [ key ]: !element, error: 'Este campo es obligatorio' })
        return
      }
     
    }

    const enteredDate = new Date(form.date);

    if (enteredDate <= currentDate) {
      setError({ date: true, error: 'La fecha debe ser posterior a la actual' });
      return;
    }

    const ageYears = parseInt(form.ageYears, 10) || 0;
    const ageMonths = parseInt(form.ageMonths, 10) || 0;
  
    if (ageYears <= 0 && ageMonths <= 0) {
      setError({ ageYears: true, error: 'La edad debe ser mayor a 0' });
      return;
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
      <h1>Crear tu cita</h1>
      <Form
        form={ form }
        handleFormSubmit={ handleFormSubmit }
        handleInputChange={ handleInputChange }
        error={ error }
      />
      <h2>Citas Creadas</h2>
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
