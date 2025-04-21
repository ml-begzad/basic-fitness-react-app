


type prop={
    name: string,
    description?:string,
    image:string
}
const OurClassComonent = ({name, description, image}:prop) => {
  const overlay=`p-5 absolute z-30 flex flex-col items-center justify-center h-[380px] w-[450px]
  whitespace-normal text-center bg-red-400 text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
          <div className={overlay}>
              <p className="text-2xl">{name}</p>
              <p className="mt-5">{description}</p>
          </div>
          <img src={image} alt={`${image}`} />
    </li>
  )
}

export default OurClassComonent