interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
}


const song = 'New song';
; // destructuring nested object

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
//details > author
const { author } = details;

//details > author
//const {details: {author}} = audioPlayer


//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author);

//const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//console.log ('Personaje 3: ', dbz[2]);

const [x, y, z = 'not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3: ', z);


export { };