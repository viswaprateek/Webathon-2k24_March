const cloudinary=require("cloudinary").v2
const { request } = require("express");
const multer=require("multer");
const {CloudinaryStorage}=require("multer-storage-cloudinary")

//config cloudinary
cloudinary.config({
    cloud_name:"dcqi99qbt",
    api_key:"625779938216475",
    api_secret:"Km15cf5Aznm5BaxdQtVUIDo5yrg"

})
//config cloudinary storage
let clStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"vnr2023",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()
    }

})
//config multer
let multerObj=multer({storage:clStorage})
module.exports=multerObj