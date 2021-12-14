import ResultItem from "./ResultItem"

function Result({results}) {
    return (
        <div className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:grid mt-5">
            {results.map((item,i)=>(
               <ResultItem key={i} item={item}/>
                
            ))}
          
        </div>
    )
}

export default Result
