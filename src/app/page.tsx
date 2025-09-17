import { Container, Typography, Button, Box, Card, CardContent, Grid } from '@mui/material'
import { Add as AddIcon, Explore as ExploreIcon, Build as BuildIcon } from '@mui/icons-material'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Welcome to MyApp
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          A modern Next.js application with Material-UI and reusable components
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
          <Button variant="contained" startIcon={<AddIcon />} size="large">
            Get Started
          </Button>
          <Button variant="outlined" startIcon={<ExploreIcon />} size="large">
            Explore Features
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Reusable Components
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built with high and low-level component architecture for maximum reusability and maintainability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Material-UI Integration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Seamlessly integrated with Material-UI for consistent design and theming capabilities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Responsive Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fully responsive navbar and components that adapt to different screen sizes automatically.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}