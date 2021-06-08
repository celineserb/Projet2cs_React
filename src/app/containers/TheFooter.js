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
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">AutoLibDZ</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
