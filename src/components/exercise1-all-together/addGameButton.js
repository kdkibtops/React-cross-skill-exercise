import React from "react";

export function AddGameButton(props) {
    return (
        <button onClick={() => props.OnAddGame(props.id)}>+ game</button>
    )
}