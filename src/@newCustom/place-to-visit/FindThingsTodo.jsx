'use client'
import { useState } from 'react'

import { Button, Card, Grid, TextField } from '@mui/material'
import { Trash2, Plus, Minus } from 'lucide-react'
import 'react-tagsinput/react-tagsinput.css'
import '@/app/globals.css'

import ImageTitleDes from '../commons/ImageTitleDes'

const FindThingsTodo = () => {
  const [selected, setSelected] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [imageTitleDesList, setImageTitleDesList] = useState([{ title: 'First Card' }])

  const addTags = event => {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent the default form submission behavior

      if (inputValue.trim() !== '') {
        setSelected([...selected, inputValue.trim()])
        setInputValue('')
      }
    }
  }

  const removeTag = tagToRemove => {
    setSelected(selected.filter(tag => tag !== tagToRemove))
  }

  const addImageTitleDes = () => {
    setImageTitleDesList([...imageTitleDesList, { title: 'First Card' }])
  }

  const removeLastImageTitleDes = () => {
    if (imageTitleDesList.length > 1) {
      setImageTitleDesList(imageTitleDesList.slice(0, -1))
    }
  }

  return (
    <form className='shadow-lg px-6 py-6 rounded-md'>
      <h2 className='font-bold text-19px my-2'>Find things to do, Section:</h2>
      <Grid container spacing={6} className=''>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label='Select type of activity.'
            placeholder='Tags...'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={addTags}
            name='cardTitle'
          />
          <div className='flex gap-2 mt-3'>
            <div>
              {selected.map((tag, index) => (
                <span
                  key={index}
                  className='rounded-full px-4 py-2 text-xs font-medium bg-black text-white inline-flex me-2 items-center'
                >
                  {tag}
                  <span
                    onClick={() => removeTag(tag)}
                    className='mt-1 ms-1 font-medium cursor-pointer text-red-500 hover:text-red-900 text-[12px]'
                  >
                    <Trash2 size={16} />
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Grid>

        {imageTitleDesList.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <ImageTitleDes title={item.title} />
          </Grid>
        ))}
        <Grid item xs={12} md={3}>
          <Card className='shadow-lg h-full flex items-center justify-center'>
            <Button
              type='button'
              fullWidth
              className='bg-transparent border border-dotted w-[120px] h-[120px]'
              onClick={addImageTitleDes}
            >
              <Plus />
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={12}>
          <Button type='submit' fullWidth variant='contained' className='w-[120px] float-end'>
            Save
          </Button>

          {imageTitleDesList.length > 1 && (
            <Button
              type='button'
              fullWidth
              className='border border-dotted border-white w-[120px] float-end me-2'
              onClick={removeLastImageTitleDes}
            >
              <Minus />
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  )
}

export default FindThingsTodo
