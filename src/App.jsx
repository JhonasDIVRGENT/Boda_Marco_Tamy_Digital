import { useCallback, useEffect, useState } from 'react'
import invitationConfig from './content/invitationConfig'
import EnvelopeGate from './components/envelope/EnvelopeGate'
import BankModal from './components/BankModal'
import HeroSection from './components/sections/HeroSection'
import NosCasamosSection from './components/sections/NosCasamosSection'
import DressCodeGiftsSection from './components/sections/DressCodeGiftsSection'
import NoKidsItinerarySection from './components/sections/NoKidsItinerarySection'
import RsvpClosingSection from './components/sections/RsvpClosingSection'
import ClosingPhotoSection from './components/sections/ClosingPhotoSection'

export default function App() {
  const [started, setStarted] = useState(false)
  const [bankOpen, setBankOpen] = useState(false)

  const handleOpened = useCallback(() => {
    setStarted(true)
  }, [])

  useEffect(() => {
    document.title = invitationConfig.meta.pageTitle
    document.documentElement.lang = invitationConfig.meta.lang
  }, [])

  return (
    <div className="app-root">
      {!started ? <EnvelopeGate onOpened={handleOpened} /> : null}
      {started ? (
        <>
          <main>
            <HeroSection />
            <NosCasamosSection />
            <DressCodeGiftsSection onOpenBank={() => setBankOpen(true)} />
            <NoKidsItinerarySection />
            <RsvpClosingSection />
            <ClosingPhotoSection />
          </main>
          <BankModal open={bankOpen} onClose={() => setBankOpen(false)} />
        </>
      ) : null}
    </div>
  )
}
