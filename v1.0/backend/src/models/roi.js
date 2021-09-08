const mongoose = require('mongoose')

const ROISchema = new mongoose.Schema({
    roiId:{
        type: String,
        required: true,
        unique: true
    },
    roi: {
        top: { type: String },
        left: { type: String },
        bottom: {type: String},
        right: {type: String}
    },
    extractionMethod: {
        type: String,
        enum: ["NUMERIC_CLASSIFICATION","CELL_OMR"]
    },
    classId:{
        type: String,
        required: true,
        trim: true
    },
    subject:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})


const ROI = mongoose.model('ROI', ROISchema)

module.exports = ROI