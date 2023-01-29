const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Partida = new Schema({
    jogador1: {
        type: String,
        required: true
    },
    jogador2: {
        type: String,
        required: true 
    },
    ptsJogador1: {
        type: Number
    },
    ptsJogador2: {
        type: Number
    },
    rodada1: {
        type: String,
    },
    rodada2: {
        type: String,
    },
    rodada3: {
        type: String,
    },
    rodada4: {
        type: String,
    },
    rodada5: {
        type: String,
    },
    rodada6: {
        type: String,
    },
    rodada7: {
        type: String,
    },
    rodada8: {
        type: String,
    },
    rodada9: {
        type: String,
    },
    rodada10: {
        type: String,
    },
    rodada11: {
        type: String,
    },
    data: {
        type: Date,
        default: Date.now()
    },
    ganhador: {
        type: String
    },
    cartasUsadas: {
        type: String
    }

})

mongoose.model("partidas", Partida)