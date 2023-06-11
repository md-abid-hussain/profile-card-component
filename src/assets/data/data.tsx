const data = {
    name: "Victor Crest",
    age: 26,
    location: "London",
    followers: "80K",
    likes: "803K",
    photos: "1.4K"
}

export interface User {
    name: string,
    age: number,
    location: string,
    followers: string,
    likes: string,
    photos: string
}


export default data;