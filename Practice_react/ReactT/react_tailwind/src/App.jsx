import React, { Component } from 'react'
import Tailwind from './Tailwind'
import Header from './Layout/Header'
import Nav from './Layout/Nav'
import Content from './Layout/Content'
import Footer from './Layout/Footer'
import USTextColor from './UseState/USTextColor'
import USTextMultiColor from './UseState/USTextMultiColor'
import Counter from './UseState/Counter'
import CounterClass from './UseState/CounterClass'
import USTextRepetetColor from './UseState/USTextRepetetColor'
import MultiColor from './UseState/MultiColor'
import PropsEx from './Props/PropsEx'
import PropsClass from './Props/PropsClass'
import PropsUseState from './Props/PropsUseState'
import PropsUseStateExperiment from './Props/PropsUseStateExperiment'
import Fragment from './ConditionalRandering_MapKeys_Fragment/Fragment'
import ConditionalRandering from './ConditionalRandering_MapKeys_Fragment/ConditionalRandering'
import ConditionalRanderingProject from './ConditionalRandering_MapKeys_Fragment/ConditionalRanderingProject'
import OtherWayConditionalRAndering from './ConditionalRandering_MapKeys_Fragment/OtherWayConditionalRAndering'
import Map from './ConditionalRandering_MapKeys_Fragment/Map'
import MapProject from './ConditionalRandering_MapKeys_Fragment/MapProject'
import TailwindCard from './MapAndBootStrapCard/TailwindCard'
import MapData from './MapAndBootStrapCard/MapData'
import InputStore from './Input/InputStore'
import InputUpdate from './Input/InputUpdate'
import MultipleInputForm from './InputForm/MultipleInputForm'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Tailwind/> */}

        {/* ===================== layout ===================== */}
        {/* <Header/>
        <Nav/>
        <Content/>
        <Footer/> */}

        {/* ==================== usestate =================== */}
        {/* <USTextColor/> */}
        {/* <USTextMultiColor/> */}
        {/* <Counter/> */}
        {/* <CounterClass/> */}
        {/* <USTextRepetetColor/> */}
        {/* <MultiColor/> */}

        {/* ================== Props ================ */}
        {/* <PropsEx name={'meet'} age={25}/>
        <PropsEx name={'Prem'} age={27}/>
        <PropsEx obj={{name:'meet',age:'25'}}/> */}
        {/* <PropsClass name={'meet'}/> */}
        {/* <PropsUseState name={'meet'}/> */}
        {/* <PropsUseStateExperiment arr={{prem:'dinesh', sheela:'hetal'}}/> */}
        {/* <Fragment/> */}
        {/* <ConditionalRandering isMan={true}/>
        <ConditionalRandering isMan={false}/> */}

        {/* <ConditionalRanderingProject inputType={'number'}/> */}
        {/* <OtherWayConditionalRAndering isGender={false} isBeautiful={false}/>
        <OtherWayConditionalRAndering isGender={true} isYoung={true} />  */}

        {/* <Map/> */}
        {/* <MapProject /> */}
        {/* <TailwindCard/> */}
        {/* <MapData /> */}

        {/* ===================== input ===================== */}
        {/* <InputStore /> */}
        {/* <InputUpdate /> */}

        <MultipleInputForm />
      </div>
    )
  }
}