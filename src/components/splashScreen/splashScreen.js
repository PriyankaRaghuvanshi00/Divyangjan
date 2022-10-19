import React, { useEffect } from 'react'
import "./splashScreen.css"
export default function SplashScreen() {
    const message = 'Hello There!  Welcome To the Divyangjan '
    const msg = new SpeechSynthesisUtterance()
    msg.text = message
    useEffect(() => {
        window.speechSynthesis.speak(msg)
    }, [])

    return (
        <div className="splashhArea" id="SA">
            <span className="splashh path ">Sahara</span>
            <span className="splashh finding">for</span>
            <span className="splashh viz">Divyangjan</span>
        </div >
    )
}


