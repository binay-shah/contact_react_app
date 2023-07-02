import React, { useEffect, useRef } from 'react'
import { useState } from 'react'; 


const readFileAsDataURL = (file) =>
  new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = (event) => {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file)
  })

const resizeImage = (imageURL, canvas, maxHeight) =>
  new Promise(resolve => {
    const image = new Image()

    image.onload = () => {
      const context = canvas.getContext('2d')

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height
        image.height = maxHeight
      }

      context.clearRect(0, 0, canvas.width, canvas.height)
      canvas.width = image.width
      canvas.height = image.height

      context.drawImage(image, 0, 0, image.width, image.height)

      resolve(canvas.toDataURL('image/jpeg'))
    }

    image.src = imageURL
  })

/**
 * A custom <input> that dynamically reads and resizes image files before
 * submitting them to the server as data URLs. Also, shows a preview of the image.
 */
function  ImageInput(props) {
 

    const [state, setState] = useState({value: ''});
    const { className, name } = props
    const { value } = state
    const style = {
        position: 'relative'
      }
      let canvas;

      const fileInput = useRef(null);
 

 const  handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file && file.type.match(/^image\//)) {
      readFileAsDataURL(file).then(originalURL => {
        resizeImage(originalURL, canvas, props.maxHeight).then(url => {
          setState({ value: url })
        })
      })
    } else {
      setState({ value: '' })
    }
  }

  const handleFormReset = () => {
    setState({ value: '' })
  }

  useEffect(() => {
     canvas = document.createElement('canvas')
    fileInput.current.addEventListener('reset', handleFormReset)

    
    
  })   

   

    if (value) {
      style.backgroundImage = `url("${value}")`
      style.backgroundRepeat = 'no-repeat'
      style.backgroundPosition = 'center'
      style.backgroundSize = 'cover'
    }

    return (
      <div className={className} style={style}>
        <input type="hidden" name={name} value={value} />
        <input
          ref={fileInput}
          type="file"
          onChange={handleFileChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0
          }}
        />
      </div>
    )
  }


export default ImageInput