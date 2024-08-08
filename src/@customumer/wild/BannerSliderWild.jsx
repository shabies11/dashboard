// MUI Imports
import Grid from '@mui/material/Grid'

import SliderWithAddButtonWild from '@/@customumer/wild/SliderWithAddButtonWild'
import PotraitCard from '@/@customumer/PotraitCard'
import LandscapceCard from '@/@customumer/LandscapceCard'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const BannerSliderWild = () => (
  <Card className=' p-10'>
    {/* Heading at the top right */}

    <Grid container spacing={12}>
      {/* Heading at the top right */}
      <Grid item xs={12}>
        <Grid container justifyContent='flex-start'>
          <Typography variant='h4' align='left' style={{ marginBottom: '20px' }}>
            Banner Slider
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SliderWithAddButtonWild />
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

export default BannerSliderWild
