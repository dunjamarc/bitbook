import React from 'react';



const Pagination = (props) => {
    return (
        <ul className="pagination center">
            <li className="disabled"><a><i className="material-icons">chevron_left</i></a></li>
            {props.value.map((el, i) => {
                //console.log(props);
                
                return <li className="waves-effect" key={i}  onClick={() => {props.action(`?$skip=${5 * i}&$top=5&$orderby=Id desc`)}}><a>{i + 1}</a></li>
            })
            }
            <li className="waves-effect"><a><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination;
