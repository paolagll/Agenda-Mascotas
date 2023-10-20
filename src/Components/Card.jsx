import PropTypes from "prop-types";

const Card = ({ registration }) => {
    return (
        <div className="registration-card">
            <h2>{registration.name}</h2>
            <h4>{registration.age}</h4>
            <h4>{registration.gender}</h4>
            <h4>{registration.date}</h4>
            <h4>{registration.owner}</h4>
        </div>
    )
}

Card.propTypes = {
    registration: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
};

Card.defaultProps = {
    registration: {
        age: "20"
    }
}

export default Card;