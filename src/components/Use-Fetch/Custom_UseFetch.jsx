import useFetch from "./useFetch"

export default function Custom_UseFetch() {

    const {data, error, pending} = useFetch( `https://dummyjson.com/products` , {} );
    
    console.log( error, pending, data);
    
    return (
        <>
        <h1> Use Fetch Custom Hook </h1>
        {
            pending ? <h2> loading ! Please Wait </h2> : null 
        }

        {
            error ? <h2> { error } </h2> : null
        }

        {
            data && data.products && data.products.length ? 
            data.products.map(  productItem => 
                <p key={ productItem.id } > { productItem.title }</p>
            ) : null 
        }

        </>
    )
}


