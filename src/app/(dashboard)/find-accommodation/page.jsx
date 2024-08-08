import { Button, Grid } from '@mui/material'

import Explore from '@/@newCustom/place-to-visit/Explore'
import Experience from '@/@newCustom/place-to-visit/Experience'
import FindThingsTodo from '@/@newCustom/place-to-visit/FindThingsTodo'
import TopPlacesToVisit from '@/@newCustom/find-accommodation/TopPlacesToVisit'
import ThingsToDoHK from '@/@newCustom/find-accommodation/ThingsToDoHK'

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <TopPlacesToVisit />
        </Grid>
        <Grid item xs={12} md={12}>
          <ThingsToDoHK />
        </Grid>
        <Grid item xs={12} md={12}>
          <FindThingsTodo />
        </Grid>
      </Grid>
    </>
  )
}

export default Page
