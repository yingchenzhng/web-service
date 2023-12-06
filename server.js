//server.js

const express = require('express');
const axios = require('axios');
const path = require('path');
const dotenv = require('dotenv');
const { TheCatAPI } = require("@thatapicompany/thecatapi");

const app = express();
const PORT = process.env.PORT || 3004;

let cats = {
ABYSSINIAN : "abys",
AEGEAN : "aege",
AMERICAN_BOBTAIL : "abob",
AMERICAN_CURL : "acur",
AMERICAN_SHORTHAIR : "asho",
AMERICAN_WIREHAIR : "awir",
ARABIAN_MAU : "amau",
AUSTRALIAN_MIST : "amis",
BALINESE : "bali",
BAMBINO : "bamb",
BENGAL : "beng",
BIRMAN : "birm",
BOMBAY : "bomb",
BRITISH_LONGHAIR : "bslo",
BRITISH_SHORTHAIR : "bsho",
BURMESE : "bure",
BURMILLA : "buri",
CALIFORNIA_SPANGLED : "cspa",
CHANTILLY_TIFFANY : "ctif",
CHARTREUX : "char",
CHAUSIE : "chau",
CHEETOH : "chee",
COLORPOINT_SHORTHAIR : "csho",
CORNISH_REX : "crex",
CYMRIC : "cymr",
CYPRUS : "cypr",
DEVON_REX : "drex",
DONSKOY : "dons",
DRAGON_LI : "lihu",
EGYPTIAN_MAU : "emau",
EUROPEAN_BURMESE : "ebur",
EXOTIC_SHORTHAIR : "esho",
HAVANA_BROWN : "hbro",
HIMALAYAN : "hima",
JAPANESE_BOBTAIL : "jbob",
JAVANESE : "java",
KHAO_MANEE : "khao",
KORAT : "kora",
KURILIAN : "kuri",
LAPERM : "lape",
MAINE_COON : "mcoo",
MALAYAN : "mala",
MANX : "manx",
MUNCHKIN : "munc",
NEBELUNG : "nebe",
NORWEGIAN_FOREST_CAT : "norw",
OCICAT : "ocic",
ORIENTAL : "orie",
PERSIAN : "pers",
PIXIE_BOB : "pixi",
RAGAMUFFIN : "raga",
RAGDOLL : "ragd",
RUSSIAN_BLUE : "rblu",
SAVANNAH : "sava",
SCOTTISH_FOLD : "sfol",
SELKIRK_REX : "srex",
SIAMESE : "siam",
SIBERIAN : "sibe",
SINGAPURA : "sing",
SNOWSHOE : "snow",
SOMALI : "soma",
SPHYNX : "sphy",
TONKINESE : "tonk",
TOYGER : "toyg",
TURKISH_ANGORA : "tang",
TURKISH_VAN : "tvan",
YORK_CHOCOLATE : "ycho"
}


app.use(express.static('public'));

const theCatAPI = new TheCatAPI("live_WLG9aqIOZAkHLvXU4Fi9OyUkGBX89cc46yHdTP9aQpc53w0YE04r3DXdHs7FncbU");

app.get('/getCatImage', async (req, res) => {
  try {
    const breed = req.query.breed.toUpperCase();
    const whichBreed = cats[breed];

    const images = await theCatAPI.images.searchImages({
      limit: 6,
      breed_ids: whichBreed, 
    });
    
    console.log(images);
    res.json(images);
  } catch (error) {
    console.error('Error fetching cat images:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
