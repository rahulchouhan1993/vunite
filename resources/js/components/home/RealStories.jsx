import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import stroies from '../../assets/real.png'

const RealStories = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [thumbVariant, setThumbVariant] = useState('maxresdefault')
  const videoId = 'ulrPXDNf5k4'
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  const thumbSrc =
    thumbVariant === 'fallback' ? stroies : `https://i.ytimg.com/vi/${videoId}/${thumbVariant}.jpg`

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative block w-full"
            aria-label="Play video"
          >
            <img
              src={thumbSrc}
              alt="Real Stories video"
              className="rounded-3xl !min-h-[200px] sm:!min-h-[280px] lg:!min-h-[380px] w-full object-cover"
              onError={() => {
                if (thumbVariant === 'maxresdefault') {
                  setThumbVariant('hqdefault')
                  return
                }
                if (thumbVariant === 'hqdefault') {
                  setThumbVariant('fallback')
                }
              }}
            />
            <span className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transition group-hover:scale-110">
              <Play className="ml-1" />
            </span>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="fading font-recoleta text-3xl md:text-4xl font-bold text-main mb-2">Real Stories.</h2>
          <h2 className="fading font-recoleta text-3xl md:text-4xl font-bold text-pink mb-6">Real Support.</h2>
          <p className="fading text-gray-800 text-xl mb-4">See how we support NDIS participants to live more confidently and independently every day.</p>
          <p className="fading text-gray-600 font-light mb-2 text-normal md:text-lg leading-relaxed">
            We believe every person deserves respectful, reliable, and personalised support.
          </p>
          <p className="fading text-gray-600 mb-2 font-light text-normal md:text-lg leading-relaxed">
            This short video shows how our team works closely with participants and families to create meaningful outcomes.
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-black overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 text-gray-800 flex items-center justify-center hover:bg-white"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={videoSrc}
                title="YouTube video player"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default RealStories
