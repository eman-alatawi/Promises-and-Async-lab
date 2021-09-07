//promises with async
const myPromises = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 50) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, it fails.'));
});


