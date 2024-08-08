// 'use client'
// import { useState } from 'react'
// import { Input, Textarea, Button } from '@nextui-org/react' // Assuming you are using NextUI components

// const AboutPage = () => {
//   const [socialLinks, setSocialLinks] = useState({
//     email: '',
//     phone: '',
//     instagram: '',
//     facebook: '',
//     youtube: ''
//   })
//   const [about, setAbout] = useState('')
//   const [openingTimes, setOpeningTimes] = useState('')
//   const [locations, setLocations] = useState(['']) // Initialize with one empty location

//   const handleSocialLinkChange = e => {
//     setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value })
//   }

//   const handleAboutChange = e => {
//     setAbout(e.target.value)
//   }

//   const handleOpeningTimesChange = e => {
//     setOpeningTimes(e.target.value)
//   }

//   const handleLocationChange = (index, value) => {
//     const newLocations = [...locations]
//     newLocations[index] = value
//     setLocations(newLocations)
//   }

//   const addLocation = () => {
//     setLocations([...locations, ''])
//   }

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log({ socialLinks, about, openingTimes, locations })
//   }

//   return (
//     <div className='container mx-auto p-4'>
//       <h1 className='text-2xl font-bold mb-4'>About Us</h1>
//       <div className='mb-4'>
//         <h2 className='text-xl font-semibold'>Social Media Links</h2>
//         <Input name='email' placeholder='Email' value={socialLinks.email} onChange={handleSocialLinkChange} />
//         <Input name='phone' placeholder='Phone' value={socialLinks.phone} onChange={handleSocialLinkChange} />
//         <Input
//           name='instagram'
//           placeholder='Instagram'
//           value={socialLinks.instagram}
//           onChange={handleSocialLinkChange}
//         />
//         <Input name='facebook' placeholder='Facebook' value={socialLinks.facebook} onChange={handleSocialLinkChange} />
//         <Input name='youtube' placeholder='YouTube' value={socialLinks.youtube} onChange={handleSocialLinkChange} />
//       </div>
//       <div className='mb-4'>
//         <h2 className='text-xl font-semibold'>About</h2>
//         <Textarea placeholder='Write about us...' value={about} onChange={handleAboutChange} />
//       </div>
//       <div className='mb-4'>
//         <h2 className='text-xl font-semibold'>Opening Times</h2>
//         <Textarea placeholder='Months of operation...' value={openingTimes} onChange={handleOpeningTimesChange} />
//       </div>
//       <div className='mb-4'>
//         <h2 className='text-xl font-semibold'>Locations</h2>
//         {locations.map((location, index) => (
//           <div key={index} className='mb-2'>
//             <Input
//               placeholder={`Location ${index + 1}`}
//               value={location}
//               onChange={e => handleLocationChange(index, e.target.value)}
//             />
//           </div>
//         ))}
//         <Button onClick={addLocation}>Add Location</Button>
//       </div>
//       <Button onClick={handleSubmit}>Submit</Button>
//     </div>
//   )
// }

// export default AboutPage
