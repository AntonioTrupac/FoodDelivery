import {
    Arg,
    FieldResolver,
    Int,
    Mutation,
    Query,
    Resolver,
    Root,
 } from 'type-graphql';
 import { getRepository, Repository } from 'typeorm';  
import { Address } from '../../entity/Address';
 
 @Resolver((of) => Address)
 export class AddressResolver {
     @Query((returns) => Address, { nullable: true })
    async getAddressById(@Arg('id', (type)=> Int) id: number): Promise<Address | null> {
       const address = await Address.findOne(id);
       
       if(!address) return null;

       return address;
    }
 }