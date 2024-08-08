'use client'

import { useItinerary } from '@/@customumer/Itinearary/ItineraryContext'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const AllItinerary = () => {
  const { itineraries } = useItinerary()

  return (
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
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant='body2'>No itineraries added yet.</Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default AllItinerary
