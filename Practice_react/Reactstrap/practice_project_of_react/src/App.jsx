import React, { Component } from 'react'
import Header from './Layout/Header'
import Nev from './Layout/Nev'
import Content from './Layout/Content'
import Footer from './Layout/Footer'
import CounterFun from './UseState/CounterFun'
import CounterClass from './UseState/CounterClass'
import ColorText from './UseState/ColorText'
import MultiColorText from './UseState/MultiColorText'
import MultiBg from './UseState/MultiBg'
import FunProps from './Props/FunProps'
import ClassProps from './Props/ClassProps'
import PropsProject from './Props/PropsProject'
import Fragment from './Map-Fragment-ConditionalRandering/Fragment'
import Map from './Map-Fragment-ConditionalRandering/Map'
import ConditionalRanderingIF from './Map-Fragment-ConditionalRandering/ConditionalRanderingIF'
import ConditionalSec from './Map-Fragment-ConditionalRandering/ConditionalSec'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Nev />
        <Content />
        <Footer /> */}

        {/* <CounterFun /> */}
        {/* <CounterClass /> */}
        {/* <ColorText /> */}
        {/* <MultiColorText /> */}
        {/* <MultiBg /> */}
        {/* <FunProps name={'meet'} age={'25'} /> */}
        {/* <ClassProps name={'meet'} /> */}
        {/* <PropsProject name={['prem mistry ', 'meet mistry']} /> */}
        {/* <Fragment /> */}
        {/* <Map /> */}
        {/* <ConditionalRanderingIF isInput={'color'} /> */}
        <ConditionalSec isInput={false} />
      </div>
    )
  }
}
