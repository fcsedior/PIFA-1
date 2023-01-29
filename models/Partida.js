const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Partida = new Schema({
    idPartida: {
        type: String,
        required: true
    },
    jogador: {
        type: String,
        required: true
    },
    oponente: {
        type: String,
        required: true 
    },
    lineMinha: {
        type: String
    },
    lineOponente: {
        type: String
    },
    ptsJogador: {
        type: Number,
        default: 0
    },
    ptsOponente: {
        type: Number,
        default: 0
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