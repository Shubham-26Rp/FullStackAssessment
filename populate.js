Schema = mongoose.Schema;

schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    lists: [{
        list: {
            type: Schema.ObjectId,
            require: true,
            ref: "List"
        },
        allocations: [{
            type: Number,
            required: true
        }]
    }],
    createdAt: {
        type: Date,
        "default": Date.now
    },
    updatedAt: {
        type: Date
    }
});

exports = module.exports = mongoose.model("Portfolio", schema);

lists: [{
    type: Schema.ObjectId,
    require: true,
    ref: "List"
}]
populate('lists.list');