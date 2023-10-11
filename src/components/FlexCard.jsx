import PropTypes from 'prop-types';
import styles from './FlexCard.module.css'

export default function Flexcard({data}) {
    return (
        <figure className={styles.card_box}>
            <p>{data.id}</p>
            <h3>{data.name}</h3>
        </figure>
    );
}

Flexcard.propTypes = {
    data: PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired
    })
  };