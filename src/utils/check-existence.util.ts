import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Verifica se o recurso existe e lança uma exceção 404 se não for encontrado.
 * @param resource - O recurso a ser verificado.
 * @param message - A mensagem de erro a ser exibida se o recurso não for encontrado.
 */
export function checkExistence<T>(resource: T, message: string = 'Recurso não encontrado'): T {
  if (!resource) {
    throw new HttpException(message, HttpStatus.NOT_FOUND);
  }
  return resource;
}
