import React,{useState, useRef} from 'react';

const Overlay = () => {
    const [pass,setPass] = useState("")
    const [error , setError] = useState(false)
    const [show,setShow] = useState(true)
    const textinput = useRef<HTMLInputElement>(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(textinput.current.value)
        if(textinput.current.value !== 'stolat'){
            setError(true)
            setTimeout(()=>{
                setError(false)
            },2000)
        }
        else{
            setShow(false)
        }
        setPass('')
    }
    
        return (
            <div 
            className='flex justify-center items-center flex-col'
            style={{position : "fixed",left:'0px',top:'0px',height:'100vh',width:'100vw',background:"#ddd" , display :show ? "" : "none"} }>
                { error && <h1 className='text-xl text-red-700'>Sorry jeszcze raz...</h1> }
                    <form 
                    onSubmit={handleSubmit}
                    className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Hasło
                    </label>
                    <input ref={textinput} value={pass} onChange={()=>setPass(textinput.current.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="hasło"/>
                    <input type="submit" value="Dalej"  
                    className='pointer bg-gray-900 text-green-100 mt-2 w-full rounded  py-1' />
                        
                    </form>
                    <h1 className='text-2xl font-extrabold'>PASS :</h1>
                    <h1 className='text-2xl font-extrabold'>{ pass }</h1>
            </div>
        );
    }
    


export default Overlay;
