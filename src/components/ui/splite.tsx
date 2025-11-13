'use client'

import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading Spline until page is interactive
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl">
        <div className="animate-pulse text-gray-400">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        style={{ pointerEvents: 'none' }} // Disable interactions for better performance
      />
    </Suspense>
  )
}
