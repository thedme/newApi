/**
 * Customers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	firstName: {
  		type: 'string',
  		defaultsTo: 'John'
  	},
  	lastName: {
  		type: 'string',
  		defaultsTo: 'Doe'
  	},
  	shippingAddress: {
  		type: 'string',
  		required: true
  	},
  	numberOfPurchases: {
  		type: 'String',
  		defaultsTo: '0'
  	}


  }

  
};

