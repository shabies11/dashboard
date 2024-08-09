'use client'

import { useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Input } from '@mui/material'
import { IoAddCircleSharp } from 'react-icons/io5'
import SlideCard from './SliderCard'
import { useDropzone } from 'react-dropzone'

const cardDimensions = { width: '100%', height: '100%' } // Ensure consistency with the dotted card

const SliderWithAddButton = () => {
  const [cards, setCards] = useState([])
  const [openUploadDialog, setOpenUploadDialog] = useState(false)
  const [file, setFile] = useState(null)
  const [openPreviewDialog, setOpenPreviewDialog] = useState(false)
  const [previewSrc, setPreviewSrc] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const mappedFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    setCards(prevCards => [...prevCards, ...mappedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*,video/*' })

  const handleAddCard = () => {
    setOpenUploadDialog(true)
  }

  const handleUploadFile = () => {
    if (file) {
      const reader = new FileReader()

      reader.onload = () => {
        setCards([...cards, { preview: reader.result }])
        setFile(null)
        setOpenUploadDialog(false)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleDeleteCard = index => {
    setCards(cards.filter((_, i) => i !== index))
  }

  const handlePreview = src => {
    setPreviewSrc(src)
    setOpenPreviewDialog(true)
  }

  const handleClosePreviewDialog = () => {
    setOpenPreviewDialog(false)
    setPreviewSrc('')
  }

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {cards.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SlideCard
              imageUrl={file.preview}
              onDelete={() => handleDeleteCard(index)}
              onPreview={() => handlePreview(file.preview)}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              position: 'relative',
              ...cardDimensions
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> : <p>Drag & Upload </p>}
            <IoAddCircleSharp style={{ fontSize: '36px', color: '#888' }} />
          </Card>
        </Grid>
      </Grid>
      <Dialog open={openUploadDialog} onClose={() => setOpenUploadDialog(false)}>
        <DialogTitle>Upload Image or Video</DialogTitle>
        <DialogContent>
          <Input type='file' inputProps={{ accept: 'image/*,video/*' }} onChange={handleFileChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadFile} color='primary'>
            Done
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openPreviewDialog} onClose={handleClosePreviewDialog}>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          {previewSrc && (
            <img src={previewSrc} alt='Preview' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreviewDialog} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SliderWithAddButton
