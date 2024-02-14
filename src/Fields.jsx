import React from 'react'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
const Fields = ({name,email}) => {
  return (
    <div className="Show-data">
    <div className="Data">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <button className='Delete-button'>
        <RemoveCircleOutlineOutlinedIcon/>
      </button>
    </div>
  </div>
  )
}

export default Fields