import React from 'react';
import {connect} from 'react-redux';

const Table = (props) => (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Borough</th>
                    <th>Offense Description</th>
                    <th>Suspect Race</th>
                </tr>
                {props.data.map((value)=>{
                    const borough = value.boro_nm;
                    const offDesc = value.ofns_desc;
                    const suspRace = value.susp_race;
                    return (
                        <tr>
                            <td>{borough}</td>
                            <td>{offDesc}</td>
                            <td>{suspRace}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) =>({
    data: state.data
})


export default connect(mapStateToProps)(Table);