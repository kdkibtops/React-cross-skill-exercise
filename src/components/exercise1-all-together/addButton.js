import React from 'react';

export function AddButton(props) {
    return (
        <button onClick={props.OnAdd} disabled={props.isDisabled()}>Add</button>
    )
}