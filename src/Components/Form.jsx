import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error }) => {
    return (
        <form className="form-card" onSubmit={handleFormSubmit}>
            <img src='../../public/perro y gato.avif' alt='Perro y gato' />

            <section className="form-section">
            <h1>Crea tu cita</h1>
            <input
                type="text"
                name="name"
                placeholder="Nombre Mascota"
                value={form.name}
                onChange={handleInputChange}
            />
            {error.name && <p className="error">{error.error}</p>}
            <section className="edad">
                <h5>Edad:</h5>
                <input
                    type="number"
                    name="ageYears"
                    placeholder="Años"
                    value={form.ageYears}
                        onChange={ handleInputChange }
                        min={0}
                />
                {error.ageYears && <p className="error">{error.error}</p>}

                <input
                    type="number"
                    name="ageMonths"
                    placeholder="Meses"
                    value={form.ageMonths}
                        onChange={ handleInputChange }
                        min={ 0 }
                        max={11}
                />
                {error.ageMonths && <p className="error">{error.error}</p>}
            </section>
            <div className="genero">
                <input
                    type="radio"
                    id="masculino"
                    name="gender"
                    value="Masculino"
                    checked={form.gender === "Masculino"}
                    onChange={handleInputChange}
                />
                <label htmlFor="masculino">Masculino</label>

                <input
                    type="radio"
                    id="femenino"
                    name="gender"
                    value="Femenino"
                    checked={form.gender === "Femenino"}
                    onChange={handleInputChange}
                />
                <label htmlFor="femenino">Femenino</label>
            </div>
            {error.gender && <p className="error">{error.error}</p>}
            <input
                type="date"
                name="date"
                placeholder="Dia de la cita"
                value={form.date}
                onChange={handleInputChange}
            />
            {error.date && <p className="error">{error.error}</p>}
            <input
                type="text"
                name="owner"
                placeholder="Nombre del dueño"
                value={form.owner}
                onChange={handleInputChange}
            />
            {error.owner && <p className="error">{error.error}</p>}
            <button type="submit">Agendar cita</button>
            </section>
        </form>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ageYears: PropTypes.string.isRequired,
        ageMonths: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
    error: PropTypes.object.isRequired,
};

export default Form