import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const Details = (props) => {
  const [patient, setPatient] = useState({});
  const location = useLocation();
  useEffect(()=>{
    const id = new URLSearchParams(location.search).get('id')
    fetch('/api/patientinfo/'+id).then(r => r.json()).then(res => {
      setPatient(res)
    })
  },[])
    return (
      <div>
        <h3>Detail Record</h3>
        {/* <p>Patient: {patient.name}</p>
        <p>Phone: {patient.phone}</p>
        <p>Date Of Birth: {patient.dateOfBirth}</p>
        <p>Email: {patient.email}</p>
        <p>Above The Knee: {patient.email}</p>
         <p>Ankle Brace: {patient.ankleBrace}</p>
        <p>Blister: {patient.blister}</p>
        <p>Callusing: {patient.callusing}</p>
        <p>Chaffing: {patient.chaffing}</p>
        <p>Decreased Volume: {patient.decreasedVolume}</p>
        <p>Increased volume: {patient.increasedVolume}</p>
        <p>Inserts: {patient.inserts}</p>
        <p>Issue Resolved: {patient.issueResolved}</p>
        <p>Knee Brace: {patient.kneeBrace}</p>
        <p>Lateral Shifting: {patient.laterialShifting}</p>
        <p>Limited Wear: {patient.limitedWear}</p>
        <p>Looseness: {looseness}</p>
        <p>Medical Notation: {patient.medicalNotation}</p>
        <p>No Toe Clearence: {patient.noToeClearence}</p>
        <p>One Week: {patient.oneWeek}</p>
        <p>Open Sore: {patient.openSore}</p>
        <p>Pain: {patient.pain}</p>
        <p>Partial Foot: {patient.partialFoot}</p>
        <p>Pistoning: {patient.pistoning}</p>
        <p>Pressure: {patient.pressure}</p>
        <p>Redness: {patient.redness}</p>
        <p>Refer: {patient.refer}</p>
        <p>Rotating: {patient.rotating}</p>
        <p>Shoes: {patient.shoes}</p>
        <p>Shoe Inserts: {patient.shoeInserts}</p>
        <p>Tightness: {patient.tightness}</p>
        <p>Too Short: {patient.tooShort}</p>
        <p>Too Tall: {patient.tooTall}</p>
        <p>Too Tight: {patient.tooTight}</p>
        <p>Ulcer: {patient.ulcer}</p>
        <p>Unlimited Wear: {patient.unlimitedWear}</p>
        <p>Below The Knee: {patient.belowTheKnee}</p>
        <p>Arm: {patient.arm}</p>
        <p>Back Brace: {patient.backBrace}</p>
        <p>Medical Shifting: {patient.medicalShifting}</p>  */}

       
      </div>
    );
}

export default Details
