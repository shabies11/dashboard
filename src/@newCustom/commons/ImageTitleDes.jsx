import { useState, useEffect } from 'react'

import Textarea from '@mui/joy/Textarea'
import '@fontsource/inter'

import { Button, Card, CardContent, CardHeader, TextareaAutosize, TextField } from '@mui/material'

const ImageTitleDes = ({ title }) => {
  return (
    <Card className='text-center'>
      <CardContent className='' sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <div className='flex flex-grow flex-col gap-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              component='label'
              size='small'
              className='border w-full'
              variant='contained'
              htmlFor={`account-settings-upload-image-`}
            >
              <img height={200} className='rounded w-full' src={'/images/avatars/1.png'} alt='Profile' />
              <input
                hidden
                name='image'
                type='file'
                accept='image/png, image/jpeg'
                id={`account-settings-upload-image-`}
              />
            </Button>
          </div>
          <TextField fullWidth label='Card Title' placeholder='John' name='cardTitle' value={title} />
          <TextField fullWidth label='Description' placeholder='Type in here…' name='cartDes' multiline rows={2} />
          <TextField fullWidth label='Label (optional)' placeholder='Label on card(Optional)' name='label' />
          <TextField fullWidth label='Reviews' placeholder='Number of Stars' name='label' />
        </div>
      </CardContent>
    </Card>
  )
}

export default ImageTitleDes
