import { Component } from "react";

export const profiles = [
    {
        id: 1,
        userID: '1',
        favoriteMovieID: '1',
    },
    {
        id: 2,
        userID: '2',
        favoriteMovieID: '1',
    },
    {
        id: 3,
        userID: '4',
        favoriteMovieID: '5',
    },
    {
        id: 4,
        userID: '5',
        favoriteMovieID: '2',
    },
    {
        id: 5,
        userID: '3',
        favoriteMovieID: '5',
    },
    {
        id: 6,
        userID: '6',
        favoriteMovieID: '4',
    },

];

export const users = {
    1: {
        id: 1,
        name: 'Jane Cruz',
        userName: 'coder',
    },
    2: {
        id: 2,
        name: 'Matthew Johnson',
        userName: 'mpage',
    },
    3: {
        id: 3,
        name: 'Autumn Green',
        userName: 'user123',
    },
    4: {
        id: 4,
        name: 'John Doe',
        userName: 'user123',
    },
    5: {
        id: 5,
        name: 'Lauren Carlson',
        userName: 'user123',
    },
    6: {
        id: 6,
        name: 'Nicholas Lain',
        userName: 'user123',
    },
};

export const movies = {
    1: {
        id: 1,
        name: 'Planet Earth 1',
    },
    2: {
        id: 2,
        name: 'Selma',
    },
    3: {
        id: 3,
        name: 'Million Dollar Baby',
    },
    4: {
        id: 4,
        name: 'Forrest Gump',
    },
    5: {
        id: 5,
        name: 'Get Out',
    },
};


// Class components
export class MovieUser extends Component {

    render() {
        const profiles_ = this.props.profiles;
        const users_ = this.props.users;
        const movies_ = this.props.movies;

        return (
            <div>
                <ul>{
                    profiles_.map(ele => {
                        return (
                            <li key={ele.id}>{users_[ele.userID].name}'s favorit movie is {movies_[ele.favoriteMovieID].name}</li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

}

export class MoviesList extends Component {

    render() {
        const usersObj = this.props.users;
        const usersArr = Object.entries(usersObj).map(ele => ele[1]);
        const moviesLiked = Object.entries(movies).map(mov => {
            return {
                name: mov[1].name,
                likedByUsers: usersArr.filter(ele => {
                    return profiles.filter(ele => {
                        return ele.favoriteMovieID === String(mov[1].id)
                    }).map(ele => Number(ele.userID)).includes(ele.id)
                }).map(ele => ele.name)
            }
        }
        );
        return (
            <div>
                {
                    moviesLiked.map(ele => {
                        return (
                            <Movie key={`movie:${ele.name}`} name={ele.name} likedByUsers={ele.likedByUsers} />
                        )
                    })
                }
            </div>
        )
    }
}

class Movie extends Component {
    render() {
        const name = this.props.name // String
        const likedByUsers = this.props.likedByUsers //Object[]
        if (likedByUsers.length > 0) {
            return (
                <div>
                    <h2 style={{ padding: '0 0 0 0.5em' }}>{name}</h2>
                    <LikedMovie key={`likedMovie:${name}`} likedByUsers={likedByUsers} />
                </div >
            )
        } else {
            return (<div>
                <h2 style={{ padding: '0 0 0 0.5em', display: 'inline' }}>{name}:</h2>
                <em style={{ color: 'red' }}>This movie is not liked by any user !!</em>
            </div >
            )
        }

    }
}

class LikedMovie extends Component {
    render() {
        const likedByUsers = this.props.likedByUsers
        return (
            <div>
                <p style={{ fontWeight: `bold`, padding: '0 0 0 1em' }}>Liked by:</p>
                <ul>
                    {
                        likedByUsers.map(ele => {
                            return <li key={ele}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


// Stateless functional Components
// More efficient than Class if it only returns
export function MovieUserFunction(props) {
    const profiles_ = props.profiles;
    const users_ = props.users;
    const movies_ = props.movies;
    return (
        <div>
            <ul>{
                profiles_.map(ele => {
                    return (
                        <li key={ele.id}>{users_[ele.userID].name}'s favorit movie is {movies_[ele.favoriteMovieID].name}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export function MoviesListFunction(props) {
    const usersObj = props.users;
    const usersArr = Object.entries(usersObj).map(ele => ele[1]);
    const moviesLiked = Object.entries(movies).map(mov => {
        return {
            name: mov[1].name,
            likedByUsers: usersArr.filter(ele => {
                return profiles.filter(ele => {
                    return ele.favoriteMovieID === String(mov[1].id)
                }).map(ele => Number(ele.userID)).includes(ele.id)
            }).map(ele => ele.name)
        }
    }
    );
    return (
        <div>
            {
                moviesLiked.map(ele => {
                    return (
                        <MovieFunction key={`movie:${ele.name}`} name={ele.name} likedByUsers={ele.likedByUsers} />
                    )
                })
            }
        </div>
    )
}
function MovieFunction(props) {

    const name = props.name // String
    const likedByUsers = props.likedByUsers //Object[]
    if (likedByUsers.length > 0) {
        return (
            <div>
                <h2 style={{ padding: '0 0 0 0.5em' }}>{name}</h2>
                <LikedMovieFunction key={`likedMovie:${name}`} likedByUsers={likedByUsers} />
            </div >
        )
    } else {
        return (<div>
            <h2 style={{ padding: '0 0 0 0.5em', display: 'inline' }}>{name}:</h2>
            <em style={{ color: 'red' }}>This movie is not liked by any user !!</em>
        </div >
        )
    }

}
function LikedMovieFunction(props) {
    const likedByUsers = props.likedByUsers
    return (
        <div>
            <p style={{ fontWeight: `bold`, padding: '0 0 0 1em' }}>Liked by:</p>
            <ul>
                {
                    likedByUsers.map(ele => {
                        return <li key={ele}>{ele}</li>
                    })
                }
            </ul>
        </div>
    )
}



