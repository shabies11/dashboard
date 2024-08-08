import { useState, useEffect } from 'react'

import { Button, Card, CardContent, CardHeader, TextField } from '@mui/material'

const ImageTitle = ({ title, imgSrc: initialImgSrc, fileInput: initialFileInput, onChange }) => {
  const [imgSrc, setImgSrc] = useState(initialImgSrc || '/images/avatars/1.png')
  const [fileInput, setFileInput] = useState(initialFileInput || '')

  useEffect(() => {
    setImgSrc(initialImgSrc)
    setFileInput(initialFileInput)
  }, [initialImgSrc, initialFileInput])

  const handleFileInputChange = event => {
    const reader = new FileReader()
    const { files } = event.target

    if (files && files.length !== 0) {
      reader.onload = () => {
        const result = reader.result

        setImgSrc(result)

        onChange({ title, imgSrc: result, fileInput: result })
      }

      reader.readAsDataURL(files[0])
    }
  }

  const handleTitleChange = event => {
    const newTitle = event.target.value

    onChange({ title: newTitle, imgSrc, fileInput })
  }

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
              htmlFor={`account-settings-upload-image-${title}`}
            >
              <img height={200} className='rounded w-full object-cover' src={imgSrc} alt='Profile' />
              <input
                hidden
                name='image'
                type='file'
                accept='image/png, image/jpeg'
                onChange={handleFileInputChange}
                id={`account-settings-upload-image-${title}`}
              />
            </Button>
          </div>
          <TextField
            fullWidth
            label='Card Title'
            placeholder='John'
            name='cardTitle'
            value={title}
            onChange={handleTitleChange}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default ImageTitle
