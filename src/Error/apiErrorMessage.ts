import { ProblemDefinition, DetailFactory, DefinitionFactory } from 'problem-details';

const urlApiSuport = 'www.user.com.br/support/'


const definitionFactory = new DefinitionFactory();
definitionFactory.load([
  {
    code: 'E001',
    status: 400,
    title: 'This e-mail is already taken',
    type: `${urlApiSuport}E001`
  },
  {
    code: 'E002',
    status: 401,
    title: 'Not enough permission',
    type: `${urlApiSuport}E002`
  }

]);

// setup detail factory
export const errosApiSend = new DetailFactory(definitionFactory);

