import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ id, country }) => (
  <Link className="countries" to={`/${id}`} key={id}>
    <div className="country">
      <h2 className="ea-country">{country}</h2>
    </div>
  </Link>
)


CountryCard.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CountryCard;