'use client'

import Image from "next/image";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconUrl: markerIcon.src,
//     iconRetinaUrl: markerIcon2x.src,
//     shadowUrl: markerShadow.src,
// })


export default function Home() {
  // const url =
  //   "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  // const { data, error } = useSwr(url, { fetcher });
  // const crimes = data && !error ? data.slice(0, 100) : [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,400px)_1fr] h-screen w-full">
      <div className="bg-background p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">AI Travel Planner</h2>
          <p className="text-muted-foreground">Get a personalized travel plan based on your preferences.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input id="destination" placeholder="Enter your destination" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input id="budget" type="number" placeholder="Enter your budget" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="activities">Preferred Activities</Label>
            <Textarea id="activities" placeholder="Enter your preferred activities" />
          </div>
          <Button size="lg" className="w-full">
            Generate Plan
          </Button>
        </div>

      </div>
      <div className="bg-muted">
        <div className="h-screen w-full z-999">
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
   
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
