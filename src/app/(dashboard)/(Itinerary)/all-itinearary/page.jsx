import { Button, Grid } from '@mui/material'

import Explore from '@/@newCustom/place-to-visit/Explore'
import Experience from '@/@newCustom/place-to-visit/Experience'
import FindThingsTodo from '@/@newCustom/place-to-visit/FindThingsTodo'
import AddItinearary from '@/@customumer/Itinearary/AddItinearary'

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <AddItinearary />
        </Grid>
      </Grid>
    </>
  )
}

export default Page
