import React from 'react'
import HeroSection from './Components/HeroSection'
import { HERO_BACKGROUND, HERO_BACKGROUND_LAYER } from '@/Constant/image'
import PromiseSection from './Components/PromiseSection'
import FAQ from './Components/FAQ'
import ProductDetailsSection from './Components/ProductDetailsSection'
import InstrectionSection from './Components/InstrectionSection'
import UserReatingSection from './Components/UserReatingSection'
import FooterBanner from './Components/FooterBanner'

export default function Home() {
    return (
        <>
            <section className='relative overflow-hidden'>
                <img className='absolute -z-1 lg:w-7/10 xl:h-full xl:w-6/10 lg:h-full h-full w-full opacity-20' src={HERO_BACKGROUND_LAYER} alt="background layer" />
                <img className='absolute -z-1 lg:w-3/10 xl:h-auto xl:w-4/10 lg:h-auto h-[30%] w-full md:w-auto md:h-full hero-dark-right-bg' src={HERO_BACKGROUND} alt="background" />
                <HeroSection />
            </section>
            <PromiseSection />
            <ProductDetailsSection />
            <InstrectionSection />
            <UserReatingSection />
            <FAQ />
            <FooterBanner />
        </>
    )
}
