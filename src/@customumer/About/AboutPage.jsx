'use client'
import { useState } from 'react'
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
import Box from '@mui/material/Box'

const AboutPage = () => {
  const [socialLinks, setSocialLinks] = useState({
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    youtube: ''
  })
  const [about, setAbout] = useState('')
  const [openingTimes, setOpeningTimes] = useState('')
  const [locations, setLocations] = useState(['']) // Initialize with one empty location

  const handleSocialLinkChange = e => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value })
  }

  const handleAboutChange = e => {
    setAbout(e.target.value)
  }

  const handleOpeningTimesChange = e => {
    setOpeningTimes(e.target.value)
  }

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations]
    newLocations[index] = value
    setLocations(newLocations)
  }

  const addLocation = () => {
    setLocations([...locations, ''])
  }

  const removeLocation = index => {
    const newLocations = locations.filter((_, i) => i !== index)
    setLocations(newLocations)
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ socialLinks, about, openingTimes, locations })
  }

  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: 'auto' }}>
      <Typography variant='h4' gutterBottom>
        About Us
      </Typography>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Social Media Links
          </Typography>
          <Grid container spacing={2}>
            {Object.keys(socialLinks).map(key => (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  name={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={socialLinks[key]}
                  onChange={handleSocialLinkChange}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            About
          </Typography>
          <TextField
            multiline
            rows={4}
            variant='outlined'
            fullWidth
            margin='normal'
            placeholder='Write about us...'
            value={about}
            onChange={handleAboutChange}
          />
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Opening Times
          </Typography>
          <TextField
            multiline
            rows={4}
            variant='outlined'
            fullWidth
            margin='normal'
            placeholder='Months of operation...'
            value={openingTimes}
            onChange={handleOpeningTimesChange}
          />
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Locations
          </Typography>
          <List>
            {locations.map((location, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge='end' aria-label='delete' onClick={() => removeLocation(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={
                    <TextField
                      variant='outlined'
                      fullWidth
                      margin='normal'
                      placeholder={`Location ${index + 1}`}
                      value={location}
                      onChange={e => handleLocationChange(index, e.target.value)}
                    />
                  }
                />
              </ListItem>
            ))}
          </List>
          <Button variant='contained' color='primary' onClick={addLocation}>
            Add Location
          </Button>
        </CardContent>
      </Card>

      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default AboutPage
