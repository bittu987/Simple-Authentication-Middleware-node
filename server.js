import express from "express";
import axios from "axios";
const app = express();
import { accesslogs } from './Middleware.js';

const port =  2020;

app.use(accesslogs);

app.get('/fetch-image', async (req, res) => {
  const imageUrl = 'https://random-image-pepebigotes.vercel.app/api/random-image';

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);

    res.send(buffer);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).send('Error fetching image');
  }
});

app.listen(port, () => {
  console.log('Server is running on port 2020');
});