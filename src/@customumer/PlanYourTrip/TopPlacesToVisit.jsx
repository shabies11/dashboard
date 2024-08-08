// MUI Imports
import Grid from '@mui/material/Grid'

import LandscapceCard from '@/@customumer/LandscapceCard'
import PotraitCard from '@/@customumer/PotraitCard'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const TopPlacesToVisit = () => (
  <Card className=' p-10'>
    {/* Heading at the top right */}

    <Grid container spacing={12}>
      {/* <Grid item xs={12}>
        <SliderWithAddButton />
      </Grid> */}

      {/* Heading at the top right */}
      <Grid item xs={12}>
        <Grid container justifyContent='flex-start'>
          <Typography variant='h4' align='left' style={{ marginBottom: '20px' }}>
            Top attractions and activities
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <LandscapceCard />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <LandscapceCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LandscapceCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <LandscapceCard />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <LandscapceCard />
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent='flex-end'>
          <Button variant='contained' color='primary' style={{ marginTop: '20px' }}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Card>
)

export default TopPlacesToVisit
