import { errors } from '@feathersjs/client';

const { BadGateway, BadRequest, Forbidden, GeneralError, NotAuthenticated, NotFound, Timeout } = errors;

export const useErrorHandler = (error, data, status = 500) => {
    switch (status) {
      case 400:
        error = new BadRequest(error, data)
        break
      case 401:
        error = new NotAuthenticated(error, data)
        break
      case 403:
        error = new Forbidden(error, data)
        break
      case 404:
        error = new NotFound(error, data)
        break
      case 408:
        error = new Timeout(error, data)
        break
      case 502:
        error = new BadGateway(error, data)
        break
      default:
        error = new GeneralError(error, data)
    }
  
    return error
}