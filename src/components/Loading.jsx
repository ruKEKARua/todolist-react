import { Paragrath } from '../UI/Paragrath/Paragrath';
import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'


export const Loading = () =>{

    return (
        
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '100px'}}>

            <Paragrath title={'Loading...'} className={paragrathStyle.loading}/>
            

            <div className='loading_block'></div>

        </div> 

    )

}
