'use client'

import Card from '@mui/material/Card'
import { IconButton } from '@mui/material'
import { Trash2, Eye } from 'lucide-react'

const SlideCard = ({ imageUrl, onDelete, onPreview }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        position: 'relative',
        ...cardDimensions
      }}
    >
      <img
        src={imageUrl}
        alt='slide'
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
      />
      <IconButton
        onClick={onDelete}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(255,255,255,0.7)',
          zIndex: 1
        }}
      >
        <Trash2 size={20} />
      </IconButton>
      <IconButton
        onClick={onPreview}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: 'rgba(255,255,255,0.7)',
          zIndex: 1
        }}
      >
        <Eye size={20} />
      </IconButton>
    </Card>
  )
}

const cardDimensions = { width: '100%', height: '100%' } // Ensure consistency with the dotted card

export default SlideCard
