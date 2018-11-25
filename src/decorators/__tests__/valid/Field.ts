import Field from '../../Field';
import { nullable, TSGraphQLID } from '../../..';

class Data {
  value!: string;
}

class SomeArgs {
  a!: string;
  b!: number;
  c!: boolean;
}

class Context {
  isAuthorized!: boolean;
}

class SomeType {
  @Field()
  string!: string;

  @Field()
  boolean!: boolean;

  @Field()
  number!: number;

  @Field()
  stringMethod(): string {
    return '';
  }

  @Field()
  booleanMethod(): boolean {
    return false;
  }

  @Field()
  numberMethod(): number {
    return 42;
  }

  @Field({ args: SomeArgs })
  strMethodArgs({ a }: SomeArgs) {
    return a;
  }

  @Field({ args: SomeArgs })
  boolMethodArgs({ b }: SomeArgs) {
    return b;
  }

  @Field({ args: SomeArgs })
  numMethodArgs({ c }: SomeArgs) {
    return c;
  }

  @Field({ type: TSGraphQLID })
  id!: string | number;

  @Field({ type: Data })
  data!: Data;

  @Field({
    type: nullable(Data),
    args: SomeArgs,
    description: 'some data',
    isDeprecated: true,
    deprecationReason: 'old',
  })
  async oldData(args: SomeArgs, context: Context) {
    return null;
  }
}
