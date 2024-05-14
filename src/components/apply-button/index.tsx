import './style.css'

export const ApplyButton = ({ action }: { action: () => void }) => {
  return (
    <button className='apply-button button-1' onClick={action}>
      <span className='button-center'>Apply</span>
    </button>
  )
}
