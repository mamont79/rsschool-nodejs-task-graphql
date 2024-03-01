import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';
import { IContext } from '../types/memberType.js';

export const TypeOfUser = new GraphQLObjectType({
  name: 'user',
  fields() {
    return {
      id: { type: UUIDType },
      name: { type: GraphQLString },
      balance: { type: GraphQLFloat },
    };
  },
});

export const user = {
  type: TypeOfUser,
  args: { id: { type: UUIDType } },

  async resolve(_a: null, args: object, context: IContext) {
    const id = args['id'] as string;
    const curUser = await context.prisma.user.findUnique({
      where: { id: id },
    });

    return curUser;
  },
};

export const users = {
  type: new GraphQLList(TypeOfUser),

  async resolve(_a: null, _b: null, context: IContext) {
    const allUsers = await context.prisma.user.findMany();

    return allUsers;
  },
};
