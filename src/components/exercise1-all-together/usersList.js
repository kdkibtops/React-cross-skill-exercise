import React from "react";
import { AddGameButton } from "./addGameButton";

export function UsersList(props) {
    return (
        <div>
            <table>
                <TableHeader showPlayed={props.showPlayed} />
                <TableBody users={props.users} showPlayed={props.showPlayed} OnAddGame={props.OnAddGame} />
            </table>
        </div>
    )

}


export function TableHeader(props) {
    return (
        <thead>
            <tr>
                <th>Username</th>
                {props.showPlayed ? <th>Games played</th> : null}
                <th></th>
            </tr>
        </thead>
    )
}

export function TableBody(props) {
    return (
        <tbody>
            {props.users.map((ele) => {
                return (
                    <tr key={ele.username}>
                        <td>{ele.username}</td>
                        {props.showPlayed ? <td>{ele.played}</td> : null}
                        <td><AddGameButton id={ele.username} OnAddGame={props.OnAddGame} /></td>
                    </tr>
                )
            })}
        </tbody>
    )

}