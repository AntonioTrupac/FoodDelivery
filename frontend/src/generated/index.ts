import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

export type ImageInput = {
  url: Scalars['String'];
  restaurantId: Scalars['Float'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['Int'];
  menuName?: Maybe<Scalars['String']>;
  restaurantId?: Maybe<Scalars['Int']>;
  menuItems: Array<MenuItem>;
  tag?: Maybe<Tag>;
};

export type MenuInput = {
  menuName: Scalars['String'];
  restaurantId: Scalars['Float'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  calories: Scalars['Int'];
  ingredients: Scalars['String'];
  menuId?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
};

export type MenuItemInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  calories: Scalars['Float'];
  ingredients: Scalars['String'];
  menuId: Scalars['Float'];
  tagId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRestaurant: Restaurant;
  register: User;
  login?: Maybe<LoginResponse>;
  updateUser: User;
  addImage: Image;
  addMenu: Menu;
  addMenuItems: MenuItem;
};


export type MutationAddRestaurantArgs = {
  restaurantData: RestaurantInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
  id: Scalars['Int'];
};


export type MutationAddImageArgs = {
  imageData: ImageInput;
};


export type MutationAddMenuArgs = {
  menuData: MenuInput;
};


export type MutationAddMenuItemsArgs = {
  menuItemData: MenuItemInput;
};

export type Query = {
  __typename?: 'Query';
  getRestaurants: Array<Restaurant>;
  getRestaurantById: Restaurant;
  me?: Maybe<User>;
  helloWorld: Scalars['String'];
  users: Array<User>;
  userNerd: Scalars['String'];
  getImages: Array<Image>;
  getImageById: Image;
  getMenus: Array<Menu>;
  getMenuById?: Maybe<Menu>;
  getMenuItems: Array<MenuItem>;
  getMenuItemById?: Maybe<MenuItem>;
  getCategoriesByTagId: Array<MenuItem>;
  search: Array<Restaurant>;
};


export type QueryGetRestaurantByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetImageByIdArgs = {
  imageId: Scalars['Int'];
};


export type QueryGetMenuByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetMenuItemByIdArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryGetCategoriesByTagIdArgs = {
  menuId: Scalars['Int'];
  tagId: Scalars['Int'];
};


export type QuerySearchArgs = {
  search?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  id: Scalars['Int'];
  restaurantName: Scalars['String'];
  restaurantRating: Scalars['String'];
  deliveryTime: Scalars['String'];
  openFrom?: Maybe<Scalars['String']>;
  openUntil?: Maybe<Scalars['String']>;
  deliveryPrice?: Maybe<Scalars['Float']>;
  image?: Maybe<Image>;
  menu?: Maybe<Menu>;
};

export type RestaurantInput = {
  restaurantName: Scalars['String'];
  restaurantRating: Scalars['String'];
  deliveryTime: Scalars['String'];
  openFrom: Scalars['String'];
  openUntil: Scalars['String'];
  deliveryPrice: Scalars['Float'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  tagName: Scalars['String'];
};

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type GetMenuItemByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetMenuItemByIdQuery = (
  { __typename?: 'Query' }
  & { getMenuItemById?: Maybe<(
    { __typename?: 'MenuItem' }
    & MenuItemFieldsFragment
  )> }
);

export type GetCategoriesByTagIdQueryVariables = Exact<{
  tagId: Scalars['Int'];
  menuId: Scalars['Int'];
}>;


export type GetCategoriesByTagIdQuery = (
  { __typename?: 'Query' }
  & { getCategoriesByTagId: Array<(
    { __typename?: 'MenuItem' }
    & MenuItemFieldsFragment
  )> }
);

export type MenuItemFieldsFragment = (
  { __typename?: 'MenuItem' }
  & Pick<MenuItem, 'id' | 'name' | 'price' | 'calories' | 'ingredients' | 'menuId'>
  & { tag?: Maybe<(
    { __typename?: 'Tag' }
    & TagFieldsFragment
  )> }
);

export type TagFieldsFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'id' | 'tagName'>
);

export type GetRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestaurantsQuery = (
  { __typename?: 'Query' }
  & { getRestaurants: Array<(
    { __typename?: 'Restaurant' }
    & RestaurantFieldsFragment
  )> }
);

export type GetRestaurantByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetRestaurantByIdQuery = (
  { __typename?: 'Query' }
  & { getRestaurantById: (
    { __typename?: 'Restaurant' }
    & RestaurantFieldsFragment
  ) }
);

export type SearchQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search: Array<(
    { __typename?: 'Restaurant' }
    & RestaurantFieldsFragment
  )> }
);

export type RestaurantFieldsFragment = (
  { __typename?: 'Restaurant' }
  & Pick<Restaurant, 'id' | 'restaurantName' | 'restaurantRating' | 'deliveryTime' | 'openFrom' | 'openUntil' | 'deliveryPrice'>
  & { image?: Maybe<(
    { __typename?: 'Image' }
    & Pick<Image, 'id' | 'url'>
  )>, menu?: Maybe<(
    { __typename?: 'Menu' }
    & Pick<Menu, 'id' | 'menuName'>
    & { tag?: Maybe<(
      { __typename?: 'Tag' }
      & TagFieldsFragment
    )>, menuItems: Array<(
      { __typename?: 'MenuItem' }
      & MenuItemFieldsFragment
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'firstName' | 'lastName' | 'email' | 'phoneNumber'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'firstName' | 'lastName' | 'userId' | 'phoneNumber'>
);

export const TagFieldsFragmentDoc = gql`
    fragment TagFields on Tag {
  id
  tagName
}
    `;
export const MenuItemFieldsFragmentDoc = gql`
    fragment MenuItemFields on MenuItem {
  id
  name
  price
  calories
  ingredients
  menuId
  tag {
    ...TagFields
  }
}
    ${TagFieldsFragmentDoc}`;
export const RestaurantFieldsFragmentDoc = gql`
    fragment RestaurantFields on Restaurant {
  id
  restaurantName
  restaurantRating
  deliveryTime
  openFrom
  openUntil
  deliveryPrice
  image {
    id
    url
  }
  menu {
    id
    menuName
    tag {
      ...TagFields
    }
    menuItems {
      ...MenuItemFields
    }
  }
}
    ${TagFieldsFragmentDoc}
${MenuItemFieldsFragmentDoc}`;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  email
  firstName
  lastName
  userId
  phoneNumber
}
    `;
export const GetMenuItemByIdDocument = gql`
    query getMenuItemById($id: Int) {
  getMenuItemById(id: $id) {
    ...MenuItemFields
  }
}
    ${MenuItemFieldsFragmentDoc}`;

/**
 * __useGetMenuItemByIdQuery__
 *
 * To run a query within a React component, call `useGetMenuItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMenuItemByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>(GetMenuItemByIdDocument, options);
      }
export function useGetMenuItemByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>(GetMenuItemByIdDocument, options);
        }
export type GetMenuItemByIdQueryHookResult = ReturnType<typeof useGetMenuItemByIdQuery>;
export type GetMenuItemByIdLazyQueryHookResult = ReturnType<typeof useGetMenuItemByIdLazyQuery>;
export type GetMenuItemByIdQueryResult = ApolloReactCommon.QueryResult<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>;
export const GetCategoriesByTagIdDocument = gql`
    query getCategoriesByTagId($tagId: Int!, $menuId: Int!) {
  getCategoriesByTagId(tagId: $tagId, menuId: $menuId) {
    ...MenuItemFields
  }
}
    ${MenuItemFieldsFragmentDoc}`;

/**
 * __useGetCategoriesByTagIdQuery__
 *
 * To run a query within a React component, call `useGetCategoriesByTagIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesByTagIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesByTagIdQuery({
 *   variables: {
 *      tagId: // value for 'tagId'
 *      menuId: // value for 'menuId'
 *   },
 * });
 */
export function useGetCategoriesByTagIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCategoriesByTagIdQuery, GetCategoriesByTagIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCategoriesByTagIdQuery, GetCategoriesByTagIdQueryVariables>(GetCategoriesByTagIdDocument, options);
      }
export function useGetCategoriesByTagIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesByTagIdQuery, GetCategoriesByTagIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCategoriesByTagIdQuery, GetCategoriesByTagIdQueryVariables>(GetCategoriesByTagIdDocument, options);
        }
export type GetCategoriesByTagIdQueryHookResult = ReturnType<typeof useGetCategoriesByTagIdQuery>;
export type GetCategoriesByTagIdLazyQueryHookResult = ReturnType<typeof useGetCategoriesByTagIdLazyQuery>;
export type GetCategoriesByTagIdQueryResult = ApolloReactCommon.QueryResult<GetCategoriesByTagIdQuery, GetCategoriesByTagIdQueryVariables>;
export const GetRestaurantsDocument = gql`
    query getRestaurants {
  getRestaurants {
    ...RestaurantFields
  }
}
    ${RestaurantFieldsFragmentDoc}`;

/**
 * __useGetRestaurantsQuery__
 *
 * To run a query within a React component, call `useGetRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRestaurantsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRestaurantsQuery, GetRestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(GetRestaurantsDocument, options);
      }
export function useGetRestaurantsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRestaurantsQuery, GetRestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(GetRestaurantsDocument, options);
        }
export type GetRestaurantsQueryHookResult = ReturnType<typeof useGetRestaurantsQuery>;
export type GetRestaurantsLazyQueryHookResult = ReturnType<typeof useGetRestaurantsLazyQuery>;
export type GetRestaurantsQueryResult = ApolloReactCommon.QueryResult<GetRestaurantsQuery, GetRestaurantsQueryVariables>;
export const GetRestaurantByIdDocument = gql`
    query getRestaurantById($id: Int!) {
  getRestaurantById(id: $id) {
    ...RestaurantFields
  }
}
    ${RestaurantFieldsFragmentDoc}`;

/**
 * __useGetRestaurantByIdQuery__
 *
 * To run a query within a React component, call `useGetRestaurantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRestaurantByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRestaurantByIdQuery, GetRestaurantByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRestaurantByIdQuery, GetRestaurantByIdQueryVariables>(GetRestaurantByIdDocument, options);
      }
export function useGetRestaurantByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRestaurantByIdQuery, GetRestaurantByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRestaurantByIdQuery, GetRestaurantByIdQueryVariables>(GetRestaurantByIdDocument, options);
        }
export type GetRestaurantByIdQueryHookResult = ReturnType<typeof useGetRestaurantByIdQuery>;
export type GetRestaurantByIdLazyQueryHookResult = ReturnType<typeof useGetRestaurantByIdLazyQuery>;
export type GetRestaurantByIdQueryResult = ApolloReactCommon.QueryResult<GetRestaurantByIdQuery, GetRestaurantByIdQueryVariables>;
export const SearchDocument = gql`
    query Search($search: String) {
  search(search: $search) {
    ...RestaurantFields
  }
}
    ${RestaurantFieldsFragmentDoc}`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!, $password: String!) {
  register(
    data: {firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber, password: $password}
  ) {
    userId
    firstName
    lastName
    email
    phoneNumber
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phoneNumber: // value for 'phoneNumber'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;