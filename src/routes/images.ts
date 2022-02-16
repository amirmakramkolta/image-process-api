import express from 'express';
import fs from 'fs';
import sharp from 'sharp';

const routes = express.Router();

routes.use(express.static('public'));

routes.get('/', (req, res) => {
  const imgName = req.query.name as unknown as string;
  const imgWidth = req.query.width as string;
  const imgHeight = req.query.height as string;

  const newImgName = `${imgName}_${imgWidth}_${imgHeight}.jpg`;
  fs.access(`./public/thumbnails/${newImgName}`, (err) => {
    if (err) {
      fs.access(`./public/images/${imgName}.jpg`, (err) => {
        if (err) {
          res.send('file does not exist');
        } else {
          fs.readFile(`./public/images/${imgName}.jpg`, (err, data) => {
            if (err) throw err;
            sharp(data)
              .resize(parseInt(imgWidth), parseInt(imgHeight))
              .toFile(`./public/thumbnails/${newImgName}`);
            res.send(`<img src="/thumbnails/${newImgName}" />`);
          });
        }
      });
    } else {
      res.send(`<img src="/thumbnails/${newImgName}" />`);
    }
  });
});

export default routes;
