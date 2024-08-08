// MUI Imports
import Grid from '@mui/material/Grid'

import FormLayoutsBasic from '@views/form-layouts/FormLayoutsBasic'
// import BannerLayout from '@views/banner-card/BannerLayout'
import LandscapceCard from '@/@customumer/LandscapceCard'
import BannerSlider from '@/@customumer/BannerSlider'
import AttractionsAndActivites from '@/@customumer/AttractionsAndActivites'

const ThingsToDo = () => (
  <Grid container spacing={12}>
    <Grid item xs={12}>
      <BannerSlider />
    </Grid>
    <Grid item xs={12}>
      <AttractionsAndActivites />
    </Grid>
  </Grid>
)

export default ThingsToDo
