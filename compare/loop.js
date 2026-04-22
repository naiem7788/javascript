const mobile = {
    brand: 'samsung',
    price: 20000,
    color: 'black',
    isUsed: false,
    features: ['camera', 'fingerprint sensor', 'face recognition']
}
for (const prop in mobile) {
    console.log(prop, mobile[prop])
}