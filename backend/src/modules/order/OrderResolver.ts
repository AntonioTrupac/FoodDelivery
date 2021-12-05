import e from "express";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { getConnection } from "typeorm";
import { inspect } from "util";
import { MenuItem } from "../../entity/MenuItem";
import { Order } from "../../entity/Order";
import { OrderItem } from "../../entity/OrderItem";
import { Restaurant } from "../../entity/Restaurant";
import { User } from "../../entity/User";
import { isAuth } from "../../middleware/isAuth";
import { MyContext } from "../../types/MyContext";
import { OrderInput, OrderInputItem } from "./order.schema.types";

@Resolver((of) => Order)
export class OrderResolver {
    @Mutation(() => Order, {nullable: true})
    @UseMiddleware(isAuth)
    async createOrder(
        @Ctx('payload') payload: MyContext["payload"],
        @Arg('input', () => OrderInput) input: OrderInput,
    ): Promise<Order | undefined> {
        console.log(payload);
        console.log(input);
        const customer = await User.findOne(payload?.userId);
        const menuItems = await MenuItem.findByIds(input.items.map(i => i.menuItemId), {relations: ['menu', 'menu.restaurant']});
        const restaurants = menuItems.map(mi => mi.menu.restaurantId);
        const uniqueRestaurantIds: number[] = [];
        restaurants.map(r => {
            if (uniqueRestaurantIds.indexOf(r) < 0) uniqueRestaurantIds.push(r);
        })
        if (customer && menuItems.length === input.items.length && uniqueRestaurantIds.length === 1) {
            const total = menuItems.map(m => m.price * input.items.find(i => i.menuItemId === m.id)!.quantity).reduce((a,b) => a+b,0);
            const restaurant = await Restaurant.findOne(uniqueRestaurantIds[0]);
            const order = await getConnection().manager.save(
                Order.create({
                    customer,
                    total,
                    restaurant,
                })
            );

            const items = await OrderItem.save(input.items.map(i => {
                return OrderItem.create(
                    {
                    quantity: i.quantity,
                    menuItem: menuItems.find(m => m.id === i.menuItemId),
                    order
                });
            }));
            if (items.length === input.items.length) 
                return order;
            
        }
        return undefined;
    }
}