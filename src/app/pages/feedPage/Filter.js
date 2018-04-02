import React from 'react';

const Filter = (props) => {
    return (
            <select name="filter" id="filter" onChange={props.value}>
                <option value="all">All Posts</option>
                <option value="video">Video</option>
                <option value="image">Image</option>
                <option value="text">Text</option>
            </select>
    )
}

export default Filter;