const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true
    },

    address:{ 
        type: String,
    },

    phone:{ 
        type: String,
        required: true,
        unique:  true
    },

    
    email:{ 
        type: String,
        required: true,
        },

    dob:  { 
        type: Date,
        required: true,
        },

    joining_date:{ 
        type: Date,
        required: true,
        },    
  
     status: { 
        type: String,
        required: true,
        },      
});

module.exports = mongoose.model('student', studentSchema)