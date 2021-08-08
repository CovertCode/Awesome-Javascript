const Firestore = require('@google-cloud/firestore');
const admin = require('firebase-admin');

const db = new Firestore({
    projectId: 'my-blog-c6b38',
    keyFilename: './firebase.config.json',
});

const collectionRef = db.collection('collection-name');

async function write() {
    await collectionRef.add({
        uid: 'PL0sss01',
        name: 'Location 02',
        cords: new admin.firestore.GeoPoint(30.719171683969886, 76.75744674083612),
        capacity: 100,
        priceRegular: 30,
        priceWeekend: 40,
    });
}
write()

async function read() {
    const snapshot = await collectionRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
    snapshot.forEach(doc => {
      console.log(doc.data());
    });
}
read()
