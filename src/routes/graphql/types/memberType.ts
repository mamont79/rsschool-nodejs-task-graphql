import { GraphQLEnumType } from 'graphql';
import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const ValuesObj = {
  basic: { value: 'basic' },
  business: { value: 'business' },
};

export const IMemberIdType = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: ValuesObj,
});

export type LoaderType = DataLoader<string, unknown | undefined>;

export type ILoaders = {
  profile: LoaderType;
  posts: LoaderType;
  memberType: LoaderType;
  user: LoaderType;
};

export type IContext = {
  prisma: PrismaClient;
  loaders: ILoaders;
};
