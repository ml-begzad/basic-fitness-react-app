import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import {motion} from 'framer-motion'
import Htext from '@/shared/Htext'
import OurClassComponent from './OurClassComponent'


type prop={
    setSelectedPage: (value: SelectedPage) => void
}

const ourClassItems: Array<ClassType>=[
    {
        name: "Weight Training Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non odio voluptate saepe harum soluta praesentium facere nulla exercitationem ducimus accusamus, quasi commodi eaque quae enim natus illo cumque sed, beatae voluptates quas? Sed et nemo nam quidem illum velit doloribus unde minima architecto, praesentium atque voluptatum reprehenderit vel itaque.",
        image:image1
    },
    {
        name: "Yoga Classes",
        description:"No Description",
        image:image2
    },
    {
        name: "Ab Core Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non odio voluptate saepe harum soluta praesentium facere nulla exercitationem ducimus accusamus, quasi commodi eaque quae enim natus illo cumque sed, beatae voluptates quas? Sed et nemo nam quidem illum velit doloribus unde minima architecto, praesentium atque voluptatum reprehenderit vel itaque.",
        image:image3
    },
    {
        name: "Adventure Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non odio voluptate saepe harum soluta praesentium facere nulla exercitationem ducimus accusamus, quasi commodi eaque quae enim natus illo cumque sed, beatae voluptates quas? Sed et nemo nam quidem illum velit doloribus unde minima architecto, praesentium atque voluptatum reprehenderit vel itaque.",
        image:image4
    },
    {
        name: "Fitness Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non odio voluptate saepe harum soluta praesentium facere nulla exercitationem ducimus accusamus, quasi commodi eaque quae enim natus illo cumque sed, beatae voluptates quas? Sed et nemo nam quidem illum velit doloribus unde minima architecto, praesentium atque voluptatum reprehenderit vel itaque.",
        image:image5
    },
    {
        name: "Training Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non odio voluptate saepe harum soluta praesentium facere nulla exercitationem ducimus accusamus, quasi commodi eaque quae enim natus illo cumque sed, beatae voluptates quas? Sed et nemo nam quidem illum velit doloribus unde minima architecto, praesentium atque voluptatum reprehenderit vel itaque.",
        image:image6
    }
]
const OurClasses = ({setSelectedPage}: prop) => {
  return (
        <section id='ourclasses' className='w-full bg-red-200 py-40'>
            <motion.div
                onViewportEnter={() =>setSelectedPage(SelectedPage.OUrClasses)}
            >
                <motion.div
                    initial = "hidden"
                    whileInView = "visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0}
                    }}
                    >
                    <div className='text-sm md:w-3/5 px-10'>
                        <Htext>Our Classes</Htext>
                        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam earum animi voluptatibus vero, esse tempora corporis, suscipit tempore ex, odit autem blanditiis quisquam incidunt et eveniet doloribus expedita officiis quasi.</p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {ourClassItems.map((classItems: ClassType, index) =>{
                            return (
                                <OurClassComponent
                                    key={`${classItems.name}- ${index}`}
                                    name={classItems.name}
                                    description={classItems.description}
                                    image={classItems.image}
                                />
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
        </section>    
  )
}

export default OurClasses