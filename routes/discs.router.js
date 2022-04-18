const express = require("express");
const router = express.Router();

const discs = [
  {
    id: 1,
    name: 'Kind Of Blue',
    artist: 'Davis',
    genre: 'Jazz Modal',
    release_year: 1995,
    label: 'Columbia',
    price: 12.99,
    cover: 'https://m.media-amazon.com/images/I/71dQKN2UEfL._SY355_.jpg',
    url: 'https://open.spotify.com/album/1weenld61qoidwYuZ1GESA'
  },
  {
    id: 2,
    name: 'Saxophone Colossus',
    artist: 'Sonny Rollins',
    genre: 'Hard bop',
    release_year: 1956,
    label: 'Prestige',
    price: 12.99,
    cover: 'https://m.media-amazon.com/images/I/71RTWKj1EDL._SY355_.jpg',
    url: 'https://open.spotify.com/album/0yodD8uAkAT5UmrlF2xy97?highlight=spotify:track:0zQE77yszbyv61M4NboU2u'
  },
  {
    id: 3,
    name: 'Mingus Ah Um',
    artist: 'Charles Mingus',
    genre: 'Jazz Modal',
    release_year: 1995,
    label: 'Columbia',
    price: 13.99,
    cover: 'https://upload.wikimedia.org/wikipedia/en/6/65/Mingus_Ah_Um_-_Charles_Mingus.jpg',
    url: 'https://open.spotify.com/album/7pojWP7x9uEFSJgw765khA'
  },
]

router.get('/', (req, res) => {
  res.json(discs)
})


module.exports = router

