import { Header } from './components/Header/Header.component'

//Components 
import { Item } from './components/Item/Item.component'

// Images
import Accesories from './assets/img/Desktop-Accessories.jpg'
import ModelS from './assets/img/Desktop-ModelS.jpeg'
import Model3 from './assets/img/Desktop-Model3.jpeg'
import ModelX from './assets/img/Desktop-ModelX.jpeg'
import ModelY from './assets/img/Desktop-ModelY.jpeg'
import SolarPanels from './assets/img/Desktop-SolarPanels.jpeg' 
import SolarRoof  from './assets/img/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accesories"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Accesories}
          leftBtnText='SHOP NOW'
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
