const exp=require("express");
const productsApp=exp.Router()
 
productsApp.use(exp.json)

productsApp.get('/get-products',async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let productList=await productCollectionObj.find().toArray()
    response.status(200).send({message:"List of products",payload:productList})
})

//productsApp.use(exp.json())
productsApp.post('/create-product',async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let newProduct=request.body
    let dbRes=await productCollectionObj.insertOne(newProduct)
    response.status(200).send({message:"Product created"})
})

productsApp.delete('/delete-product/:id',async(request,response)=>{
    const productCollectionObj=request.app.get("productCollectionObj")
    let productId=(+request.params.id)
    let dbRes=await productCollectionObj.deleteOne({id:productId})    
    response.status(200).send({message:"Product deleted"})
})

module.exports=productsApp;
