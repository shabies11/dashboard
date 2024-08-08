'use client'
import { useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import { MdDeleteForever } from 'react-icons/md'
import { IoEye } from 'react-icons/io5'


import CircularProgress from '@mui/material/CircularProgress'

const SlideCard = ({ imageUrl, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [previewSrc, setPreviewSrc] = useState('')
  const [hover, setHover] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handlePreview = () => {
    setPreviewSrc(imageUrl)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setPreviewSrc('')
  }

  return (
    <>
      <Card
        sx={{
          position: 'relative',
          height: '150px', // Ensure the height matches the dotted card
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #ddd',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
          '&:hover .card-actions': {
            opacity: 1
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardContent style={{ padding: 0, position: 'relative', width: '100%', height: '100%' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
          >
            {imageLoading && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1
                }}
              >
                <CircularProgress />
              </div>
            )}
            <img
              src={imageUrl}
              alt='Profile'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'opacity 0.3s',
                opacity: imageLoaded ? 1 : 0.5 // Adjust opacity until image is fully loaded
              }}
              onLoad={() => {
                setImageLoaded(true)
                setImageLoading(false)
              }} // Update state when image is loaded
              onError={() => setImageLoading(false)} // Hide loader on error
            />
            <div
              className='card-actions'
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                display: 'flex',
                flexDirection: 'column',
                opacity: hover ? 1 : 0,
                transition: 'opacity 0.3s'
              }}
            >
              <IconButton color='primary' onClick={handlePreview}>
                <IoEye />
              </IconButton>
              <IconButton color='secondary' onClick={onDelete}>
                <MdDeleteForever />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          <img
            src={previewSrc}
            alt='Preview'
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Ensure proper aspect ratio
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SlideCard
