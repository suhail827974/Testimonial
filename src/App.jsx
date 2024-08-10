import React from 'react'
import reviews from './data'
import Testimonial from './Components/Testimonial'

function App() {
  return (
    <div>
      
      <Testimonial reviews={reviews}/>
    </div>
  )
}

export default App