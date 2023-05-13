"use client";
import styles from './page.module.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next13 + Typescript + MUI + Redux ToolKit + Firebase Authentication Boilerplate
        </Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
      <Link href="/redux">Test Redux</Link>
      <br />
      <Link href="/firebase">Test Firebase</Link>
    </Container>
  )
}
