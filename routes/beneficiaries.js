
const errors = require('restify-errors');
const rjwt = require('restify-jwt-community');
const Beneficiaries= require('../models/Beneficiaries');
const config = require('../config');


module.exports = server => {
                             // Get beneficiaries
                             server.get(
                               "/beneficiaries",
                               async (req, res, next) => {
                                 try {
                                   console.log("GET ALL WORKING");
                                   const beneficiaries = await Beneficiaries.find(
                                     {}
                                   );
                                   res.send(beneficiaries);
                                   next();
                                 } catch (err) {
                                   return next(
                                     new errors.InvalidContentError(err)
                                   );
                                 }
                               }
                             );

                             //update beneficiaries
                             server.put(
                               "/beneficiaries/:id",
                               async (req, res, next) => {
                                 if (!req.is("application/json")) {
                                   return next(
                                     new errors.InvalidContentError(
                                       "Content-Type must be application/json"
                                     )
                                   );
                                 }

                                 console.log("PUT WORKING");
                                 try {
                                   console.log("WORKING");
                                   const beneficiary = await Beneficiaries.findOneAndUpdate(
                                     { _id: req.params.id },
                                     req.body
                                   );

                                   res.send(200); //updated
                                 } catch (err) {
                                   return next(
                                     new errors.ResourceNotFoundError(`NO BENEFICIARY FOUND WITH THIS ID 
            ${req.params.id}`)
                                   );
                                 }
                               }
                             );

                             // Get beneficiaries by id
                             server.get(
                               "/beneficiaries/:id",
                               async (req, res, next) => {
                                 try {
                                   console.log("GET 1 WORKING");
                                   const beneficiaries = await Beneficiaries.findOne(
                                     { _id: req.params.id }
                                   );
                                   res.send(beneficiaries);
                                   next();
                                 } catch (err) {
                                   return next(
                                     new errors.ResourceNotFoundError(`NO BENEFICIARY FOUND WITH THIS ID 
            ${req.params.id}`)
                                   );
                                 }
                               }
                             );

                             // Delete beneficiaries
                             server.del(
                               "/beneficiaries/:id",
                               async (req, res, next) => {
                                 try {
                                   const beneficiary = await Beneficiaries.findOneAndRemove(
                                     { _id: req.params.id }
                                   );
                                   res.send(beneficiaries);
                                   next();
                                 } catch (err) {
                                   return next(
                                     new errors.ResourceNotFoundError(`NO BENEFICIARY FOUND WITH THIS ID 
            ${req.params.id}`)
                                   );
                                 }
                               }
                             );

                             // POST beneficiaries
                             server.post(
                               "/beneficiaries",
                               async (req, res, next) => {
                                 if (!req.is("application/json")) {
                                   return next(
                                     new errors.InvalidContentError(
                                       "Content-Type must be application/json"
                                     )
                                   );
                                 }

                                 const {
                                   name,
                                   birthday,
                                   plan,
                                   cpf,
                                   dependents,
                                   rg
                                 } = req.body;
                                 const beneficiary = new Beneficiaries({
                                   name,
                                   birthday,
                                   plan,
                                   cpf,
                                   dependents,
                                   rg
                                 });

                                 try {
                                   const newBeneficiaries = await beneficiary.save();
                                   res.send(201); // Created
                                 } catch (err) {
                                   return next(new errors.InternalError(err));
                                 }
                               }
                             );
                           };