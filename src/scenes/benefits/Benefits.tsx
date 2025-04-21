import { BenefitType, SelectedPage } from '@/shared/types'
import {motion} from 'framer-motion'
import Htext from '@/shared/Htext'
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import BenefitComponent from './BenefitComponent'
import AbstractWaves from '@/assets/AbstractWaves.png'
import Sparkles from '@/assets/Sparkles.png'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Prop={
    setSelectedPage: (value: SelectedPage) => void
}

const benefItem: Array<BenefitType>=[
    {
        icon:<HomeModernIcon className='h-6 w-6'/>,
        title:"State of the Art Facilities",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus temporibus autem earum quod sit."
    },
    {
        icon:<UserGroupIcon className='h-6 w-6'/>,
        title:"100's of Diverse Classes",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus temporibus autem earum quod sit."
    },
    {
        icon:<AcademicCapIcon className='h-6 w-6'/>,
        title:"Expert and Pro Trainers",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus temporibus autem earum quod sit."
    }
]

const container={
    hidden:{},
    visible:{transition:{staggerChildren: 0.2}}
}
const Benefits = ({setSelectedPage} : Prop) => {
  return (
        <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div
                onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
            >
                <div>
                    <Htext>MORE THAN JUST A GYM.</Htext>
                    <p className='mt-5 text-sm md:w-3/5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Architecto esse, eum beatae exercitationem expedita et cumque fuga obcaecati
                        distinctio? Dolore, tenetur! Doloribus aut ex distinctio, iusto sapiente 
                        aperiam veritatis maxime.
                    </p>
                </div>

                {/* Benefits */}
                <motion.div className='mt-5 items-center justify-between gap-8 md:flex'
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}

                    variants={container}
                >
                    {benefItem.map((benefit: BenefitType)=>{
                        return(
                        <BenefitComponent
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            content={benefit.content}
                            setSelectedPage={setSelectedPage}
                        />
                        )
                    })}
                </motion.div>
                {/* Graphic and Descriptions */}
                <div className='mt-16 items-center justify-between gap-20 lg:flex md:mt-28'>
                    {/* Graphic */}
                    <img src={BenefitsPageGraphic} alt="" className='mx-auto'/>
                    {/* Decription and Title */}
                    <div>
                        {/* Title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-12 before:-left-20 before:z-[1]'>
                                <img src={AbstractWaves} alt="abstrat waves" />
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:true, amount:0.5}}
                                    transition={{duration:0.5}}
                                    variants={{
                                        hidden:{opacity: 0, x:50},
                                        visible:{opacity: 1, x: 0},
                                    }}
                                >
                                    <Htext>MILLIONS OF HAPPY MEMEBERS GETTING{" "} <span className='text-red-400'>FIT.</span></Htext>
                                </motion.div>
                            </div>
                        </div>
                        {/* Description */}
                        <motion.div className='text-sm'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, amount:0.5}}
                            transition={{delay: 0.2,duration:0.5}}
                            variants={{
                                hidden:{opacity: 0, x:50},
                                visible:{opacity: 1, x: 0},
                            }}
                        >
                            <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum temporibus nostrum similique eos hic consequuntur excepturi doloremque, culpa ducimus, at, rem nisi earum tempore saepe. Exercitationem, dolores nihil! Fugit aliquam reiciendis, veniam et explicabo eum nostrum maxime sint deserunt in facere saepe quas alias fugiat quis sapiente minus ullam ipsum!</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem a illum facere harum accusamus cumque minus corporis quam illo possimus cum consectetur, libero sapiente autem aliquam nostrum id nulla? Eum nostrum amet sequi obcaecati sint suscipit harum perferendis autem dignissimos, molestiae pariatur, cumque optio tenetur enim veniam fuga. Rem.</p>
                        </motion.div>

                        {/* Button */}
                        <div className='relative mt-16'>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            <div className='absolute -bottom-20 right-20 z-[-1]'>
                                <img src={Sparkles} alt="sparkles" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
  )
}

export default Benefits