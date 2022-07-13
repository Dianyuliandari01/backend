import Product from "../models/productModels.js";
import path from 'path'; //for access url
import fs from 'fs'; //for access filesystem

//some function

//function view all product
export const getProducts = async (req, res)=>{
    try {
        const response = await Product.findAll();
         res.json(response);
    } catch (error){
        console.log(error.message);
    }
        
    }

//view product by id
export const getProductById = async (req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id:req.params.id
            }
        });
         res.json(response);
    } catch (error){
        console.log(error.message);
    }
}

//save product
export const saveProduct = (req, res)=>{
    //if not
    if(req.files === null) return res.status(400).json({msg:'No File Upload Masszehh'});
    //if there
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/img/${fileName}`;
    const allowedType = ['.png','.jpg','jpeg'];

    //validation
    if(!allowedType.includes(ext.toLocaleLowerCase())) return res.status(422).json({msg:'Invalid Image'});
    if(fileSize > 10000000) return res.status(422).json({msg: "Gambar harus tidak lebih 10 MB"});

    file.mv(`./public/img/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Produk Berhasil dibuat"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

//update product
export const updateProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Data Tidak ditemukan"});
    
    let fileName = "";
    if(req.files === null){
        fileName = Product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 10000000) return res.status(422).json({msg: "Gambar harus tidak lebih 10 MB"});

        //change old file with new file
        const filepath = `./public/img/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/img/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/img/${fileName}`;
    
    try {
        await Product.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Produk Berhasil diperbaharui"});
    } catch (error) {
        console.log(error.message);
    }
}

//delete product
export const deleteProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Data Tidak ditemukan"});

    try {
        const filepath = `./public/img/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Produk Berhasil terhapus"});
    } catch (error) {
        console.log(error.message);
    }
}