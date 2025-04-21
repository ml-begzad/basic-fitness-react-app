import Htext from "@/shared/Htext"
import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion"
import { FormEvent } from "react"
import {useForm} from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'


type prop={
    setSelectedPage:(value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: prop) => {
    
    const {
        register, 
        trigger,
        formState : {errors}
    } = useForm()
    const onsubmitForm= async (e:FormEvent<HTMLFormElement>) => {
            const valid = await trigger();
            if(!valid){
                e.preventDefault()
            }
    }

  return (
    <section id="contact-us" className="mx-auto w-5/6 pt-24 pb-32" >
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEader */}
            <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay: 0.2, duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <Htext ><span className="text-red-400">JOIN NOW</span> TO GET IN SHAPE </Htext>
                <p className="my-5 lg:w-3/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, nisi quidem voluptatem et voluptatibus repudiandae libero odit omnis labore accusamus culpa illo sapiente dolore qui excepturi dicta? Temporibus, voluptate quod!</p>
            </motion.div>
            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 lg:flex lg:flex-row">
                <motion.div
                    initial = "hidden"
                    whileInView = "visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0}
                    }}
                >
                    <form 
                        target="_blank"
                        action="https://formsubmit.co/your@email.com"
                        onSubmit={onsubmitForm}
                        method="POST"
                    >
                        <input type="text"
                                className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mb-5"
                                placeholder="NAME"
                                {...register('name', {required:true, maxLength:100})}
                            />
                            {errors.name && (
                                <p className="mt-1 text-red-300">
                                    {errors.name.type === 'required' && "This Field is Required."}
                                    {errors.name.type === 'maxLength' && "Max length is 100 character"}
                                </p>
                            )}


                            <input type="email"
                                className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mb-5"
                                placeholder="EMAIL"
                                {...register('email', {required:true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-red-300">
                                    {errors.email.type === 'required' && "This field is required."}
                                    {errors.email.type === 'pattern' && "Invalid email address"}
                                </p>


                            )}


                            <textarea
                                rows={4}
                                cols={50} 
                                className="w-full rounded-lg bg-red-300 px-5 py-3 placeholder-white mb-5"
                                placeholder="MESSAGE"
                                {...register('message', {required:true, maxLength:2000})}
                            />
                            {errors.message && (
                                <p className="mt-1 text-red-300">
                                    {errors.message.type === 'required' && "This Field is Required."}
                                    {errors.message.type === 'maxLength' && "Max length is 2000 character"}
                                </p>
                            )}

                            <button type="submit" className="mt-5 rounded-lg bg-yellow-500 px-20 py-3 transition duration-500 hover:text-white">Submit</button>
                    </form>
                    </motion.div>
                    {/* Image */}
                    <motion.div className="relative mt-16 basis-2/5 lg:mt-0"
                                initial = "hidden"
                                whileInView = "visible"
                                viewport={{once:true, amount:0.5}}
                                transition={{delay: 0.2, duration:0.5}}
                                variants={{
                                    hidden:{opacity:0, y:50},
                                    visible:{opacity:1, y:0}
                                }}
                    >
                        <div className=" w-full ">
                            <img className="w-full" src={ContactUsPageGraphic} alt="contact us graphic image" />
                        </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs