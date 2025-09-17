import { Container, Typography, Button, Box } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with Material-UI
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome to your new app!
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Get Started
        </Button>
      </Box>
    </Container>
  )
}