import React from "react";

export function ToggleButton(props) {
    return (
        <div>
            <button
                onClick={props.OnToggle}
            >{
                    props.showPlayed ? `Hide the Number of Games Played` : `Show the Number of Games Played`
                }
            </button>
        </div>

    )

}