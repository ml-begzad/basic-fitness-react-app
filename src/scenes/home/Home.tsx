import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { delay, motion } from 'framer-motion'

type Prop={
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage} : Prop) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* Images and Headers */}
        <motion.div className='md:flex mx-auto w-5/6 md:h-5/6 items-center justify-center '
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Headings */}
                <motion.div className='md:-mt-20'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                        <img src={HomePageText} alt="home Page text" />
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Qui magnam voluptates perspiciatis, unde ut iure in, animi quae dolor quod maiores 
                        recusandae eos quia vitae iusto corrupti. Impedit, dolores reprehenderit!
                    </p>
                </motion.div>
                {/* Actions */}
                <motion.div className='mt-8 flex items-center gap-8'
                    initial = "hidden"
                    whileInView = "visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay: 0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}> Join Now </ActionButton>
                    <AnchorLink className='text-sm font-bold text-red-400 underline hover:text-red-300'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end '>
                <img src={HomePageGraphic} alt="home page graphic" />
            </div>
        </motion.div>
        {isAboveMediumScreens && (
            <div className='h-[100px] w-full bg-red-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img src={SponsorRedBull} alt="" />
                        <img src={SponsorForbes} alt="" />
                        <img src={SponsorFortune} alt="" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home