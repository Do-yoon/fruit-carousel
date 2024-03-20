import Image from 'next/image'
import "../globals.css";

export default function Header({state, setState, prevState, setPrevState, setShowComponent, showComponent}) {
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

      function onClickMenu(newState) {
        setPrevState(state);
        setState(newState);
        setShowComponent(false);
      }

    return (
        <div id="header">
            <div>
                <a href="/" className="logo" style={{zIndex: 11}}/>
                <Image className="logo" alt="logo" src="/fruitylips.svg" width={226.56} height={64.73}/>
            </div>
            <div id="menu">
                <div className="menu-element menu-element-1" style={((prevState === "Banana" && !showComponent) || ((state === "Banana") && showComponent) ? border["Banana"] : {})} onClick={e => onClickMenu(0)}>
                    <span style={((prevState === "Banana" && !showComponent) || ((state === "Banana") && showComponent) ? selected : {})}>Banana</span>
                </div>
                <div className="menu-element menu-element-2" style={((prevState === "Coconut" && !showComponent) || ((state === "Coconut") && showComponent) ? border["Coconut"] : {})} onClick={e => onClickMenu(1)}>
                    <span style={((prevState === "Coconut" && !showComponent) || ((state === "Coconut") && showComponent) ? selected : {})}>Coconut</span>
                </div>
                <div className="menu-element menu-element-3" style={((prevState === "Strawberry" && !showComponent) || ((state === "Strawberry") && showComponent) ? border["Strawberry"] : {})} onClick={e => onClickMenu(2)}>
                    <span style={((prevState === "Strawberry" && !showComponent) || ((state === "Strawberry") && showComponent) ? selected : {})}>Strawberry</span>
                </div>
                <div className="menu-element menu-element-4" style={((prevState === "Blackberry" && !showComponent) || ((state === "Blackberry") && showComponent) ? border["Blackberry"] : {})} onClick={e => onClickMenu(3)}>
                    <span style={((prevState === "Blackberry" && !showComponent) || ((state === "Blackberry") && showComponent) ? selected : {})}>Blackberry</span>
                </div>
                <div className="menu-element menu-element-5" style={((prevState === "Kiwi" && !showComponent) || ((state === "Kiwi") && showComponent) ? border["Kiwi"] : {})} onClick={e => onClickMenu(4)}>
                    <span style={((prevState === "Kiwi" && !showComponent) || ((state === "Kiwi") && showComponent) ? selected : {})}>Kiwi</span>
                </div>
                <div className="taste-drive-button" style={( showComponent ? tasteDriveButton[state] : tasteDriveButton[prevState])}>
                    <span id="taste-drive">Taste Drive</span>
                </div>
            </div>
        </div>
    )

}