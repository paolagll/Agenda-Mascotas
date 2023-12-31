import PropTypes from "prop-types";

const Card = ({ registration }) => {
    console.log(registration)
    return (
        <div className="registration-card">
            <h4><strong>Dueño:</strong> {registration.owner}</h4>
            <hr />
            <ul>
                <li><b>Nombre:</b> {registration.name}</li>
                <li><b>Edad:</b> {registration.ageYears} años {registration.ageMonths} meses</li>
                <li><b>Genero:</b> {registration.gender}</li>
                <li><b>Día de la cita:</b> {registration.date}</li>
            </ul>
        </div>
    )
}

Card.propTypes = {
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        ageYears: PropTypes.string.isRequired,
        ageMonths: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
};

export default Card;