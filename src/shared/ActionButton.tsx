import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Prop={
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage} : Prop) => {
  return (
     <AnchorLink className="rounded-md bg-yellow-500 hover:bg-red-400 hover:text-white px-10 py-2 cursor-pointer" href={`#${SelectedPage.ContactUs}`} onClick={()=> setSelectedPage(SelectedPage.ContactUs)}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton