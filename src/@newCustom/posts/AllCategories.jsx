'use client'
import { useState } from 'react'

import Image from 'next/image'

import { Button, Grid } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import AddCategory from './AddCategory'

function createData(category, actions) {
  return { category, actions }
}

const rows = [
  createData(
    'Frozen yoghurt',
    <div className='flex gap-2 justify-end'>
      <Button variant='outlined' color='warning'>
        Edit
      </Button>
      <Button variant='outlined' color='error'>
        Delete
      </Button>
    </div>
  ),
  createData(
    'Ice cream sandwich',
    <div className='flex gap-2 justify-end'>
      <Button variant='outlined' color='warning'>
        Edit
      </Button>
      <Button variant='outlined' color='error'>
        Delete
      </Button>
    </div>
  ),
  createData(
    'Eclair',
    <div className='flex gap-2 justify-end'>
      <Button variant='outlined' color='warning'>
        Edit
      </Button>
      <Button variant='outlined' color='error'>
        Delete
      </Button>
    </div>
  ),
  createData(
    'Cupcake',
    <div className='flex gap-2 justify-end'>
      <Button variant='outlined' color='warning'>
        Edit
      </Button>
      <Button variant='outlined' color='error'>
        Delete
      </Button>
    </div>
  ),
  createData(
    'Gingerbread',
    <div className='flex gap-2 justify-end'>
      <Button variant='outlined' color='warning'>
        Edit
      </Button>
      <Button variant='outlined' color='error'>
        Delete
      </Button>
    </div>
  )
]

const AllCategories = ({title}) => {
  return (
    <div className='shadow-lg px-6 py-6 rounded-md'>
      <Grid container spacing={6} className=''>
        <Grid item xs={12} md={12}>
          <AddCategory title={title} />
        </Grid>
        <Grid item xs={12} md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow className=''>
                  <TableCell className='font-bold uppercase text-[18px]'>{title}</TableCell>
                  <TableCell align='right' className='font-bold uppercase text-[18px]'>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.category} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row' className='flex items-center gap-2 font-bold text-[16px]'>
                      {row.category}
                    </TableCell>

                    <TableCell align='right'>{row.actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default AllCategories
