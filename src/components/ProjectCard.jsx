import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({children, img_src,  title}) {
  return (
    <Card sx={{ width: 345 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image = {img_src}
        className='h-50'
      />
      <CardContent className='h-45'>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {children}
        </Typography>
      </CardContent>
      <CardActions>
        <Button hidden className='w-full' size="small" sx={{ color: 'text.secondary' }}> <p>más información</p></Button>
      </CardActions>
    </Card>
  );
}