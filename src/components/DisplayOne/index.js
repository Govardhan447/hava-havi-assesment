import {Component} from 'react'
import {TbGridDots} from 'react-icons/tb'
import {IoMdHome} from 'react-icons/io'
import {ListBox, Item, Section} from '@adobe/react-spectrum'

import './index.css'

class DisplayOne extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="header-container">
          <h1>hava havi</h1>
        </div>
        <div className="left-menu-container">
          <div className="content-container">
            <div className="content">
              <IoMdHome />
            </div>
            <p className="content">Home</p>
          </div>
          <div className="content-container">
            <div className="content">
              <TbGridDots />
            </div>
            <p className="content">Dashboard</p>
          </div>
          <ListBox
            width="size-2400"
            aria-label="Pick your favorite"
            selectionMode="single"
          >
            <Section title="Animals">
              <Item key="Aardvark">Aardvark</Item>
              <Item key="Kangaroo">Kangaroo</Item>
              <Item key="Snake">Snake</Item>
            </Section>
            <Section title="People">
              <Item key="Danni">Danni</Item>
              <Item key="Devon">Devon</Item>
              <Item key="Ross">Ross</Item>
            </Section>
          </ListBox>
        </div>
      </div>
    )
  }
}
export default DisplayOne
