import Grid from '@mui/material/Grid'


import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import LandscapceCard from '@/@customumer/LandscapceCard'
import PotraitCard from '@/@customumer/PotraitCard'

const YouMayAlsoBeInterestedIn = () => (
  <Card className=' p-10'>
    {/* Heading at the top right */}

    <Grid container spacing={5}>
      {/* <Grid item xs={12}>
        <SliderWithAddButton />
      </Grid> */}

      {/* Heading at the top right */}
      <Grid item xs={12}>
        <Grid container justifyContent='flex-start'>
          <Typography variant='h4' align='left' style={{ marginBottom: '20px' }}>
            You may also be interested in ...
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={6} md={6} lg={3}>
        <LandscapceCard />
      </Grid>

      <Grid item xs={6} md={6} lg={3}>
        <LandscapceCard />
      </Grid>
      <Grid item xs={6} md={6} lg={3}>
        <LandscapceCard />
      </Grid>
      <Grid item xs={6} md={6} lg={3}>
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

export default YouMayAlsoBeInterestedIn
