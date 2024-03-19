import Image from 'next/image'
import "../globals.css";

export default function Header({state, setState}) {
    const selected = {
        color: '#363839',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    const border = {
        "Banana": {
            padding: "5px 20px",
            border: "2px inset transparent",
            borderRadius: "68px",
            borderImageSlice: "2",
            backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(225.35deg, #FFEE57 0%, #FFB930 97.53%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        },
        "Coconut": {
            padding: "5px 20px",
            border: "2px inset transparent",
            borderRadius: "68px",
            borderImageSlice: "2",
            backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(225.35deg, #CEB7B4 0%, #B57049 97.53%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        },
        "Strawberry": {
            padding: "5px 20px",
            border: "2px inset transparent",
            borderRadius: "68px",
            borderImageSlice: "2",
            backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(225.35deg, #FBC9C9 0%, #CF3939 97.53%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        },
        "Blackberry": {
            padding: "5px 20px",
            border: "2px inset transparent",
            borderRadius: "68px",
            borderImageSlice: "2",
            backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(225.35deg, #DCB7F2 0%, #814C62 97.53%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        },
        "Kiwi": {
            padding: "5px 20px",
            border: "2px inset transparent",
            borderRadius: "68px",
            borderImageSlice: "2",
            backgroundImage: "linear-gradient(#fff, #fff), linear-gradient(225.35deg, #F2DBAF 0%, #9C9344 97.53%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        }
      }

      const tasteDriveButton = {
        "Banana": {
            background: "linear-gradient(225.35deg, #FFEE57 0%, #FFB930 97.53%)"
        },
        "Coconut": {
            background: "linear-gradient(225.35deg, #CEB7B4 0%, #B57049 97.53%)"
        },
        "Strawberry": {
            background: "linear-gradient(225.35deg, #FBC9C9 0%, #CF3939 97.53%)"
        },
        "Blackberry": {
            background: "linear-gradient(225.35deg, #DCB7F2 0%, #814C62 97.53%)"
        },
        "Kiwi": {
            background: "linear-gradient(225.35deg, #F2DBAF 0%, #9C9344 97.53%)"
        }
      }

    return (
        <div id="header">
            <div>
                <a href="/" className="logo" style={{zIndex: 11}}/>
                <Image className="logo" alt="logo" src="/fruitylips.svg" width={226.56} height={64.73}/>
            </div>
            <div id="menu">
                <div className="menu-element menu-element-1" style={(state === "Banana" ? border[state] : {})} onClick={e => setState(0)}>
                    <span style={(state === "Banana" ? selected : {})}>Banana</span>
                </div>
                <div className="menu-element menu-element-2" style={(state === "Coconut" ? border[state] : {})} onClick={e => setState(1)}>
                    <span style={(state === "Coconut" ? selected : {})}>Coconut</span>
                </div>
                <div className="menu-element menu-element-3" style={(state === "Strawberry" ? border[state] : {})} onClick={e => setState(2)}>
                    <span style={(state === "Strawberry" ? selected : {})}>Strawberry</span>
                </div>
                <div className="menu-element menu-element-4" style={(state === "Blackberry" ? border[state] : {})} onClick={e => setState(3)}>
                    <span style={(state === "Blackberry" ? selected : {})}>Blackberry</span>
                </div>
                <div className="menu-element menu-element-5" style={(state === "Kiwi" ? border[state] : {})} onClick={e => setState(4)}>
                    <span style={(state === "Kiwi" ? selected : {})}>Kiwi</span>
                </div>
                <div className="taste-drive-button" style={tasteDriveButton[state]}>
                    <span id="taste-drive">Taste Drive</span>
                </div>
            </div>
        </div>
    )

}