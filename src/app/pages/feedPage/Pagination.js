import React from 'react';

const Pagination = (props) => {
    return (
        <ul className="pagination center">
            <li className="disabled"><a><i className="material-icons">chevron_left</i></a></li>
            {props.value.map((el, i) => {

                return <li className="waves-effect" key={i} onClick={() => { props.action(`?$top=5&$skip=${5 * i}&$orderby=DateCreated desc`) }}><a>{i + 1}</a></li>
            })
            }
            <li className="waves-effect"><a><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination;
