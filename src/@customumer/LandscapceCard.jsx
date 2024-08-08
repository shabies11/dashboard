'use client'

// React Imports
import { useState, useRef } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Vars
const LandscapceCard = () => {
  // States
  const [formData, setFormData] = useState({ state: '' })
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  // Ref for file input
  const fileInputRef = useRef(null)

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileInputChange = event => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = () => setImgSrc(reader.result)

      reader.readAsDataURL(file)
    }
  }

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <Card sx={{ padding: '7px' }}>
      <CardContent className='mb-2 w-full'>
        <div className='relative'>
          <img
            src={imgSrc}
            alt='Profile'
            style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
            className='rounded w-full'
            onClick={handleFileInputClick} // Clicking on the image triggers file input
          />
          <input
            type='file'
            hidden
            ref={fileInputRef}
            accept='image/png, image/jpeg'
            onChange={handleFileInputChange}
          />
        </div>
      </CardContent>
      <CardContent>
        <TextField
          fullWidth
          label='Title'
          value={formData.state}
          placeholder='Enter title of Image'
          onChange={e => handleFormChange('state', e.target.value)}
          style={{ marginBottom: '16px' }}
        />
      </CardContent>
    </Card>
  )
}

export default LandscapceCard
