import { Router } from 'express';
export const router = Router();
import { CompanyManagerDB } from '../dao/manager/CompanyManagerDB.js'

//instantiated class DB Company
const cm =  new CompanyManagerDB;


//route get all company
router.get('/signe/company', async (req, res) =>{

    try {
        let company =  await cm.f_getCompany();
        res.setHeader('Content-Type','application/json');

        if(req.query.limit){
            company = company.slice(0, req.query.limit)
        }
        return res.status(200).json({ ok:true, filtros: req.query, company });
        
    } catch (error) {
        console.log('Error: GET(cart) ' + error);
    }

});