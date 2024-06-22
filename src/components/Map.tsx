import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet'
import { GeomanControl } from './GeomanControl'
import Events from './Events'
import { LatLngTuple } from 'leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'
import { Acre } from '@/utils/types'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { GeoSearchControl, GoogleProvider } from 'leaflet-geosearch'

const Search = (props) => {
  const map = useMap()
  const { provider } = props

  //@ts-ignore
  useEffect(() => {
    //@ts-ignore
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: false,
    })

    map.addControl(searchControl)
    return () => map.removeControl(searchControl)
  }, [props])

  return null
}

export default function Map({
  acres,
  setAcres,
}: {
  acres: Acre[]
  setAcres: (acres: Acre[]) => void
}) {
  const lng = 34.0549
  const lat = -118.2426
  const [location, setLocation] = useState<LatLngTuple>([lng, lat])

  return (
    <>
      <MapContainer
        center={location}
        zoom={13}
        className="rounded-l-2xl"
        scrollWheelZoom={true}
        style={{
          width: '100%',
          height: '80vh',
          margin: '0 auto',
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
        }}
      >
        <ReactLeafletGoogleLayer
          apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
          type={'hybrid'}
        />

        <GeomanControl
          position="topleft"
          drawMarker={false}
          drawPolyline={false}
          measurement
          drawCircle={false}
          drawRectangle={false}
          drawText={false}
          dragMode={false}
          cutPolygon={false}
          splitMode={false}
          scaleMode={false}
          pinningOption={false}
          snappingOption={false}
          drawCircleMarker={false}
          rotateMode={false}
          snapGuidesOption={false}
          autoTracingOption={false}
        />
        <Search
          provider={
            new GoogleProvider({ apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY })
          }
        />
        <Events acres={acres} setAcres={setAcres} />
      </MapContainer>
    </>
  )
}