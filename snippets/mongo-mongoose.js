// Find data using mobile_number then remove item from array[vehicle] and update firstName
const findOneAndUpdate = User.findOneAndUpdate({ mobile_number: '8562981231' }, { $pull: { vehicle: 'up33kk' }, firstName: 'Selena' })
findOneAndUpdate.then((err, data) => {
    console.log(err || data);
})
