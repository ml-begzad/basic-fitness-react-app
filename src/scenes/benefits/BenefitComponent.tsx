import { SelectedPage } from '@/shared/types'
import { JSX } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'

type prop ={
    icon:JSX.Element,
    title : string,
    content:string,
    setSelectedPage: (value: SelectedPage) => void
}

const childVariant={
    hidden:{opacity: 0, scale:0.9},
    visible: {opacity:1, scale: 1}
}
const BenefitComponent = ({icon, title, content, setSelectedPage}: prop) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 py-16 px-5 text-center'
        variants={childVariant}
    >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 p-4 border-gray-100 bg-red-100'>
                {icon}
            </div>
        </div>
            <h1 className='font-bold'>{title}</h1>
            <p className='my-3'>{content}</p>
            <AnchorLink className='text-sm font-bold text-red-400 underline hover:text-red-300'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                <p>Learn More</p>
            </AnchorLink>
</motion.div>
  )
}

export default BenefitComponent