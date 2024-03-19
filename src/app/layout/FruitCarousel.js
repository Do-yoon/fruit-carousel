import Image from 'next/image'
import "../globals.css";
import Transition from 'react-transition-group/Transition';
import { useEffect, useState } from 'react';

const animationTiming = {
  enter: 400,
  exit: 500,
};

const description = {
  "Banana": "Bananas are a popular tropical fruit known for their distinctive yellow color and sweet taste. They are botanically classified as berries and grow in clusters on large herbaceous plants. Bananas are rich in essential nutrients such as potassium, vitamin C, and dietary fiber, making them a convenient and healthy snack option for athletes and individuals of all ages.",
  "Coconut": "Coconuts are tropical fruits with a hard outer husk, a tough shell, and a deliciously sweet, creamy flesh inside. They are widely known for their versatility, providing coconut water, milk, oil, and grated coconut for culinary use. Coconuts are a rich source of healthy fats, fiber, and essential minerals, making them a nutritious addition to various dishes and beverages.",
  "Strawberry": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
  "Blackberry": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
  "Kiwi": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system."
}

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

export default function FruitCarousel({state}) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 1000)
  }, [])

  return (
    <div>
      <div id="carousel-arrow">
        <Image id="left-arrow" alt="left-arrow" src="/left-arrow.png" width={60} height={60}/>
        <Image id="right-arrow" alt="right-arrow" src="/right-arrow.png" width={60} height={60}/>
      </div>

      <Transition
        in={Boolean(state === "Banana")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={(s === 'entering' && showComponent ? 'fruitOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div id="glow">
              <div id="glow-circle"></div>
            </div>
            {( state === "Banana" ? <Image id="banana-image" alt="banana-image" src="/banana.png" width={628} height={553}/> : <></>)}
          </div>
          
        )}
      </Transition>
      <Transition
        in={Boolean(state === "Coconut")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={((s === 'entering' && showComponent) ? 'fruitOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
          <div id="glow">
            <div id="glow-circle"></div>
          </div>
          {( state === "Coconut" ? <Image id="coconut-image" alt="coconut-image" src="/coconut.png" width={628} height={553}/> : <></>)}
        </div>
        )}
      </Transition>
      <Transition
        in={Boolean(state === "Strawberry")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={((s === 'entering' && showComponent) ? 'fruitOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
          <div id="glow">
            <div id="glow-circle"></div>
          </div>
          {( state === "Strawberry" ? <Image id="strawberry-image" alt="strawberry-image" src="/strawberry.png" width={628} height={553}/> : <></>)}
          </div>
        )}
      </Transition>
        <Transition
        in={Boolean(state === "Blackberry")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={((s === 'entering' && showComponent) ? 'fruitOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
          <div id="glow">
            <div id="glow-circle"></div>
          </div>
          {( state === "Blackberry" ? <Image id="blackberry-image" alt="blackberry-image" src="/blackberry.png" width={628} height={553}/> : <></>)}
          </div>
        )}
      </Transition>
          <Transition
        in={Boolean(state === "Kiwi")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={((s === 'entering' && showComponent) ? 'fruitOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
          <div id="glow">
            <div id="glow-circle"></div>
          </div>
          {( state === "Kiwi" ? <Image id="kiwi-image" alt="kiwi-image" src="/kiwi.png" width={628} height={553}/> : <></>)}
          </div>
        )}
      </Transition>

        
             
      
      <Transition
        in={Boolean(state === "Banana")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={((s === 'entering' && showComponent) ? 'ModalOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div className="text-area">
              <span className="title">Banana</span>
              <p className="description">{description["Banana"]}</p>
              <div className="ctas">
                <div className="ctas-button">
                  <span className="ctas-taste-drive">Taste Drive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        in={Boolean(state === "Coconut")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={(s === 'entering' && showComponent ? 'ModalOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div className="text-area">
              <span className="title">Coconut</span>
              <p className="description">{description["Coconut"]}</p>
              <div className="ctas">
                <div className="ctas-button">
                  <span className="ctas-taste-drive">Taste Drive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        in={Boolean(state === "Strawberry")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={(s === 'entering' && showComponent ? 'ModalOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div className="text-area">
              <span className="title">Strawberry</span>
              <p className="description">{description["Strawberry"]}</p>
              <div className="ctas">
                <div className="ctas-button">
                  <span className="ctas-taste-drive">Taste Drive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        in={Boolean(state === "Blackberry")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={(s === 'entering' && showComponent ? 'ModalOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div className="text-area">
              <span className="title">Blackberry</span>
              <p className="description">{description["Blackberry"]}</p>
              <div className="ctas">
                <div className="ctas-button">
                  <span className="ctas-taste-drive">Taste Drive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <Transition
        in={Boolean(state === "Kiwi")}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {s => (
          <div className={(s === 'entering' && showComponent ? 'ModalOpen' : (s === 'exiting' ? 'ModalClosed' : null))}>
            <div className="text-area">
              <span className="title">Kiwi</span>
              <p className="description">{description["Kiwi"]}</p>
              <div className="ctas">
                <div className="ctas-button">
                  <span className="ctas-taste-drive">Taste Drive</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>

      <div id="designed-by">
        <Image id="designer-logo" alt="designer-logo" src="/logo_nk.png" width={171} height={18}></Image>
        <span id="link">nashekrashe.com</span>
      </div>
    </div>
  );
}