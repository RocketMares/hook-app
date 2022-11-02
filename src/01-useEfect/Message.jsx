import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
        const onMouseEvent = ({x,y}) =>{

            const coords =({ x, y}) ;
            console.log(coords)
            // return coords;
    
        }
    
        window.addEventListener('mousemove',onMouseEvent)
      return () => {
        window.removeEventListener('mousemove',onMouseEvent)
      }
    }, [])
    
  

  return (
    <>
    <div className="alert alert-primary my-3 mt-3" role={'alert'}>
    <h3>Usuario ya existe</h3>
    </div>
    
    
    </>
  )
}
