import Nav from '../components/nav'
import Overlay from '../components/Overlay'
import React,{useState} from 'react'

const dashboard = () => {
    const [mode,setMode] = useState("large") 
    return (
        <div>
            <Overlay/>
            <Nav/>
            <div className="presentation  shadow-sm container my-24 mx-auto bg-white" 
            style={{ minHeight : '300px' , width :  mode === "large" ? '600px' :"300px"  }}>                    
            </div>
            <div className="icons rounded shadow-lg">
            <svg  onClick={()=>setMode('small')} className={ mode === 'small' ? "active" : '' }   height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>
            <svg onClick={()=>setMode('large')} className={ mode === 'large' ? "active" : '' }  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/></svg>
            </div>
        </div>
    );
}

export default dashboard;
