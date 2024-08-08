// 'use client'

// // React Imports
// import { useState, useRef } from 'react'

// // MUI Imports
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import TextField from '@mui/material/TextField'

// // Vars
// const PotraitCard = () => {
//   // States
//   const [formData, setFormData] = useState({ state: '' })
//   const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

//   // Ref for file input
//   const fileInputRef = useRef(null)

//   const handleFormChange = (field, value) => {
//     setFormData({ ...formData, [field]: value })
//   }

//   const handleFileInputChange = event => {
//     const file = event.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = () => setImgSrc(reader.result)
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleFileInputClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click()
//     }
//   }

//   return (
//     <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
//       <CardContent className='mbe-5 w-full'>
//         <div className='relative'>
//           <img
//             src={imgSrc}
//             alt='Profile'
//             style={{ height: '365px', objectFit: 'cover', cursor: 'pointer' }}
//             className='rounded w-full'
//             onClick={handleFileInputClick} // Clicking on the image triggers file input
//           />
//           <input
//             type='file'
//             hidden
//             ref={fileInputRef}
//             accept='image/png, image/jpeg'
//             onChange={handleFileInputChange}
//           />
//         </div>
//       </CardContent>
//       <CardContent sx={{ padding: '7px' }}>
//         <TextField
//           fullWidth
//           label='Title'
//           value={formData.state}
//           placeholder='Enter title of Image'
//           onChange={e => handleFormChange('state', e.target.value)}
//           style={{ marginBottom: '16px' }}
//         />
//       </CardContent>
//     </Card>
//   )
// }

// export default PotraitCard
