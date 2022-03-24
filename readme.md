# CapitalMovies API

## Steps to run server

In the project directory, you can run:

### First run `npm install` in backend directory

### Second start backend using `npm run server`

### `npm run server`
With this command backend and API service will start at localhost:8000/api/

### API Documenation ###

### Authentication Routes

### 1.POST request to signup:

POST at localhost:8000/api/signup

with data
```
{
    "email":"sample@gamil.com"
    "password":"samplepassword"
}
```
### Respone
```
{
    "message": "Signup success! Please signin."
}
```
### 2.POST request to signin:

POST at localhost:8000/api/signin

with data
```
{
    "email":"sample@gamil.com"
    "password":"samplepassword"
}
```
### Respone
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjNTU1ODk3MmVjODk5ZmIxNjcwMWEiLCJpYXQiOjE2NDgxMjE3NTksImV4cCI6MTY0ODIwODE1OX0.7QTLMQPSui5DKNJWmkw4QziED_nhjTeRdKvz6A2D5A8",
    "user": {
        "_id": "623c5558972ec899fb16701a",
        "email": "jhavh9@gmail.com"
    }
}
```

### Movie Routes to get popular, latest, favourites,movies

### 3. Get request to fetch popular movies

GET at localhost:8000/api/movies

### Respone
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
            "genre_ids": [
                16,
                10751,
                35,
                14
            ],
            "id": 508947,
            "original_language": "en",
            "original_title": "Turning Red",
            "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
            "popularity": 8712.351,
            "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
            "release_date": "2022-03-10",
            "title": "Turning Red",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 917
        },
        .........
}
```
### 4. Get request to fetch latest movies based on release date

GET at localhost:8000/api/movies/latest

### Respone
```
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 950051,
            "original_language": "pt",
            "original_title": "Sujeito Oculto",
            "overview": "In an attempt to escape from a writer’s block, acclaimed novelist Max Madureira moves to a house near a small, isolated and awkward village. It doesn’t take long for the ideas to come out, but not quite the way he expected: as the writer feels like he’s been living among stories — and not people —, he comes across the mysterious emergence of typed pages in his desk, supposedly written by the previous resident of the house. That’s enough to make Max doubt about his creativity, his sanity and even his own existence.",
            "popularity": 14.76,
            "poster_path": "/bGKGfS5d6NQrCxjQPy60KqguslQ.jpg",
            "release_date": "2022-03-24",
            "title": "Subject",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        .........
}
```

### 5. POST to add movies to favourites

POST at localhost:8000/api/movies/favourites

Authorization Bearer Token
```
Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjNTU1ODk3MmVjODk5ZmIxNjcwMWEiLCJpYXQiOjE2NDgxMjI1ODIsImV4cCI6MTY0ODIwODk4Mn0.ro1Skar86LOFJ2aiD2IpkFyfQLVL26iml0pIIW1g8nM
```

Body
```
{
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 950051,
    "original_language": "pt",
    "original_title": "Sujeito Oculto",
    "overview": "In an attempt to escape from a writer’s block, acclaimed novelist Max Madureira moves to a house near a small, isolated and awkward village. It doesn’t take long for the ideas to come out, but not quite the way he expected: as the writer feels like he’s been living among stories — and not people —, he comes across the mysterious emergence of typed pages in his desk, supposedly written by the previous resident of the house. That’s enough to make Max doubt about his creativity, his sanity and even his own existence.",
    "popularity": 14.76,
    "poster_path": "/bGKGfS5d6NQrCxjQPy60KqguslQ.jpg",
    "release_date": "2022-03-24",
    "title": "Subject",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
}
```

### Respone
```
{
    "title": "Subject",
    "id": 950951,
    "overview": "In an attempt to escape from a writer’s block, acclaimed novelist Max Madureira moves to a house near a small, isolated and awkward village. It doesn’t take long for the ideas to come out, but not quite the way he expected: as the writer feels like he’s been living among stories — and not people —, he comes across the mysterious emergence of typed pages in his desk, supposedly written by the previous resident of the house. That’s enough to make Max doubt about his creativity, his sanity and even his own existence.",
    "poster_path": "/bGKGfS5d6NQrCxjQPy60KqguslQ.jpg",
    "release_date": "2022-03-24",
    "vote_average": 0,
    "vote_count": 0,
    "popularity": 14.76,
    "original_language": "pt",
    "original_title": "Sujeito Oculto",
    "backdrop_path": null,
    "postedBy": "623c5558972ec899fb16701a",
    "_id": "623c5b7e972ec899fb167022",
    "createdAt": "2022-03-24T11:52:30.345Z",
    "updatedAt": "2022-03-24T11:52:30.345Z",
    "__v": 0
}
```
### 6. GET to fetch favourites Movies

GET at localhost:8000/api/movies/favourites

Add token from signin to fetch 

Authorization Bearer Token
```
Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjNjNTU1ODk3MmVjODk5ZmIxNjcwMWEiLCJpYXQiOjE2NDgxMjI1ODIsImV4cCI6MTY0ODIwODk4Mn0.ro1Skar86LOFJ2aiD2IpkFyfQLVL26iml0pIIW1g8nM
```
### Respone
```
{
[
    {
        "_id": "623c5b7e972ec899fb167022",
        "title": "Subject",
        "id": 950951,
        "overview": "In an attempt to escape from a writer’s block, acclaimed novelist Max Madureira moves to a house near a small, isolated and awkward village. It doesn’t take long for the ideas to come out, but not quite the way he expected: as the writer feels like he’s been living among stories — and not people —, he comes across the mysterious emergence of typed pages in his desk, supposedly written by the previous resident of the house. That’s enough to make Max doubt about his creativity, his sanity and even his own existence.",
        "poster_path": "/bGKGfS5d6NQrCxjQPy60KqguslQ.jpg",
        "release_date": "2022-03-24",
        "vote_average": 0,
        "vote_count": 0,
        "popularity": 14.76,
        "original_language": "pt",
        "original_title": "Sujeito Oculto",
        "backdrop_path": null,
        "postedBy": {
            "_id": "623c5558972ec899fb16701a"
        },
        "createdAt": "2022-03-24T11:52:30.345Z",
        "updatedAt": "2022-03-24T11:52:30.345Z",
        "__v": 0
    },
    ......
]
}
```
### ENV Sample

```
NODE_ENV=development
PORT=8000
DATABASE=mongodb+srv://<username>:<Password>@cluster0.sbxx9.mongodb.net/capitalMovies?retryWrites=true&w=majority
JWT_SECRET=ALBGE3758T5YU54YU757YTUG38749YU10943OREIK
API_KEY=9883fdbd6efwefwe42g24w2fw
CLIENT_URL=http://localhost:3000 //frontend address for avoiding cors error

```

