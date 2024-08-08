// MUI Imports
import Grid from '@mui/material/Grid'

import FormLayoutsBasic from '@views/form-layouts/FormLayoutsBasic'

// import BannerLayout from '@views/banner-card/BannerLayout'
import LandscapceCard from '@/@customumer/LandscapceCard'
import BannerSliderWild from '@/@customumer/wild/BannerSliderWild'
import BookNow from '@/@customumer/wild/BookNow'

import YouMayAlsoBeInterestedIn from '@/@customumer/wild/YouMayAlsoBeInterestedIn'

const Wild = () => (
  <Grid container spacing={12}>
    <Grid item xs={12}>
      <BannerSliderWild />
    </Grid>
    <Grid item xs={12}>
      <YouMayAlsoBeInterestedIn />
    </Grid>
    <Grid item xs={12}>
      <BookNow />
    </Grid>
  </Grid>
)

export default Wild
