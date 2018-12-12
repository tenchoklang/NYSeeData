import React from 'react'
import {connect} from 'react-redux';
import {filterBy} from '../actions/filters'

const Input = (props)=>(
    <div>
        <select value='test' onChange={ (e)=>{
            console.log(e.target.value);
            const filterVal = e.target.value;
            props.dispatch(filterBy(filterVal));
        }}>
            <option value="Felony">Felony</option>
            <option value="Misdemeanor">Misdemeanor</option>
            <option value="Violation">Violation</option>
        </select>
    </div>
)


export default connect()(Input);