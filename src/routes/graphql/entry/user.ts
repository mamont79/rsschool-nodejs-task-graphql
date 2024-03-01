import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql';
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

  async resolve(noarg: null, args: object, context: IContext) {
    const id = args['id'] as string;
    const curUser = await context.prisma.user.findUnique({
      where: { id: id },
    });

    return curUser;
  },
};
