'use client'
import { useState } from 'react'

import { Button, Grid } from '@mui/material'

import ImageTitle from '../commons/ImageTitle'

const Explore = () => {
  const [cards, setCards] = useState([
    { title: 'First Card', imgSrc: '/images/avatars/1.png', fileInput: '' },
    { title: 'Second Card', imgSrc: '/images/avatars/1.png', fileInput: '' },
    { title: 'Third Card', imgSrc: '/images/avatars/1.png', fileInput: '' },
    { title: 'Fourth Card', imgSrc: '/images/avatars/1.png', fileInput: '' }
  ])

  const handleCardChange = (index, updatedCard) => {
    const updatedCards = cards.map((card, i) => (i === index ? updatedCard : card))

    setCards(updatedCards)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()

    let req = await fetch('/api/exploresection',{
      method:'POST'
    });

    let response = await req.json();
 

    console.log(cards)
  }

  return (
    <form onSubmit={handleSubmit} className='shadow-lg px-2 py-4 rounded-xs'>
      <h2 className='font-bold text-19px my-2'>Explore section:</h2>
      <Grid container spacing={6} className=''>
        {cards.map((card, index) => (
          <Grid item xs={12} md={3} lg={3} key={index}>
            <ImageTitle
              title={card.title}
              imgSrc={card.imgSrc}
              fileInput={card.fileInput}
              onChange={updatedCard => handleCardChange(index, updatedCard)}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Button type='submit' fullWidth variant='contained' className='w-[120px] float-end'>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Explore
