const mongoose = require('mongoose')

const { Schema } = mongoose

const chatSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }, 
})

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat