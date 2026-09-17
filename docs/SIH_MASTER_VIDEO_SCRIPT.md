# 🎬 RakshaCast: SIH Round 2 Master Video Demonstration Script

> **Target Duration:** 4:00 – 4:30 Minutes  
> **Platform / URL:** [https://rakshacast-sih2026.surge.sh](https://rakshacast-sih2026.surge.sh)  
> **GitHub Repository:** [https://github.com/jacobkothapally07-jpg/rakshacast](https://github.com/jacobkothapally07-jpg/rakshacast)  
> **Target Audience:** Smart India Hackathon (SIH) Technical Evaluators & Ministry Jury  

---

## ⏱️ Master Timeline & Scene Breakdown

```
┌─────────────────┬───────────┬─────────────────────────────────────────────────────────┐
│ Time Window     │ Screen    │ Core Demonstration Focus                                │
├─────────────────┼───────────┼─────────────────────────────────────────────────────────┤
│ 00:00 – 00:30   │ Screen 0  │ Title & Problem Statement: The Last-Mile Warning Gap    │
│ 00:30 – 01:10   │ Screen 1  │ Nowcast Dashboard: Live 3-Min Telemetry & Action Window │
│ 01:10 – 01:50   │ Screen 2  │ Live GIS Map: ISRO Bhuvan, MOSDAC & Dynamic Hazard Radii│
│ 01:50 – 02:45   │ Screen 3  │ 💥 The Hero Demo: 1-Click Cross-Device Emergency Siren  │
│ 02:45 – 03:25   │ Screen 4  │ 🛰️ The Game-Changer: ISRO NavIC Sat-Direct (Zero Telecom)│
│ 03:25 – 04:00   │ Screen 5  │ Safe Evacuation, Anti-Hoarding QR & NDRF Command Hub    │
│ 04:00 – 04:20   │ Screen 6  │ Multi-Platform Architecture, Tech Stack & Conclusion    │
└─────────────────┴───────────┴─────────────────────────────────────────────────────────┘
```

---

## 🎥 Scene-by-Scene Script & Action Choreography

---

### 📍 Scene 1: Introduction & The National Problem Hook [00:00 – 00:30]
* **Visual Setup:** Show your opening PPT Slide or the top of the RakshaCast web app header displaying the `[MoES / IMD]` badge.
* **On-Screen Actions:** Hover over the RakshaCast header and national emblem.

> **🎙️ Voiceover:**  
> *"Respected evaluators, welcome to our demonstration of **RakshaCast**—an AI-driven Hyper-Local Disaster Early Warning and Multi-Channel Response Network built for the Smart India Hackathon.*  
> 
> *In India, natural disasters like cloudbursts, urban flash floods, and cyclones cause immense loss of life not because of a lack of macro-meteorological forecasts, but because **the last-mile delivery pipeline breaks down**. Ordinary citizens receive generic warnings hours too late, cannot interpret complex radar charts, or lose all connectivity when ground cellular towers collapse.*  
> 
> *RakshaCast solves this with **hyper-local live telemetry**, **dynamic GIS hazard mapping**, and **zero-telecom ISRO NavIC satellite downlinks**."*

---

### 📍 Scene 2: Live Citizen Nowcast Dashboard [00:30 – 01:10]
* **Visual Setup:** Nowcast Screen (`Home` tab).
* **On-Screen Actions:**
  1. Point to the live search bar (`Search Indian City / District...`) and the `● LIVE FEED` badge.
  2. Highlight the **Enlarged Atmospheric Risk Hero Card** and point to the **Threat Level** and **Action Window (12.0 hrs)**.
  3. Scroll down through **Today's Weather telemetry**, the **24-Hour Hourly Forecast**, and the **Precaution Engine**.

> **🎙️ Voiceover:**  
> *"Here on the Citizen Dashboard, RakshaCast continuously ingests real-time meteorological feeds every 3 minutes from Open-Meteo and OpenStreetMap models.*  
> 
> *Notice our AI Risk Engine calculating a live **Threat Level** and dynamic **Action Window**—currently showing **12.0 hours** during calm conditions.  
> 
> *Below, citizens receive hourly rain probability curves, wind gust telemetry, and AI-recommended precautions in simple, actionable language."*

---

### 📍 Scene 3: Geospatial Live Map & ISRO GIS Layers [01:10 – 01:50]
* **Visual Setup:** Navigate to the **`Live Map`** tab.
* **On-Screen Actions:**
  1. Click between the GIS layer buttons: **`🛰️ ISRO Bhuvan WMS`**, **`☁️ MOSDAC INSAT-3D WV`**, and **`🏔️ ISRO CartoDEM 30m`**.
  2. Point to the concentric circles on the map.
  3. Drag the **Inundation Forecast Slider** (`+1h`, `+3h`, `+6h`) and watch the blue flood boundary dynamically expand.

> **🎙️ Voiceover:**  
> *"Switching to the **Live GIS Map**, we interface directly with **ISRO Bhuvan** satellite imagery, **MOSDAC INSAT-3D Water Vapor cloud overlays**, and **CartoDEM 30-meter elevation models**.*  
> 
> *Instead of static markers, RakshaCast renders **real-time dynamic hazard zones**:*  
> - *The **Blue Polygon** represents the live Flood Inundation Surge.*  
> - *The **Red Polygon** marks the severe Cloudburst Core fueled by satellite moisture measurements.*  
> - *The **Green Markers** show verified high-altitude relief shelters with live bed capacities.*  
> 
> *Using the **Inundation Forecast Slider**, district emergency officials can model flood spread up to 6 hours into the future."*

---

### 📍 Scene 4: 💥 The Hero Demo: 1-Click Emergency Siren Sync [01:50 – 02:45]
* **Visual Setup:** Open the **`🎬 Demo`** tab on your laptop. Have your mobile phone visible on camera or side-by-side.
* **On-Screen Actions:**
  1. Select preset: **`🌊 Flash Flood (Haridwar Basin)`**.
  2. Show the settings: Radius 5 km, 1,480 citizens in target zone.
  3. Click **`🚀 Start Emergency Demo Simulation`**.
  4. Watch the 3-step pipeline light up: `ANOMALY DETECTED` ➔ `RISK: CRITICAL (88/100)` ➔ `DISPATCHING ALERTS`.
  5. Hold up your mobile phone as the **acoustic siren rings loudly** and the **Red Evacuation Modal** pops up.
  6. Tap **`Evacuate Safe Route`** on the phone.

> **🎙️ Voiceover:**  
> *"Now, let's demonstrate a live emergency using our dedicated **SIH 1-Click Demo Dashboard** on my laptop.*  
> 
> *I select a **Flash Flood in the Haridwar Basin** and click **Start Emergency Demo Simulation**.*  
> 
> *(Loud acoustic emergency siren pulses on the phone)*  
> 
> *Within **150 milliseconds**, across our cloud MQTT WebSocket mesh, **my mobile phone in the field immediately sounds a high-decibel acoustic siren** and displays an un-dismissible **Red Evacuation Alert** in both Hindi and English.*  
> 
> *The **Action Window instantly drops from 12 hours down to 1.5 hours**!  
> 
> *Tapping **'Evacuate Safe Route'** launches our topological navigation engine, calculating an escape route that actively routes around flooded zones to the nearest high-ground shelter."*

---

### 📍 Scene 5: 🛰️ The Game-Changer: ISRO NavIC Sat-Direct (Zero Telecom) [02:45 – 03:25]
* **Visual Setup:** Navigate to the **`🛰️ ISRO NavIC Sat-Direct`** screen (from Section 8 of Home or top chip).
* **On-Screen Actions:**
  1. Click **`🚨 Simulate 100% Cellular Tower Failure (Force NavIC Sat-Direct)`**.
  2. Point to the top network chip changing to `🛰️ NavIC SAT`.
  3. Scroll down to show the animated **Celestial Polar Skyplot Radar Canvas** rotating and tracking the 6 satellites.
  4. Scroll to the **Raw Hex EWMS Satellite Packet Stream Decoder** and click **`📡 Intercept & Decode Next Frame`**.
  5. Scroll to the **NavIC Return Link Service (RLS)** card and click **`🚨 Uplink Satellite Distress Beacon`**, showing the confirmed `RLS-ACK-0x8F21` token.

> **🎙️ Voiceover:**  
> *"Next is our biggest technical breakthrough: **What happens when cell towers are washed away?**  
> 
> *I tap **Simulate 100% Cellular Failure**. RakshaCast immediately fails over to **ISRO NavIC SAT-DIRECT Mode** on the **S-Band carrier frequency (2492.028 MHz)**.*  
> 
> *Our animated **Celestial Polar Skyplot Radar** tracks 6 locked IRNSS satellites overhead India with sub-meter accuracy.*  
> 
> *We demodulate the raw **ISRO Early Warning Messaging Service (EWMS) binary hex stream** directly from orbit with **CRC-16 checksum verification**.*  
> 
> *Even with zero SIM card signal, citizens can use the **Two-Way Return Link Service (RLS)** to beam an emergency SOS straight to the satellite, receiving a verified acknowledgment token from ISRO's Master Control Station in Hassan, Karnataka!"*

---

### 📍 Scene 6: Safe Evacuation, Anti-Hoarding QR & NDRF Command Mode [03:25 – 04:00]
* **Visual Setup:** Show the **Recovery** tab (Anti-Hoarding QR) then switch top-right to **`🛡️ Officer View`**.
* **On-Screen Actions:**
  1. Show the **Aadhaar-linked Relief Kit QR Pass**.
  2. In Officer View, scroll through the **Citizen SOS Triage Queue** and click **`Dispatch Rescue Team`**.
  3. Show the **Drone Thermal Camera & Battery Telemetry** and the **Vernacular Voice IVR Broadcast Preview**.

> **🎙️ Voiceover:**  
> *"For post-disaster recovery, RakshaCast issues an **Aadhaar-authenticated Anti-Hoarding QR Pass** to ensure fair ration kit distribution at relief camps.*  
> 
> *Switching to **NDRF Officer Command Mode** gives disaster response teams:*  
> - *A live **Citizen SOS Triage Queue** with exact GPS coordinates and family headcount.*  
> - *Real-time **Drone Thermal Surveillance Telemetry**.*  
> - *And automated **Regional Dialect Voice IVR and 2G SMS Broadcast** for feature phones."*

---

### 📍 Scene 7: Multi-Platform Architecture & Conclusion [04:00 – 04:20]
* **Visual Setup:** Show the final summary slide with GitHub repo and live deployment URL.

> **🎙️ Voiceover:**  
> *"RakshaCast is built as a **PWA + Native Android Capacitor container**, combining zero-install web access with full native APK offline capabilities.*  
> 
> *By unifying **MoES/IMD live telemetry**, **ISRO space assets**, and **zero-telecom satellite failover**, RakshaCast delivers an end-to-end, life-saving early warning infrastructure for India.*  
> 
> *The prototype is live at **`rakshacast-sih2026.surge.sh`**. Thank you!"*

---

## 🛠️ Recording Checklist & Equipment Tips

| Item | Recommendation |
| :--- | :--- |
| **Recording Software** | **OBS Studio** or **QuickTime Player Screen Recording** (1080p 60fps). |
| **Audio** | Use a clear USB microphone or wired earphones with mic; speak with enthusiasm and confidence. |
| **Two-Screen Setup** | Laptop recording the main screen, phone kept next to laptop on the desk to show the live siren sync during Scene 4. |
| **PPT Embedding** | Upload the video to **YouTube (Unlisted)** or **Google Drive (View Access)** and put the link prominently on Slide 2 and Slide 10 of your deck. |
