import { Button } from "../UI/Buttons/Buttons"
import buttonStyle from '../UI/Buttons/Buttons.module.css'

export const Pages = ({pagesArray, currentPage, changePage}) =>{

    return (
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', height: '50px', margin: '30px auto 0 auto'}}>

            {
                pagesArray.map((element) => {
        
                    return <Button title={element} func={changePage(element)} className={ currentPage === element ? `${buttonStyle.page_current} ${buttonStyle.page}` : `${buttonStyle.page}`} key={element}/>
        
                })
            }

        </div> 

    )

}
