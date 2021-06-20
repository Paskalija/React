import React from 'react';
import {Movie} from './Movie';

let movie1={
    name:'The Meg',
    genre:'Action',
    date:2018,
    plot:'When the members of an underwater research facility are under threat owing to a 75-foot prehistoric shark, Jonas Taylor, a deep-sea diver, is hired to save them.',
    link: <a href='https://www.imdb.com/title/tt4779682/' target='_blank'>Link</a>,
    image:<img src='https://static.wikia.nocookie.net/listofdeaths/images/5/5c/The_Meg_poster.jpg/revision/latest?cb=20201008194809' height='300px' width='100px'></img>
}
let movie2={
    name:'Forrest Gump',
    genre:'Drama',
    date:1994,
    plot:'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.',
    link:<a href='https://www.imdb.com/title/tt0109830/' target='_blank'>Link</a>,
    image:<img src='https://images-na.ssl-images-amazon.com/images/I/81xTx-LxAPL._SL1500_.jpg'></img>
}
let movie3={
    name:'Fight Club',
    genre:'Drama',
    date:1999,
    plot:'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    link:<a href='https://www.imdb.com/title/tt0137523/' target='_blank'>Link</a>,
    image:<img src='https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'></img>
}
let movie4={
    name:'Nobody',
    genre:'Action',
    date:2021,
    plot:'Hutch Mansell fails to defend himself or his family when two thieves break into his suburban home one night. The aftermath of the incident soon strikes a match to his long-simmering rage. In a barrage of fists, gunfire and squealing tires, Hutch must now save his wife and son from a dangerous adversary -- and ensure that he will never be underestimated again.',
    link:<a href='https://www.imdb.com/title/tt7888964/' target='_blank'>Link</a>,
    image:<img src='https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UY1200_CR64,0,630,1200_AL_.jpg'></img>,
}
let movie5={
    name:'The Shawshank Redemption',
    genre:'Action',
    date:1994,
    plot:'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.',
    link:<a href='https://www.imdb.com/title/tt0111161/'>Link</a>,
    image:<img src='https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg'></img>
}

export function App(){
    return(
        <Movie movie={Movie}/>
    )
}