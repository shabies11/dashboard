'use client'

import { useState } from 'react'
import { useItinerary } from '@/@customumer/Itinearary/ItineraryContext'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Modal, TextField, Button } from '@mui/material'

const EditItineraryModal = ({ open, handleClose, itinerary, onSave }) => {
  const [editedItinerary, setEditedItinerary] = useState(itinerary || {})

  const handleChange = e => {
    const { name, value } = e.target
    setEditedItinerary({
      ...editedItinerary,
      [name]: value
    })
  }

  const handleSubmit = () => {
    if (editedItinerary.postTitle) {
      onSave(editedItinerary)
      handleClose()
    }
  }
}

const AllItinerary = () => {
  const { itineraries, deleteItinerary, updateItinerary } = useItinerary()
  const [selectedItinerary, setSelectedItinerary] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleEdit = itinerary => {
    setSelectedItinerary(itinerary)
    setIsEditModalOpen(true)
  }

  const handleDelete = itineraryId => {
    deleteItinerary(itineraryId)
  }

  const handleSave = updatedItinerary => {
    updateItinerary(updatedItinerary)
  }

  return (
    <div>
      <EditItineraryModal
        open={isEditModalOpen}
        handleClose={() => setIsEditModalOpen(false)}
        itinerary={selectedItinerary}
        onSave={handleSave}
      />
      <Card>
        <CardContent>
          <Typography variant='h4' className='mb-6'>
            All Itineraries
          </Typography>
          {itineraries.length > 0 ? (
            <List>
              {itineraries.map((itinerary, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={itinerary.postTitle}
                    secondary={
                      <div>
                        <div>Prices: {itinerary.prices.map(p => `${p.name}: ${p.value}`).join(', ')}</div>
                        <div>
                          Age Restrictions:{' '}
                          {itinerary.ageRestrictions.map(r => `${r.title}: ${r.description}`).join(', ')}
                        </div>
                        <div>
                          Terms & Conditions:{' '}
                          {itinerary.termsConditions.map(t => `${t.title}: ${t.description}`).join(', ')}
                        </div>
                        <div>
                          Cancellation Policies:{' '}
                          {itinerary.cancellationPolicies.map(c => `${c.title}: ${c.description}`).join(', ')}
                        </div>
                        <div>Review: {itinerary.review}</div>
                        <div>Description: {itinerary.postDesc}</div>
                      </div>
                    }
                  />
                  <Button variant='outlined' color='warning' onClick={() => handleEdit(itinerary)}>
                    Edit
                  </Button>
                  <Button variant='outlined' color='error' onClick={() => handleDelete(itinerary.id)}>
                    Delete
                  </Button>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant='body2'>No itineraries added yet.</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default AllItinerary
