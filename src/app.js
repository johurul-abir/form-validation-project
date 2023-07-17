
const userForm = document.getElementById("userForm");
const msg = document.getElementById("msg");
const userPhoto = document.getElementById("userPhoto");
const userImage = document.getElementById("userImage");
const userGroupPhoto = document.getElementById("userGroupPhoto");
const userGroupImage = document.getElementById("userGroupImage");
const userGroupImageDiv = document.getElementById("userGroupImageDiv");

userForm.onsubmit = (e) =>{
   e.preventDefault();

   const form_data = new FormData(e.target);

   const data = Object.fromEntries(form_data);
   
   if(!data.name.trim() && !data.email.trim() && !data.phone.trim()){
      msg.innerHTML = formValid("All fild are required!");
      
   }else if(!data.name){
      msg.innerHTML = formValid("Name is required!", "info");

   }else if(!isMail(data.email)){
      msg.innerHTML =formValid("Email is required!", "info");

   }else if(!isMobole(data.phone)){
      msg.innerHTML = formValid("Phone is required!", "info");
   } else{
      msg.innerHTML = formValid("Data stable", "success");
   }

};

userPhoto.onchange = (e) => {
   const userPhotoUrl = URL.createObjectURL(e.target.files[0]);
   userImage.setAttribute("src", userPhotoUrl);
   
};



userGroupPhoto.onchange = (e) => {

   let imgGropu =[];

 for( let i = 0; i< e.target.files.length; i++) {
   const userGropPhotoUrl = URL.createObjectURL(e.target.files[i])

    imgGropu += `<img src="${userGropPhotoUrl}" alt="" id="userGroupImage" style = "width: 100px; margin:5px">`

    userGroupImageDiv.innerHTML = imgGropu;

 }


}