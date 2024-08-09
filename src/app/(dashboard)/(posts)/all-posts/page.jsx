import { Button, Grid } from '@mui/material'

import Explore from '@/@newCustom/place-to-visit/Explore'
import Experience from '@/@newCustom/place-to-visit/Experience'

import AllPosts from '@/@newCustom/posts/AllPosts'

const Page = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <AllPosts title='Posts' />
        </Grid>
      </Grid>
    </>
  )
}

export default Page
