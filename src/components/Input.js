import React from 'react'
import {connect} from 'react-redux';
import {filterBy} from '../actions/filters'
import {startGetData} from '../actions/data'


const Input = (props)=>(
    <div>
        <select value='test' onChange={ (e)=>{
            console.log(e.target.value);
            const filterVal = e.target.value;
            const {lat, lon} = props.location;
            //get the data for given location based on the filter
            props.dispatch(startGetData(lat, lon, filterVal));
            props.dispatch(filterBy(filterVal));
        }}>
            <option value="FELONY">Felony</option>
            <option value="MISDEMEANOR">Misdemeanor</option>
            <option value="VIOLATION">Violation</option>
        </select>
    </div>
)


const mapStateToProps = (state)=>({
    location: state.location
});

export default connect(mapStateToProps)(Input);