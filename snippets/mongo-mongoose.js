const User = mongoose.model('User', {
    mobile_number: Number,
    firstName: String,
    lastName: String,
    vehicle: Array,
    email: String
});

// Find data using mobile_number then remove item from array[vehicle] and update firstName
const findOneAndUpdate = User.findOneAndUpdate({ mobile_number: '8562981231' }, { $pull: { vehicle: 'up33kk' }, firstName: 'Selena' })
findOneAndUpdate.then((err, data) => {
    console.log(err || data);
})

// Find data using mobile_number then push item to array[vehicle] and update firstName
const findOneAndUpdate = User.findOneAndUpdate({ mobile_number: '8562981231' }, { $push: { vehicle: 'up33kk' }, firstName: 'Selena' })
findOneAndUpdate.then((err, data) => {
    console.log(err || data);
})
