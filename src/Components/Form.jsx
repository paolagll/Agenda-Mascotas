import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error }) => {
    return (
        <form className="form-card" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre Mascota"
                value={form.name}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Edad"
                value={form.age}
                onChange={handleInputChange}
            />
            <select name="gender" id="gender" value={form.gender} onChange={handleInputChange}>  
            {/* Mejorar el onChange */}
                <option value="male">Masculino</option> 
                <option value="female">Femenino</option>
            </select>
            <input
                type="date"
                name="date"
                placeholder="Dia de la cita"
                value={form.date}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="owner"
                placeholder="Nombre del dueño"
                value={form.owner}
                onChange={handleInputChange}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Agendar cita</button>
        </form>
    )
}

Form.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
    error: PropTypes.string.isRequired,
};

export default Form