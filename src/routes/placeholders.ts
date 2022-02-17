import express, { Router } from 'express';
import placeholderProcess from '../utilities/placeholderUtilities';

const route: Router = express.Router();

route.get('/get-placeholder', (req, res): void => {
  const placeholderWidth: string | null = req.query.width as string;
  const placeholderHeight: string | null = req.query.height as string;

  if (placeholderHeight == null || placeholderWidth == null) {
    res.status(400);
    res.send('Their is attribute(s) in query is missing');
  } else if (
    isNaN(parseInt(placeholderWidth)) ||
    isNaN(parseInt(placeholderHeight))
  ) {
    res.status(400);
    res.send('you typed attribute(s) wrong');
  } else {
    res.status(200);
    res.send(
      placeholderProcess.placeholderInHtml(placeholderWidth, placeholderHeight)
    );
  }
});

export default route;
