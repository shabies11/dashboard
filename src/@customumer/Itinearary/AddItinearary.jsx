'use client'

import { useState } from 'react'
import { useItinerary } from '@/@customumer/Itinearary/ItineraryContext'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import Chip from '@mui/material/Chip'

import SliderWithAddButton from '@/@customumer/SliderWithAddButton'

const cardStyles = {
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  marginBottom: '20px'
}

const initialData = {
  postTitle: 'Price and Packages',
  prices: [],
  ageRestrictions: [],
  termsConditions: [],
  cancellationPolicies: [],
  cardLabel: '',
  review: '',
  postDesc: ''
}

const AddItinerary = () => {
  const { itineraries, setItineraries } = useItinerary()
  const [formData, setFormData] = useState(initialData)
  const [newPriceName, setNewPriceName] = useState('')
  const [newPriceValue, setNewPriceValue] = useState('')
  const [newAgeRestrictionTitle, setNewAgeRestrictionTitle] = useState('')
  const [newAgeRestrictionDescription, setNewAgeRestrictionDescription] = useState('')
  const [newTermsConditionsTitle, setNewTermsConditionsTitle] = useState('')
  const [newTermsConditionsDescription, setNewTermsConditionsDescription] = useState('')
  const [newCancellationPolicyTitle, setNewCancellationPolicyTitle] = useState('')
  const [newCancellationPolicyDescription, setNewCancellationPolicyDescription] = useState('')

  const handleFormChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value }
    })
  }

  const handleAddPrice = () => {
    if (newPriceName && newPriceValue) {
      setFormData({
        ...formData,
        prices: [...formData.prices, { name: newPriceName, value: newPriceValue }]
      })
      setNewPriceName('')
      setNewPriceValue('')
    }
  }

  const handleAddAgeRestriction = () => {
    if (newAgeRestrictionTitle && newAgeRestrictionDescription) {
      setFormData({
        ...formData,
        ageRestrictions: [
          ...formData.ageRestrictions,
          { title: newAgeRestrictionTitle, description: newAgeRestrictionDescription }
        ]
      })
      setNewAgeRestrictionTitle('')
      setNewAgeRestrictionDescription('')
    }
  }

  const handleAddTermsConditions = () => {
    if (newTermsConditionsTitle && newTermsConditionsDescription) {
      setFormData({
        ...formData,
        termsConditions: [
          ...formData.termsConditions,
          { title: newTermsConditionsTitle, description: newTermsConditionsDescription }
        ]
      })
      setNewTermsConditionsTitle('')
      setNewTermsConditionsDescription('')
    }
  }

  const handleAddCancellationPolicy = () => {
    if (newCancellationPolicyTitle && newCancellationPolicyDescription) {
      setFormData({
        ...formData,
        cancellationPolicies: [
          ...formData.cancellationPolicies,
          { title: newCancellationPolicyTitle, description: newCancellationPolicyDescription }
        ]
      })
      setNewCancellationPolicyTitle('')
      setNewCancellationPolicyDescription('')
    }
  }

  const handleRemove = (section, index) => {
    const updatedList = formData[section].filter((_, i) => i !== index)
    setFormData({ ...formData, [section]: updatedList })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setItineraries([...itineraries, formData])
    setFormData(initialData)
  }

  return (
    <Card>
      <CardContent className='mbe-5'>
        <Card variant='outlined' sx={cardStyles} className=' shadow-lg'>
          <CardContent>
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <Grid container justifyContent='flex-start'>
                  <Typography variant='h4' align='left'>
                    Add Itinerary Slider
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <SliderWithAddButton />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </CardContent>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            {/* Price Entry Card */}
            <Grid item xs={12}>
              <Card variant='outlined' sx={cardStyles} className=' shadow-lg'>
                <CardContent>
                  <Typography variant='h6' className='mb-6'>
                    Add Price Entry
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField
                        fullWidth
                        label='Price Name'
                        placeholder='e.g. Adult (1-5 persons)'
                        value={newPriceName}
                        onChange={e => setNewPriceName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField
                        fullWidth
                        label='Price Value'
                        placeholder='$880.00'
                        value={newPriceValue}
                        onChange={e => setNewPriceValue(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className='flex justify-end mt-4'>
                    <Button variant='contained' onClick={handleAddPrice}>
                      Add Price
                    </Button>
                  </Grid>
                  <Typography variant='h6' className='mt-6'>
                    Current Prices
                  </Typography>
                  {formData.prices.length > 0 ? (
                    <List>
                      {formData.prices.map((price, index) => (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <IconButton edge='end' aria-label='delete' onClick={() => handleRemove('prices', index)}>
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={price.name} secondary={price.value} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant='body2'>No prices added yet.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Age Restriction Card */}
            <Grid item xs={12} mt={4}>
              <Card variant='outlined' sx={cardStyles} className=' shadow-lg'>
                <CardContent>
                  <Typography variant='h6' className='mb-6'>
                    Add Age Restriction
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Title'
                        placeholder='Age Restriction Title'
                        value={newAgeRestrictionTitle}
                        onChange={e => setNewAgeRestrictionTitle(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Description'
                        placeholder='Age Restriction Description'
                        multiline
                        rows={4}
                        value={newAgeRestrictionDescription}
                        onChange={e => setNewAgeRestrictionDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className='flex justify-end mt-4'>
                    <Button variant='contained' onClick={handleAddAgeRestriction}>
                      Add Age Restriction
                    </Button>
                  </Grid>
                  <Typography variant='h6' className='mt-6'>
                    Current Age Restrictions
                  </Typography>
                  {formData.ageRestrictions.length > 0 ? (
                    <List>
                      {formData.ageRestrictions.map((restriction, index) => (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <IconButton
                              edge='end'
                              aria-label='delete'
                              onClick={() => handleRemove('ageRestrictions', index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={restriction.title} secondary={restriction.description} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant='body2'>No age restrictions added yet.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Terms & Conditions Card */}
            <Grid item xs={12} mt={4}>
              <Card variant='outlined' sx={cardStyles} className=' shadow-lg'>
                <CardContent>
                  <Typography variant='h6' className='mb-6'>
                    Add Terms & Conditions
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Title'
                        placeholder='Terms & Conditions Title'
                        value={newTermsConditionsTitle}
                        onChange={e => setNewTermsConditionsTitle(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Description'
                        placeholder='Terms & Conditions Description'
                        multiline
                        rows={4}
                        value={newTermsConditionsDescription}
                        onChange={e => setNewTermsConditionsDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className='flex justify-end mt-4'>
                    <Button variant='contained' onClick={handleAddTermsConditions}>
                      Add Terms & Conditions
                    </Button>
                  </Grid>
                  <Typography variant='h6' className='mt-6'>
                    Current Terms & Conditions
                  </Typography>
                  {formData.termsConditions.length > 0 ? (
                    <List>
                      {formData.termsConditions.map((term, index) => (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <IconButton
                              edge='end'
                              aria-label='delete'
                              onClick={() => handleRemove('termsConditions', index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={term.title} secondary={term.description} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant='body2'>No terms & conditions added yet.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Cancellation Policy Card */}
            <Grid item xs={12} mt={4}>
              <Card variant='outlined' sx={cardStyles} className=' shadow-lg'>
                <CardContent>
                  <Typography variant='h6' className='mb-6'>
                    Add Cancellation Policy
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Title'
                        placeholder='Cancellation Policy Title'
                        value={newCancellationPolicyTitle}
                        onChange={e => setNewCancellationPolicyTitle(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField
                        fullWidth
                        label='Description'
                        placeholder='Cancellation Policy Description'
                        multiline
                        rows={4}
                        value={newCancellationPolicyDescription}
                        onChange={e => setNewCancellationPolicyDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className='flex justify-end mt-4'>
                    <Button variant='contained' onClick={handleAddCancellationPolicy}>
                      Add Cancellation Policy
                    </Button>
                  </Grid>
                  <Typography variant='h6' className='mt-6'>
                    Current Cancellation Policies
                  </Typography>
                  {formData.cancellationPolicies.length > 0 ? (
                    <List>
                      {formData.cancellationPolicies.map((policy, index) => (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <IconButton
                              edge='end'
                              aria-label='delete'
                              onClick={() => handleRemove('cancellationPolicies', index)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={policy.title} secondary={policy.description} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant='body2'>No cancellation policies added yet.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} mt={4}>
              <Button variant='contained' color='primary' type='submit'>
                Save Itinerary
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddItinerary
