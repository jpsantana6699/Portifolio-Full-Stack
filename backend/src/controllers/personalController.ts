import { Request, Response } from 'express';
import { Database } from '../models/database';
import { ApiResponse, PersonalInfo } from '../types';

const db = Database.getInstance();

export class PersonalController {
  static async getPersonalInfo(req: Request, res: Response): Promise<void> {
    try {
      const personalInfo = db.getPersonalInfo();
      
      if (!personalInfo) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Informações pessoais não encontradas'
        };
        res.status(404).json(response);
        return;
      }

      const response: ApiResponse<PersonalInfo> = {
        success: true,
        data: personalInfo
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao buscar informações pessoais'
      };
      res.status(500).json(response);
    }
  }

  static async updatePersonalInfo(req: Request, res: Response): Promise<void> {
    try {
      const updates = req.body;
      const updatedInfo = db.updatePersonalInfo(updates);
      
      if (!updatedInfo) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Informações pessoais não encontradas'
        };
        res.status(404).json(response);
        return;
      }

      const response: ApiResponse<PersonalInfo> = {
        success: true,
        data: updatedInfo,
        message: 'Informações atualizadas com sucesso'
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao atualizar informações pessoais'
      };
      res.status(500).json(response);
    }
  }

  static async uploadProfileImage(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Nenhuma imagem foi enviada'
        };
        res.status(400).json(response);
        return;
      }

      const imageUrl = `/uploads/${req.file.filename}`;
      const updatedInfo = db.updatePersonalInfo({ profileImageUrl: imageUrl });
      
      if (!updatedInfo) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Erro ao atualizar foto de perfil'
        };
        res.status(404).json(response);
        return;
      }

      const response: ApiResponse<{ imageUrl: string }> = {
        success: true,
        data: { imageUrl },
        message: 'Foto de perfil atualizada com sucesso'
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao fazer upload da imagem'
      };
      res.status(500).json(response);
    }
  }
}
