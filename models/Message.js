const mongoose = require('mongoose')

const { Schema } = mongoose

const messageSchema = new Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    authorEmail: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
},{
    versionKey: false,
})

const Message = mongoose.model("Message", messageSchema)

module.exports = Message