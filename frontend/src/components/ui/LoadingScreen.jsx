import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import networkAnimation from '../../assets/animations/network-loading.json'

const LoadingScreen = () => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Start fade out animation after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0)
    }, 1500)
    
    return () => clearTimeout(fadeTimer)
  }, [])

  return (
    <div 
      className="loading-overlay" 
      style={{ 
        opacity, 
        pointerEvents: opacity === 0 ? 'none' : 'auto' 
      }}
    >
      <div className="loading-container">
        <Lottie 
          animationData={networkAnimation} 
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  )
}

export default LoadingScreen