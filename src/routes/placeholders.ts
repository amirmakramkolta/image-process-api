import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  const placeholderWidth: string | null = req.query.width as string;
  const placeholderHeight: string | null = req.query.height as string;

  if (placeholderHeight == null || placeholderWidth == null) {
    res.send('Their is attribute(s) in query is missing');
  } else if (
    isNaN(parseInt(placeholderWidth)) ||
    isNaN(parseInt(placeholderHeight))
  ) {
    res.send('you typed attribute(s) wrong');
  } else {
    res.send(`
            <svg width="${placeholderWidth}" height="${placeholderHeight}">
            <rect x="0" y="0" width="${placeholderWidth}" height="${placeholderHeight}" style="fill:rgb(0,0,0);" />
            <text x="${parseInt(placeholderWidth) / 2}" y="${
      parseInt(placeholderHeight) / 2
    }" dominant-baseline="middle" text-anchor="middle" fill="white" >${placeholderWidth} x ${placeholderHeight}</text>
            Sorry, your browser does not support inline SVG.  
            </svg>
        `);
  }
});

export default route;
