import PropTypes from "prop-types";

const Form = ({ form, handleFormSubmit, handleInputChange, error }) => {
    return (
        <form className="form-card" onSubmit={ handleFormSubmit }>
            <input
                type="text"
                name="name"
                placeholder="Nombre Mascota"
                value={ form.name }
                onChange={ handleInputChange }
            />
            { error.name && <p className="error">{ error.error }</p> }
            <input
                type="number"
                name="age"
                placeholder="Edad"
                value={ form.age }
                onChange={ handleInputChange }
            />
            { error.age && <p className="error">{ error.error }</p> }
            <select name="gender" id="gender" value={ form.gender } onChange={ handleInputChange }>
                {/* Mejorar el onChange */ }
                <option value="">-- Seleccione --</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
            </select>
            { error.gender && <p className="error">{ error.error }</p> }
            <input
                type="date"
                name="date"
                placeholder="Dia de la cita"
                value={ form.date }
                onChange={ handleInputChange }
            />
            { error.date && <p className="error">{ error.error }</p> }
            <input
                type="text"
                name="owner"
                placeholder="Nombre del dueño"
                value={ form.owner }
                onChange={ handleInputChange }
            />
            { error.owner && <p className="error">{ error.error }</p> }
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
        gender: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
    error: PropTypes.object.isRequired,
};

export default Form