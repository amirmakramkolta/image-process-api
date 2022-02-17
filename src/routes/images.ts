import express, { Router } from 'express';
import fs from 'fs';
import imageProcess from './../utilities/imageUtilities';

const routes: Router = express.Router();

routes.use(express.static('public'));

routes.get('/get-image', (req, res): void => {
  const imgName: string | null = req.query.name as unknown as string;
  const imgWidth: string | null = req.query.width as string;
  const imgHeight: string | null = req.query.height as string;

  if (imgHeight == null || imgWidth == null || imgName == null) {
    res.status(400);
    res.send('Their is attribute(s) in query is missing');
  } else if (isNaN(parseInt(imgHeight)) || isNaN(parseInt(imgWidth))) {
    res.status(400);
    res.send('you typed attribute(s) wrong');
  } else {
    const newImgName = `${imgName}_${imgWidth}_${imgHeight}.jpg`;
    fs.access(
      `./public/thumbnails/${newImgName}`,
      async (err): Promise<void> => {
        if (err) {
          fs.access(`./public/images/${imgName}.jpg`, (err): void => {
            if (err) {
              res.status(404);
              res.send('file does not exist');
            } else {
              fs.readFile(
                `./public/images/${imgName}.jpg`,
                async (err, data): Promise<void> => {
                  if (err) {
                    console.log(err);
                  }
                  imageProcess
                    .createResisedImage(
                      data,
                      parseInt(imgWidth),
                      parseInt(imgHeight),
                      `./public/thumbnails/${newImgName}`
                    )
                    .then((data) => {
                      console.log(data);
                    });
                  res.status(200);
                  const tag = await imageProcess.imgInHtml(newImgName);
                  res.send(tag);
                }
              );
            }
          });
        } else {
          res.status(200);
          const tag = await imageProcess.imgInHtml(newImgName);
          res.send(tag);
        }
      }
    );
  }
});

export default routes;
