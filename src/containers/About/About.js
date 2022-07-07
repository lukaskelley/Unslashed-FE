import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import { Container } from "../../components/Container/Container";
import { BoxCard } from './BoxCard/BoxCard';
import { BrandCard } from './BrandCard/BrandCard';

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




import "./About.less"

export const About = () => {

  return (
    <section id="about" >
      <Container className="Welcome">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={20} >
            <div className="Title_container__2mvXU">
              <span className="h7 Title_welcome__19ogG">WELCOME TO UNSLASHED</span>
              <h1 class="Title_title__2ve3b">Insurance for Decentralized Finance</h1>
              <span class="h5 Title_trusted__3IHmb">Trusted by institutions and DeFi power users to keep their assets secure.</span>
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
                <div class="Boxs_learnAboutBorder">
                  <div class="Boxs_learnAboutContainer">
                    <span class="Boxs_learnAboutText">Learn about their
                    <span>Spartan Bucket</span>and how it works</span>
                    <div class="Boxs_CTAContainer">
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
              <h2 class="Partnerships_title">Insurance for protocols, DAO’s and institutions</h2>
              <span class="Partnerships_paragraph">The Unslashed Finance protocol insures some of the most respected entities in the DeFi movement.</span>
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
      <a href="https://blog.lido.fi/lido-unslashed-finance-partner-to-insure-ethereum-staking-service/  " class="Partnerships_readAboutContainer">
        <span class="Partnerships_readAboutText">Read about our $200M partnership with Lido Finance</span>
        <img src={GreenArrowUp} alt="green arrow"/>
      </a>

      <Container className="active_involvement">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={20} >
            <div className="Title_container__2mvXU">
              <span className="h7 Title_welcome__19ogG">SIGNAL STRENGTH</span>
              <h2 class="Partnerships_title">Insurance for protocols, DAO’s and institutions</h2>
              <span class="Partnerships_paragraph">The Unslashed Finance protocol insures some of the most respected entities in the DeFi movement.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
