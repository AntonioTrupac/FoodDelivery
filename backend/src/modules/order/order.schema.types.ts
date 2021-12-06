import { ArrayMinSize } from "class-validator";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class OrderInput {
    @ArrayMinSize(1)
    @Field(() => [OrderInputItem], {})
    items: OrderInputItem[];
}

@InputType()
export class OrderInputItem {
    @Field()
    menuItemId: number;
    @Field(() => Int)
    quantity: number;
}