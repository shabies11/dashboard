'use client'

import { useState } from 'react'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { IoAddCircleSharp } from 'react-icons/io5'
import Card from '@mui/material/Card'

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input } from '@mui/material'

import SlideCard from './SliderCard'

const SliderWithAddButton = () => {
  const [cards, setCards] = useState([])
  const [openUploadDialog, setOpenUploadDialog] = useState(false)
  const [file, setFile] = useState(null)

  const handleAddCard = () => {
    setOpenUploadDialog(true)
  }

  const handleUploadFile = () => {
    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        setCards([...cards, reader.result])
        setFile(null)
        setOpenUploadDialog(false)
      }
      
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteCard = index => {
    setCards(cards.filter((_, i) => i !== index))
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {cards.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SlideCard imageUrl={imageUrl} onDelete={() => handleDeleteCard(index)} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className='w-full min-h-40 min-w-40 h-full'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={handleAddCard}
          >
            <IoAddCircleSharp style={{ fontSize: '36px', color: '#888' }} />
          </Card>
        </Grid>
      </Grid>
      <Dialog open={openUploadDialog} onClose={() => setOpenUploadDialog(false)}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <Input type='file' inputProps={{ accept: 'image/*' }} onChange={handleFileChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadFile} color='primary'>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SliderWithAddButton
