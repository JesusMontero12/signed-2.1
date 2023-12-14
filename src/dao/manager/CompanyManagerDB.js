//***************************************************************************/
//      |       Author     |      description          |    Date    |
//      |------------------|---------------------------|------------|
//        Luis D. Montero  |  Primera entrega          | 05-11-2023
//      |----------------- |---------------------------|------------|
//**************************************************************************/

//Required
import { companyModel } from '../models/company-model.js';
import mongoose from 'mongoose';


export class CompanyManagerDB{

    constructor()
    {   
        this.lista = [];
    }

    //Add products cart
    async f_addCart(){

        try { 
            const newCart = await companyModel.create({ products: [] });
            return newCart;

        } catch (error) {
            console.log('ERROR: f_addCart- ' + error);
        }              
    }      

    //Get products companies
    async f_getCompany(){
        try {
            const result = await companyModel.find({});
            return result;
        } catch (error) {
            console.log('ERROR: f_getCompany - ' + error);
        }
    }

} //end class CompanyManagerDB