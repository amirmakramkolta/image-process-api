import express from 'express';
import imageRoute from './routes/images';

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use('/image', imageRoute);

app.listen(port, () => {
  console.log(`listen to port: http://localhost:${port}`);
});
export default app;
