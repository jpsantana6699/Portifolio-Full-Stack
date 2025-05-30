import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);

  // Erro de upload do multer
  if (error.message.includes('Apenas arquivos de imagem são permitidos!')) {
    const response: ApiResponse<never> = {
      success: false,
      error: 'Apenas arquivos de imagem são permitidos (JPEG, JPG, PNG, GIF, WebP)'
    };
    res.status(400).json(response);
    return;
  }

  // Erro de tamanho de arquivo
  if (error.message.includes('File too large')) {
    const response: ApiResponse<never> = {
      success: false,
      error: 'Arquivo muito grande. Tamanho máximo: 5MB'
    };
    res.status(400).json(response);
    return;
  }

  // Erro genérico
  const response: ApiResponse<never> = {
    success: false,
    error: 'Erro interno do servidor'
  };
  res.status(500).json(response);
};

export const notFound = (req: Request, res: Response): void => {
  const response: ApiResponse<never> = {
    success: false,
    error: `Endpoint não encontrado: ${req.method} ${req.originalUrl}`
  };
  res.status(404).json(response);
};
