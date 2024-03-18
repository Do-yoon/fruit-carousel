import Image from 'next/image'
import "../globals.css";
// import { AnimateOnChange } from 'react-animation'

export default function FruitCarousel({state}) {
  const description = {
    "Banana": "Bananas are a popular tropical fruit known for their distinctive yellow color and sweet taste. They are botanically classified as berries and grow in clusters on large herbaceous plants. Bananas are rich in essential nutrients such as potassium, vitamin C, and dietary fiber, making them a convenient and healthy snack option for athletes and individuals of all ages.",
    "Coconut": "Coconuts are tropical fruits with a hard outer husk, a tough shell, and a deliciously sweet, creamy flesh inside. They are widely known for their versatility, providing coconut water, milk, oil, and grated coconut for culinary use. Coconuts are a rich source of healthy fats, fiber, and essential minerals, making them a nutritious addition to various dishes and beverages.",
    "Strawberry": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
    "Blackberry": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system.",
    "Kiwi": "Strawberries are vibrant red fruits with a sweet and slightly tart flavor. They are a member of the rose family and are known for their juicy texture and small seeds that cover their surface. Packed with antioxidants, vitamins, and dietary fiber, strawberries are not only delicious but also offer numerous health benefits, including promoting heart health and boosting the immune system."
  }

  return (
    <div>
      <div id="carousel-arrow">
        <Image id="left-arrow" alt="left-arrow" src="/left-arrow.png" width={60} height={60}/>
        <Image id="right-arrow" alt="right-arrow" src="/right-arrow.png" width={60} height={60}/>
      </div>
      <div id="text-area">
        <span id="title">{state}</span>
        <p id="description">{description[state]}</p>
        <div id="ctas">
          <div id="ctas-button">
            <span id="ctas-taste-drive">Taste Drive</span>
          </div>
        </div>
      </div>
      <div id="glow">
        <div id="glow-circle"></div>
      </div>
      {/*<AnimateOnChange
        animationIn="bounceIn"
        animationOut="bounceOut"
        durationOut={500}
  >*/}
        {( state === "Banana" ? <Image id="banana-image" alt="banana-image" src="/banana.png" width={628} height={553}/> : <></>)}
        {( state === "Coconut" ? <Image id="coconut-image" alt="coconut-image" src="/coconut.png" width={628} height={553}/> : <></>)}
        {( state === "Strawberry" ? <Image id="strawberry-image" alt="strawberry-image" src="/strawberry.png" width={628} height={553}/> : <></>)}
        {( state === "Blackberry" ? <Image id="blackberry-image" alt="blackberry-image" src="/blackberry.png" width={628} height={553}/> : <></>)}
        {( state === "Kiwi" ? <Image id="kiwi-image" alt="kiwi-image" src="/kiwi.png" width={628} height={553}/> : <></>)}
      {/*</AnimateOnChange>*/}
    </div>
  );
}