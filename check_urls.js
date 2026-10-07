const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18efc2291?w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "https://images.unsplash.com/photo-1583608205776-bfd35f6d9f83?w=800&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
  "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  "https://images.unsplash.com/photo-1497215898120-1d00c3b01859?w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
  "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80"
];

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(`BROKEN [${res.statusCode}]: ${url}`);
      } else {
        // console.log(`OK: ${url}`);
      }
      resolve();
    }).on('error', (e) => {
      console.log(`ERROR: ${url}`);
      resolve();
    });
  });
};

async function run() {
  const promises = urls.map(checkUrl);
  await Promise.all(promises);
  console.log('Done checking!');
}
run();
