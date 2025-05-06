import Banner from './components/home/Banner'
import Highlights from './components/home/Highlights'
import HowItWorks from './components/home/HowItWorks'
import Usage from './components/home/Usage'
import WhatIsWhatNot from './components/home/WhatIsWhatNot'

export default function page() {
  return (
    <section>
      <Banner/>
      <Highlights/>
      <Usage/>
      <HowItWorks/>
      <WhatIsWhatNot/>
    </section>
  )
}
