function Button({Text,color,onClick}){
    return(
        <button style={{backgroundColor:color,border:'none',color:'white',padding:'15px 31px',fontSize:'16px',borderRadius:'5px'}}onClick={onClick}>{Text}</button>
    )
}

export default Button;