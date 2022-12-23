const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 2121

app.use(cors())

const artists = {
    'odumodublvck': {
        'name': 'unknown',
        'genre': 'Afro Drill',
        'albums': ['The Drop','Odiegwu','Time & Chance(Deluxe)','Anti-World Gangstars','T.A.B.S(To All Blvcksheep)'],
        'ep': 0,
        'location': 'Abuja based',
        'spotify monthly listeners': `80,152 monthly listeners`,
        'biggest hit': 'Dog Eat Dog'
    },
    'azanti': {
        'name': 'Nathan Ayomikun Otekalu-Aje',
        'genre': 'R&B/Afropop',
        'albums': ['Heart Parts & Nostalgia','Yp & Azanti,Vol.1'],
        'ep': ['Azanti'],
        'location': 'Canada based',
        'spotify monthly listeners': `132,886 monthly listeners`,
        'biggest hit': 'Caro'
    },
    'minz': {
        'name': 'Olúwadámilọ́lá Adédọlápọ̀ Amínù',
        'genre': 'Afropop',
        'albums': 0,
        'ep': 0,
        'location': 'Lagos based',
        'spotify monthly listeners': `227,378 monthly listeners`,
        'biggest hit': 'BDMN'
    },
    'young jonn': {
        'name': 'John Saviours Udomboso',
        'genre': 'Afropop/Afrobeats',
        'albums': 0,
        'ep': ['Love Is Not Enough, Vol.2'],
        'location': 'Lagos based',
        'spotify monthly listeners': `1,062,608 monthly listeners`,
        'biggest hit': 'Dada Remix'
    },
    'majeeed': {
        'name': 'Ekeh Chiaka Joseph',
        'genre': 'Afropop/AfroRnB',
        'albums': 0,
        'ep': ['Bitter Sweet'],
        'location': 'Lagos based',
        'spotify monthly listeners': `438,905 monthly listeners`,
        'biggest hit': 'Smile For Me'
    },
    'whoisakin': {
        'name': 'Akinola Akin',
        'genre': 'Afropop/AfroRnB',
        'albums': 0,
        'ep': ['Full Moon Weekends'],
        'location': 'Lagos based',
        'spotify monthly listeners': `13,281 monthly listeners`,
        'biggest hit': 'Space'
    },
    'aktheking': {
        'name': 'unknown',
        'genre': 'Hip-Hop/Rap',
        'albums': ['Jack of All Trades'],
        'ep': 0,
        'location': 'US based',
        'spotify monthly listeners': `1059 monthly listeners`,
        'biggest hit': 'Peace of mind'
    },
    'phaemous': {
        'name': 'Amaechi Chukwuemeka Bartholomew',
        'genre': 'Afropop/AfroRnB',
        'albums': ['PHÆWAY Vol. 1'],
        'ep': 0,
        'location': 'Abuja based',
        'spotify monthly listeners': `35,215 monthly listeners`,
        'biggest hit': 'Sapio-Medula'
    },
    'smada': {
        'name': 'Adams Olabode Michael',
        'genre': 'Alté/Afropop',
        'albums': 0,
        'ep': ['NÜNIVERSE'],
        'location': 'Lagos based',
        'spotify monthly listeners': `20,346 monthly listeners`,
        'biggest hit': 'Ye Anthem'
    },
    'pdstrn': {
        'name': 'Bennett Obeya',
        'genre': 'Hip-pop/Rap',
        'albums': 0,
        'ep': 0,
        'location': 'Lagos based',
        'spotify monthly listeners': `898 monthly listeners`,
        'biggest hit': 'No Home Training'
    },
    'riasean': {
        'name': 'Gloria Asene Enebi',
        'genre': 'Afropop/AfroRnB',
        'albums': 0,
        'ep': ['Love Station'],
        'location': 'Lagos based',
        'spotify monthly listeners': `162,290 monthly listeners`,
        'biggest hit': 'Lemonade'
    },
    'taves': {
        'name': 'unknown',
        'genre': 'Afropop/Afrobeats',
        'albums': 0,
        'ep': 0,
        'location': 'Ibadan based',
        'spotify monthly listeners': `3,630 monthly listeners`,
        'biggest hit': 'Long Time 2.0'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/artists', (request, response) => {
    response.json(artists)
})

app.get('/artists/:artistName', (request, response) => {
    const artistsName = request.params.artistName.toLowerCase()
    if(artists[artistsName]){
        response.json(artists[artistsName])
    }else{
        response.status(404).send(
            `<h1>Artist not found on the server</h1>
            <h2>Go to localhost:2121/artists</h2>`)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})