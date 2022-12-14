import { useCounter,useFetch } from "../hook";
import { LoadingQuote,Quote } from "./index";







export const MultipleCustomHooks = () => {
    const {counter,increment,decrement,reset} = useCounter(1);

    const {data,isLoading,error} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0] ;

  return (
    <>

        <h1>BreakingBad Quotes</h1>

        <hr/>


        {
            isLoading 
            ?
            <LoadingQuote/>
            :<Quote author={author} quote={quote} />
        }
   

        


        <button  className="btn btn-primary" 
                disabled= {isLoading} 
                onClick={increment} 
                >Next Quote</button>
     
 
    </>
  )
}
