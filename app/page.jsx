import Banner from './components/home/Banner'
import Highlights from './components/home/Highlights'
import HighlightsTwo from './components/home/HighlightsTwo'
import HowItWorks from './components/home/HowItWorks'
import StackCards from './components/home/StackCards'
import Usage from './components/home/Usage'
import WhatIsWhatNot from './components/home/WhatIsWhatNot'

export default function page() {
  return (
    <section>
      <Banner/>
      <Highlights/>
      {/* <StackCards/> */}
      <Usage/>
      <HighlightsTwo/>
      <HowItWorks/>
      <WhatIsWhatNot/>
    </section>
  )
}
