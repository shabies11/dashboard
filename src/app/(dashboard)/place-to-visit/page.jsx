import { Button, Grid } from '@mui/material'

import Explore from '@/@newCustom/place-to-visit/Explore'
import Experience from '@/@newCustom/place-to-visit/Experience'
import FindThingsTodo from '@/@newCustom/place-to-visit/FindThingsTodo' 
import GalleryDropzone from '@/@newCustom/commons/GalleryDropzone'

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Explore />
        </Grid>
        <Grid item xs={12} md={12}>
          <Experience />
        </Grid>
        <Grid item xs={12} md={12}>
          <GalleryDropzone />
        </Grid>
        <Grid item xs={12} md={12} className='hidden'>
          <FindThingsTodo />
        </Grid>
      </Grid>
    </>
  )
}

export default Page
