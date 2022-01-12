import React from 'react'
import Layout from '../Layout'
import { HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {
    return (
        <Layout>
            <HeroContent>
                <HeroH1>Brighton BJJ School</HeroH1>
                <HeroP>Affordable Brazilian jiu jitsu and submission grappling in centre of Brighton. <p>Everyone is welcome regardless of affiliation.</p></HeroP>
            </HeroContent>
        </Layout>
    )
}

export default HeroSection