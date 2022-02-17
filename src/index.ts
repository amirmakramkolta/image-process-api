import express from 'express';
import imageRoute from './routes/images';
import placeholderRoute from './routes/placeholders';

const app = express();
const port = 5000;

app.use(express.static('public'));
app.use('/image', imageRoute);
app.use('/placeholder', placeholderRoute);

app.listen(port, (): void => {
  console.log(`listen to port: http://localhost:${port}`);
});
export default app;
