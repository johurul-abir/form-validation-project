
const formValid = (msg, type = "danger") => {
   return `<p class = "alert alert-${type} d-flex justify-content-between"> ${msg} 
      <button class = "btn btn-close" data-bs-dismiss = "alert"></button>
    </p>`
}


/**
 * Mobile no checking function creation//
 */
const isMobole = (moblielNo) =>{
   
    const pattern = /^(01|\+8801|8801)[0-9]{9}$/
    return pattern.test(`${moblielNo}`)
}


/**
 * Email no checking function creation//
 */
const isMail = (email) =>{
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return pattern.test(`${email}`);

}
