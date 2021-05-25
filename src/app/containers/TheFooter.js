<<<<<<< HEAD
import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
=======
import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
    
        <span className="ml-1">&copy; 2021 CloverTech.</span>
      </div>
      <div className="mfs-auto">
        {/* <span className="mr-1">Powered by</span> */}
        <a href="#" target="_blank" rel="noopener noreferrer">AutoLibDZ</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
>>>>>>> a494ef317d4f95c159a04b702c24a5001c7c8566
