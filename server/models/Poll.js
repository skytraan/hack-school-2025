const mongoose = require('mongoose');

// mongoose.connect(config.DB_URL)
// .then (() => console. log('Connected to MongoDB'))
// .catch ((err) => console.error ('Error connecting to MongoDB: ', err));

const OptionSchema = new mongoose.Schema(
    {
        option: String,
        count: Number,
    },
    {_id: true}
);

const PollSchema = new mongoose.Schema(
    {
    ownerId:{
            type: String,
            required: true,
        },
        title: {
            type:String,
            required: true,
        },
        description: String,
        options: [OptionSchema],
        totalVotes: Number,
    },
    {id: true}
);

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;