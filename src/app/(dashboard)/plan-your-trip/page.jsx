// MUI Imports
import Grid from '@mui/material/Grid'

// import BannerLayout from '@views/banner-card/BannerLayout'

import LandscapceCard from '@/@customumer/LandscapceCard'
import BannerSlider from '@/@customumer/BannerSlider'
import TopPlacesToVisit from '@/@customumer/PlanYourTrip/TopPlacesToVisit'
import FormLayoutsBasic from '@views/form-layouts/FormLayoutsBasic'



const PlanYourTrip = () => (
  <Grid container spacing={12}>
    <Grid item xs={12}>
      <BannerSlider />
    </Grid>
    <Grid item xs={12}>
      <TopPlacesToVisit />
    </Grid>
  </Grid>
)

export default PlanYourTrip
