import React from 'react';
import {  Menu, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { MenuOutlined } from '@ant-design/icons';
import logoIcon from "../../assets/header/Logo.svg"
import { Container } from '../Container/Container';
import arrowSVG from "../../assets/header/ArrowCircleUpRight.svg"
import "./AppHeader.less"

export const AppHeader = () => {
  const { Item } = Menu;

  return (
      <Header className="app-header">
        <Container className="app-header__content">
          <img src={logoIcon} alt="logo"/>
          <Menu
            className="app-header__menu"
            mode={"horizontal"}
            overflowedIndicator={<MenuOutlined className="app-header__menu-icon" />}
          >
            <Item key="about" >
              <a className="app-header__menu-item" href="#about">Governance<img className="arrow" src={arrowSVG} alt="arrow"/></a>
            </Item>
            <Item key="services">
              <a className="app-header__menu-item" href="#services">Docs<img className="arrow" src={arrowSVG} alt="arrow"/></a>
            </Item>
            <Menu.SubMenu key="SubMenu" title="Community" className='community__menu'>
                <Menu.Item key="two" className='community__menu-item'>
                  Discord
                </Menu.Item>
                <Menu.Item key="three" className='community__menu-item'>
                  Twitter
                </Menu.Item>
                <Menu.Item key="fourr" className='community__menu-item'>
                  Telegram
                </Menu.Item>
                <Menu.Item key="five" className='community__menu-item'>
                  Medium
                </Menu.Item>
            </Menu.SubMenu>
            <Button className='use-app__button'>Use App</Button>
          </Menu>
        </Container>
      </Header>
  )
}