const mongoose = require('mongoose')

const { Schema } = mongoose

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    users: [{ type: Schema.ObjectId, ref: 'User' }],
},
{
    versionKey: false,
})

const Chat = mongoose.model("Chat", chatSchema)

module.exports = Chat