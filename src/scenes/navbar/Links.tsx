import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
  }
const Links = ({page, selectedPage, setSelectedPage}:Props) => {
  
  const lowerCasePage=page.toLowerCase().replace(/ /g,"") as SelectedPage
  return (
    <>
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-red-400" : ""} transition duration-500 hover:text-red-300`}
        onClick={()=> setSelectedPage(lowerCasePage)}
        href={`#${lowerCasePage}`}
        >
         {page}
        </AnchorLink>
    </>
  )
}

export default Links