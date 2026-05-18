import Tweet_foter from '../Tweet_foter/Tweet_foter'
import Tweet_header from '../Tweet_header/Tweet_header'
import Tweet_main from '../Tweet_main/Tweet_main'
import './Tweet.css'
const Tweet = () => {
  return (
    <div className='tweet_boxes'>
      <Tweet_header/>
      <Tweet_main/>
      <Tweet_foter/>
    </div>
  )
}

export default Tweet