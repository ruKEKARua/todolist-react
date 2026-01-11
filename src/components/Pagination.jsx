import { Button } from "../UI/Buttons/Buttons"
import buttonStyle from '../UI/Buttons/Buttons.module.css'


export const Pagitanion = ({setPage, pagesArray, page, changePagePlus, changePageMinus}) =>{

    return (
        
        <div className="pagination_wrapper">

            <Button title={'<'} className={buttonStyle.page} func={changePageMinus} key={'<'}/>

            <div className="pagination_numbers">

                {
                    pagesArray.map((element) => {
                    
                        return <Button title={element} func={() => setPage(element)} className={ page === element ? `${buttonStyle.page_current} ${buttonStyle.page}` : `${buttonStyle.page}`} key={element}/>
                    
                    })
                }

            </div>

            <Button title={'>'} className={buttonStyle.page} func={changePagePlus} key={'>'}/>

        </div> 

    )

}
