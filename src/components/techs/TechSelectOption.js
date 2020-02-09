import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs, setLoading } from "../../actions/techAction"


const TechSelectOption = ({ tech: {techs, loading} ,setLoading, getTechs }) => {
    useEffect(()=>{
        setLoading()
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null && techs.map(({id , firstName , lastName}) => (
            <option
                key={id}
                value={`${firstName} ${lastName}`}
            >
                {firstName} {lastName}
            </option>
        ))
    );
};

TechSelectOption.propTypes = {
    tech: PropTypes.object.isRequired,
    setLoading: PropTypes.func.isRequired,
    getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    tech: state.tech
});


export default connect(mapStateToProps,
    {
        getTechs,
        setLoading
    }
)(TechSelectOption);