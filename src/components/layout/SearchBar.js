import React from "react";
import { connect } from "react-redux";
import { searchLogs , setLoading } from "../../actions/logAction";


const SearchBar = ({ log, searchLogs, setLoading })=>{
    return(
        <nav style={{ marginBottom : '30px'}} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search"/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
};

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, {
  setLoading,
  searchLogs
})(SearchBar)