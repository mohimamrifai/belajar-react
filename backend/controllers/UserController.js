// 1. import User dari UserModel
import User from '../models/UserModel.js';

export const getUser = async (req, res) =>  {
    try {
        // membuat variabel respon
        const response = await User.findAll(); // fungsi sequalize
         res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }

}
export const getUserById= async (req, res) =>  {
    try {
        // membuat variabel respon
        const response = await User.findByPk(req.params.id)
        res.status(200).json(response); // fungsi sequalize
         
    } catch (error) {
        console.log(error.message)
    }

}
export const createUser= async (req, res) =>  {
    try {
        // membuat variabel respon
        await User.create(req.body)
        res.status(201).json({msg: 'user created'}); // fungsi sequalize
         
    } catch (error) {
        console.log(error.message)
    }

}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}