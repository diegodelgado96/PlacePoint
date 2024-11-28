import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography, CircularProgress } from '@mui/material';

interface Location {
  code: number;
  name: string;
  image: string;
  creationDate: string;
}

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/locations', {
          headers: { api_key: 'your-secure-api-key' },
        });

        setLocations(response.data.data);
      } catch (err) {
        setError('Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <Grid 
			container 
			spacing={3} 
			sx={{
				paddingTop: 5, 
				paddingBottom: 5, 
				paddingLeft: 15, 
				paddingRight: 15}}
			>
      <Grid item xs={12}>
        <h1>Locations</h1>
      </Grid>
      <Grid container spacing={3}>
        {locations.map((location) => (
          <Grid item xs={12} sm={6} md={4} key={location.code}>
            <Card 
							sx={{ 
								position: 'relative', 
								height: '100%', 
								borderRadius: 10, 
								transform: 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)', // Escala la tarjeta al 105% al hacer hover
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Agrega sombra para resaltar
                },
							}}>
              <CardMedia
                component="img"
                height="200"
                image={location.image}
                alt={location.name}
                sx={{
                  objectFit: 'cover',
                  filter: 'brightness(50%)', // Darkens the image for better text contrast
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 2,
                  color: 'white',
                  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
                }}
              >
                <Typography variant="h6">{location.name}</Typography>
                <Typography variant="body2">Created: {location.creationDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Locations;
