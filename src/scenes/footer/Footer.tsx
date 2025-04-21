import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-red-200 py-10'>
        <div className="justify-content mx-auto w-4/5 gap-16 lg:flex">
            <div className='mt-16 basis-2/4 lg:mt-0'>
                <img src={Logo} alt="" />
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem voluptas ex veritatis eius ipsum illo debitis nemo quam deleniti!</p>
                <p>© Evogym All Rights Reserved</p>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4'>
                <h2 className='font-bold'>Links</h2>
                <p className='my-5'> ipsum dolor sit amet.</p>
                <p className='my-5'>dolor sit amet consectetur.</p>
                <p className='my-5'> amet consectetur adipisicing.</p>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4'>
                <h2 className='font-bold'>Contact Us</h2>
                <p className='my-5'>ipsum dolor sit amet consectetur.</p>
                <p className='my-5'>(+93)3945809348</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer