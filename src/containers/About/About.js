import React from 'react';
import { Col, Row } from 'antd';
import { Button} from 'antd';
import { Container } from "../../components/Container/Container";
import { BoxCard } from './BoxCard/BoxCard';
import {SimpleSlider} from './Slider/Slider'
import { BrandCard } from './BrandCard/BrandCard';
import { CommunityBox } from './CommunityBox/CommunityBox';
import {  Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


import AtomsBoxLogo from "../../assets/icon/AtomsBoxLogo.svg"
import GreenArrowUp from "../../assets/icon/GreenArrowUp.svg"
import FileBoxLogo from "../../assets/icon/FileBoxLogo.svg"
import WalletBoxLogo from "../../assets/icon/WalletBoxLogo.svg"
import CoinsBoxLogo from "../../assets/icon/CoinsBoxLogo.svg"
import EtherBoxLogo from "../../assets/icon/EtherBoxLogo.svg"
import EyeBoxLogo from "../../assets/icon/EyeBoxLogo.svg"
import LockBoxLogo from "../../assets/icon/WalletBoxLogo.svg"

import Paraswap from "../../assets/icon/brand/Paraswap.png"
import Lido from "../../assets/icon/brand/Lido.svg"
import Kiber from "../../assets/icon/brand/Kiber.svg"
import Enzyme from "../../assets/icon/brand/Enzyme.png"
import Techemy from "../../assets/icon/brand/Techemy.svg"
import apophis from "../../assets/icon/brand/apophis.png"

import Yield from "../../assets/icon/Yield.svg"
import ArrowUpRight from "../../assets/icon/ArrowUpRight.svg"

import axa from "../../assets/team/axa.png"
import Maker from "../../assets/team/Maker.png"
import CITI from "../../assets/team/CITI.png"
import EventBrite from "../../assets/team/EventBrite.png"
import Veracity from "../../assets/team/Veracity.png"
import ArrowWithLine from "../../assets/form/ArrowWithLine.svg"
import logoIcon from "../../assets/header/Logo.svg"

import Discord from "../../assets/footer/Discord.svg"
import Telegram from "../../assets/footer/Telegram.svg"
import Twitter from "../../assets/footer/Twitter.svg"
import Medium from "../../assets/footer/Medium.svg"


import "./About.less"

export const About = () => {

  return (
    <section id="about" >
      <Container className="Welcome">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={20} >
            <div className="Title_container__2mvXU">
              <span className="h7 Title_welcome__19ogG">WELCOME TO UNSLASHED</span>
              <h1 className="Title_title__2ve3b">Insurance for Decentralized Finance</h1>
              <span className="h5 Title_trusted__3IHmb">Trusted by institutions and DeFi power users to keep their assets secure.</span>
              <Row className='insured__earn_contain'>
                <Button className='use-app__button'>Get Insured</Button>
                <Button className='Earn_Yield'>Earn Yield</Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="persent">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={8} >
            <div className='first_percent_content'>
              <span className='first_percent'>24%</span>
              <span className='avg_yield'>Avg.Yield</span>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8} >
            <div className='second_percent_content'>
                <span className='second_percent'>$500M+</span>
                <span className='Insured_Assets'>Insured Assets</span>
            </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8} >
            <div className='third_percent_content'>
              <span className='third_percent'>3,210+</span>
              <span className='Capital_Providers'>Capital Providers</span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="assets">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={12} >
            <div>
              <span className='h7 safeguard_assets'>SAFEGUARD ASSETS</span>
              <h2 className="AssetDiversification_description__eLy2p">Protection against many types of risk</h2>
              <p className='AssetDiversification_details__2XwpP'>We provide security and comfort to institutions, DeFi users, and developers by protecting their assets and infrastructure against numerous threats.</p>
            </div>
            <Row>
              <Col xs={24} sm={20} md={12} lg={12} ></Col>
              <Col xs={24} sm={20} md={12} lg={12}  className="right__box">
                <BoxCard
                  icon={AtomsBoxLogo}
                  title="Validators slashing"
                />
                <div className="Boxs_learnAboutBorder">
                  <div className="Boxs_learnAboutContainer">
                    <span className="Boxs_learnAboutText">Learn about their
                    <span>Spartan Bucket</span>and how it works</span>
                    <div className="Boxs_CTAContainer">
                      <img src={GreenArrowUp} alt="green arrow up"/>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={20} md={12} lg={6} className="middle__box">
            <BoxCard
              icon={FileBoxLogo}
              title="Smart-contracts failures"
            />
            <BoxCard
              icon={WalletBoxLogo}
              title="Wallet exploits"
            />
            <BoxCard
              icon={CoinsBoxLogo}
              title="Stablecoin pegs"
          />
          </Col>
          <Col xs={24} sm={20} md={12} lg={6} >
            <BoxCard
              icon={EtherBoxLogo}
              title="Exchanges hacks"
            />
            <BoxCard
              icon={EyeBoxLogo}
              title="Oracle malfunctions"
            />
            <BoxCard
              icon={LockBoxLogo}
              title="Custody risks"
            />
          </Col>
        </Row>
      </Container>

      <Container className="signal_strength">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={20} >
            <div className="Title_container__2mvXU">
              <span className="h7 Title_welcome__19ogG">SIGNAL STRENGTH</span>
              <h2 className="Partnerships_title">Insurance for protocols, DAO’s and institutions</h2>
              <span className="Partnerships_paragraph">The Unslashed Finance protocol insures some of the most respected entities in the DeFi movement.</span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="brand">
          <Row gutter={[24, 24]} justify="center" className="Brand__container">
            <Col xs={24} sm={20} md={12} lg={8} >
              <BrandCard
              icon={Paraswap}
              title="Paraswap"
              />
              <BrandCard
              icon={Lido}
              title="Lido"
              />
            </Col>
            <Col xs={24} sm={20} md={12} lg={8} >
              <BrandCard
              icon={Kiber}
              title="Kyber Network"
              />
              <BrandCard
              icon={Enzyme}
              title="Enzyme Finance"
              />
            </Col>
            <Col xs={24} sm={20} md={12} lg={8} >
              <BrandCard
              icon={Techemy}
              title="Techemy Capital"
              />
              <BrandCard
              icon={apophis}
              title="Appophis Defi"
              />
            </Col>           
          </Row>
      </Container>

      <a href="https://blog.lido.fi/lido-unslashed-finance-partner-to-insure-ethereum-staking-service/  " className="Partnerships_readAboutContainer">
        <span className="Partnerships_readAboutText">Read about our $200M partnership with Lido Finance</span>
        <img src={GreenArrowUp} alt="green arrow"/>
      </a>

      <Container className="active_involvement">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={20} >
            <div className="Title_container__2mvXU">
              <span className="h7 Title_welcome__19ogG">ACTIVE INVOLVEMENT</span>
              <h2 className="Community_title">Participate in the community</h2>
              <span className="Community_paragraph">Choose your level of engagement. You can supply capital to earn yield, govern the protocol, or build on top of it.</span>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]} justify="center" className='Community'>
          <Col xs={24} sm={20} md={12} lg={8} >
              <div className="Community_earnYieldContainer">
                  <img src={Yield} alt="Yield Logo" className="Community_yieldLogo"/>
                <div className="Community_yieldTitle">
                  <span className="Community_yieldTitleText">Earn Yield<img className="Community_arrowUp" src={ArrowUpRight} alt="arrow up right icon"/></span>
                  <span className="Community_yieldParagraph">Supply capital, earn up to 24% APY.</span>
                </div>
              </div>
          </Col>
          <Col xs={24} sm={20} md={12} lg={4} >
          </Col>
          <Col xs={24} sm={20} md={12} lg={12} >
            <CommunityBox 
              className="Community_developersLineGraphic"
              title="Developers"
              content="Build, create and innovate"
            />
            <CommunityBox 
              className="Community_developersLineGraphic2"
              title="Join the DAO"
              content="Shape the future of insurance"
            />
          </Col>
        </Row>
      </Container>

      <Container className="team">
        <div className="Team_workedOnContainer">
          <span className="Team_workedAtText">
            <div className="Team_line"></div>We’ve worked at top tier companies like:
          </span>
          <div className="Team_companies">
            <img style={{height:"41px"}} className="Team_companyLogo" src={axa} alt="AxaIm Investment Managers logo"/>
            <img style={{width:"64px" }}className="Team_companyLogo" src={Maker} alt="Maker logo"/>
            <img style={{width:"59px" }} className="Team_companyLogo" src={CITI} alt="CITI logo"/>
            <img style={{width:"132px" }}className="Team_companyLogo" src={EventBrite} alt="EventBrite logo"/>
            <img style={{width:"136px" }} className="Team_companyLogo" src={Veracity} alt="Vercity logo"/>
          </div>
        </div>
      </Container>
      
      <Container className="slider">
         <SimpleSlider />
      </Container>

      <Container className="tech">
        <div className="Tech_container">
          <span className="Tech_title">Technology Stack</span>
          <div className="Tech_logoContainer">
            <div href="https://ethereum.org/" className="Tech_ethereum"></div>
            <div href="https://enzyme.finance/" className="Tech_enzyme"></div>
            <div href="https://kleros.io/" className="Tech_kleros"></div>
          </div>
        </div>
      </Container>

      <Container className="form">
        <div className="Form_container">
          <span className="h7">JOIN OUR NEWSLETTER</span>
          <span className="Form_title">Stay updated on all things Unslashed</span>
          <span className="Form_unsubscribe">You can unsubscribe at any time.</span>
          <div className="Form_inputContainer">
            <div className="Input_container">
            <input placeholder="Enter your email" className="Input_input" value=""/>
              <div className="Button_container Button_primary" style={{padding:"16.5px"}}>
                <div className="">
                  <div className="Button_innerContainer">
                   <img src={ArrowWithLine} alt="arrow right icon"/>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </Container>

      <Container className="footer">
        <Row gutter={[24, 24]} justify="center" className='contain_footer'>
          <Col xs={24} sm={20} md={12} lg={8} className="logo">
            <img style={{margin:"20px"}}src={logoIcon} alt="logo"/>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8}  className="connecttype">
            <Row>
              <Col xs={6} sm={20} md={12} lg={6} >
              <div className="tooltip">
                <img className="Footer_mediaLogo" src={Discord} alt="Discord Icon"/><span className="tooltiptext">Discord</span>
              </div>
              </Col> 
              <Col xs={6} sm={20} md={12} lg={6}>
                <div className="tooltip">
                <img className="tooltip Footer_mediaLogo" src={Twitter} alt="Twitter Icon"/><span className="tooltiptext">Twitter</span></div></Col>        
                <Col xs={6} sm={20} md={12} lg={6} >
                  <div className="tooltip">
                  <img className="tooltip Footer_mediaLogo" src={Telegram} alt="Telegram Icon"/><span className="tooltiptext">Telegram</span></div>
                </Col>        
                <Col xs={6} sm={20} md={12} lg={6} >
                <div className="tooltip">
                <img className="tooltip Footer_mediaLogo" src={Medium} alt="Medium Icon"/><span className="tooltiptext">Medium</span></div>
              </Col>        
            </Row>
          </Col>
          <Col xs={24} sm={20} md={12} lg={8} className="earn_yield_contain">
            <Row>
              <Menu
              className="app-header__menu"
              mode={"horizontal"}
              overflowedIndicator={<MenuOutlined className="app-header__menu-icon" />}
                >
                <Menu.SubMenu key="SubMenu" title="Audits" className='link__menu'>
                    <Menu.Item key="two" className='community__menu-item'>
                     Audits #1
                    </Menu.Item>
                    <Menu.Item key="three" className='community__menu-item'>
                     Audits #2
                    </Menu.Item>
                    <Menu.Item key="fourr" className='community__menu-item'>
                      Audits #3
                    </Menu.Item>
                </Menu.SubMenu>
              </Menu>
              <Button className='Get_usf_token'>Get USF Token</Button>
            </Row>
          </Col>
        </Row>
        <div className='Footer_copyright'>
          <span className="Footer_copyright">© 2021 Unslashed Finance | All rights reserved.</span>
        </div>
      </Container>


      
    </section>
  )
}
