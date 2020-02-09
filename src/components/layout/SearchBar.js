import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs , setLoading } from "../../actions/logAction";


const SearchBar = ({searchLogs, setLoading })=>{
  const text = useRef('');


  const onChange = e => {
    setLoading();
    searchLogs(text.current.value);
  }
  
  return(
    <nav style={{ marginBottom : '30px'}} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search"placeholder="Search Logs" ref={text} onChange={onChange}/>
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};


searchLogs.propTypes ={
  searchLogs: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}


export default connect(null, {
  setLoading,
  searchLogs
})(SearchBar)