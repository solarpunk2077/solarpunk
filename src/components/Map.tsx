import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { GeomanControl } from './GeomanControl'
import { GeoSearch } from './GeoSearch'
import Events from './Events'
import { SelectTool } from './SelectTool'
import { Acre } from '@/lib/types'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'

type MapProps = {
  setAcres: (acres:Acre[]) => void
}
export default function Map({setAcres}: MapProps) {
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
        <ReactLeafletGoogleLayer type="hybrid" apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY} />
        

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
        <Events onAreaChange={setAcres}/>
        <SelectTool toolName="Polygon" />
        <GeoSearch/>
      </MapContainer>
    </>
  )
}
