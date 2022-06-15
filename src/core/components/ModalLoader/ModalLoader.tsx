type IModalLoader = {
    loading: boolean,
    error: boolean,
    success: boolean,
    componentOnLoading?: any,
    componentOnError?: any,
    componentOnSuccess: any,
}

const ModalLoader = (props: IModalLoader) => {
    return(
        <>
            {
                props.loading 
                ? 
                props.componentOnLoading && props.componentOnLoading
                : 
                props.error  
                ? 
                props.componentOnError && props.componentOnError 
                : 
                props.success  
                ?
                props.componentOnSuccess
                :
                <></>
            }
        </>
    )
} 

export default ModalLoader
