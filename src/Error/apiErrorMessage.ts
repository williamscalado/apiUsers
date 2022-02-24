import { ProblemDefinition, DetailFactory, DefinitionFactory } from 'problem-details';
import { enUS } from './en-US';

const urlApiSuport = 'www.user.com.br/support/'
const erroCodeMessage = enUS

const definitionFactory = new DefinitionFactory();
definitionFactory.load([
  {
    code: 'E001',
    status: 400,
    title: `${erroCodeMessage.E001}`,
    type: `${urlApiSuport}E001`
  },
  {
    code: 'E002',
    status: 401,
    title: `${erroCodeMessage.E002}`,
    type: `${urlApiSuport}E002`
  },
  {
    code: 'L001',
    status: 401,
    title: `${erroCodeMessage.E001}`,
    type: `${urlApiSuport}L001`
  },
  {
    code: 'U001',
    status: 401,
    title: `${erroCodeMessage.U001}`,
    type: `${urlApiSuport}U001`
  },
  {
    code: 'U002',
    status: 401,
    title: `${erroCodeMessage.U002}`,
    type: `${urlApiSuport}U002`
  }

]);
export const errosApiSend = (codeError: string) =>{
  const errosApi = new DetailFactory(definitionFactory);
  return errosApi.createFromCode(codeError)
}

