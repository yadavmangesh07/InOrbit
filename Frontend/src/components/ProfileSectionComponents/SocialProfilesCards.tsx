import github from '@/assets/icons/github.png'
import twitter from '@/assets/icons/twitter.png'
import linkedin from '@/assets/icons/linkedin.png'
import google from '@/assets/icons/google.png'
import facebook from '@/assets/icons/facebook.png'
import facebook_c from '@/assets/icons/facebook_c.png'
import github_c from '@/assets/icons/github_c.png'
import twitter_c from '@/assets/icons/twitter_c.png'
import linkedin_c from '@/assets/icons/linkedin_c.png'
import google_c from '@/assets/icons/google_c.png'
import discord from '@/assets/icons/discord.png'
import discord_c from '@/assets/icons/discord_c.png'
import pinterset from '@/assets/icons/pinterset.png'
import pinterset_c from '@/assets/icons/pinterest_c.png'
const SocialProfilesCards = () => {
  return (
    <>
    <div className='flex justify-evenly items-center gap-4 mt-4 '>
      <span className='size-8 md:size-10'><img src={github}></img></span>
      <span className='size-8 md:size-10'><img src={twitter}></img></span>
      <span className='size-8 md:size-10'><img src={linkedin}></img></span>
      <span className='size-8 md:size-10'><img src={google}></img></span>
      <span className='size-8 md:size-10'><img src={discord}></img></span>
      <span className='size-8 md:size-10'><img src={facebook}></img></span>
      <span className='size-8 md:size-10'><img src={pinterset}></img></span>
      
        

    </div>
    <hr className='ml-1/2  mt-2 mb-2'/>
    <div className='flex justify-evenly items-center gap-4 mt-4 '>
      <span className='size-8 md:size-10'><img src={github_c}></img></span>
      <span className='size-8 md:size-10'><img src={twitter_c}></img></span>
      <span className='size-8 md:size-10'><img src={linkedin_c}></img></span>
      <span className='size-8 md:size-10'><img src={google_c}></img></span>
      <span className='size-8 md:size-10'><img src={discord_c}></img></span>
      <span className='size-8 md:size-10'><img src={facebook_c}></img></span>
      <span className='size-8 md:size-10'><img src={pinterset_c}></img></span>
      
        

    </div>
    
    </>
  )
}

export default SocialProfilesCards
