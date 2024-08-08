'use client'

import React, { useCallback, useState } from 'react'

import { Trash2 } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import borderRadius from 'tailwindcss-logical/plugins/borderRadius'

function MyDropzone() {
  const [files, setFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    const mappedFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    setFiles(prevFiles => [...prevFiles, ...mappedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeFile = file => () => {
    setFiles(prevFiles => prevFiles.filter(f => f.name !== file.name))
    URL.revokeObjectURL(file.preview) // Clean up memory
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()

    files.forEach(file => {
      formData.append('files', file)
    })

    try {
      // const response = await fetch('/upload-endpoint', {
      //   method: 'POST',
      //   body: formData,
      // })

      if (response.ok) {
        // Handle success
        console.log('Files uploaded successfully')
      } else {
        // Handle error
        console.error('Failed to upload files')
      }
    } catch (error) {
      console.error('Error uploading files', error)
    }
  }

  const thumbs = files.map(file => (
    <div style={thumbStyle} key={file.name}>
      <div style={thumbInnerStyle}>
        <img src={file.preview} style={imgStyle} alt={file.name} />
      </div>
      <button style={removeButtonStyle} onClick={removeFile(file)}>
        <Trash2 size={16} />
      </button>
    </div>
  ))

  // Clean up previews on unmount
  React.useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <form onSubmit={handleSubmit} className='shadow-lg px-6 py-5 rounded-md'>
      <h2 className='font-bold text-19px mb-2'>Gallery section:</h2>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag & drop some files here, or click to select files</p>}
      </div>
      <aside style={thumbsContainerStyle}>{thumbs}</aside>
      <div className='flex justify-end'>
        <button type='submit' style={submitButtonStyle}>
          Upload
        </button>
      </div>
    </form>
  )
}

const dropzoneStyle = {
  width: '100%',
  height: '200px',
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px'
}

const thumbsContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '16px'
}

const thumbStyle = {
  display: 'inline-flex',
  borderRadius: '2px',
  border: '1px solid #eaeaea',
  marginBottom: '8px',
  marginRight: '8px',
  borderRadius: '6px',
  width: '100px',
  height: '100px',
  padding: '4px',
  boxSizing: 'border-box',
  position: 'relative' // To position the remove button
}

const thumbInnerStyle = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const imgStyle = {
  display: 'block',
  width: 'auto',
  height: '100%'
}

const removeButtonStyle = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  background: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '12px'
}

const submitButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px'
}

export default MyDropzone
