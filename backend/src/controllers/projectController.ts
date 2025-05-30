import { Request, Response } from 'express';
import { Database } from '../models/database';
import { ApiResponse, Project } from '../types';

// Obtém a instância singleton da Database
const db = Database.getInstance();

export class ProjectController {
  static async getAllProjects(req: Request, res: Response): Promise<void> {
    try {
      const projects = db.getAllProjects();
      const response: ApiResponse<Project[]> = {
        success: true,
        data: projects
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao buscar projetos'
      };
      res.status(500).json(response);
    }
  }

  static async getFeaturedProjects(req: Request, res: Response): Promise<void> {
    try {
      const projects = db.getFeaturedProjects();
      const response: ApiResponse<Project[]> = {
        success: true,
        data: projects
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao buscar projetos em destaque'
      };
      res.status(500).json(response);
    }
  }

  static async getProjectById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const project = db.getProjectById(id);
      
      if (!project) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Projeto não encontrado'
        };
        res.status(404).json(response);
        return;
      }

      const response: ApiResponse<Project> = {
        success: true,
        data: project
      };
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao buscar projeto'
      };
      res.status(500).json(response);
    }
  }

  static async createProject(req: Request, res: Response): Promise<void> {
    try {
      const projectData = req.body;
      
      // Adicionar validações aqui
      
      const newProject = db.addProject(projectData);
      
      const response: ApiResponse<Project> = {
        success: true,
        data: newProject
      };
      
      res.status(201).json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao criar projeto'
      };
      res.status(500).json(response);
    }
  }

  static async updateProject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const projectData = req.body;
      
      const existingProject = db.getProjectById(id);
      
      if (!existingProject) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Projeto não encontrado'
        };
        res.status(404).json(response);
        return;
      }
      
      // Implementação da atualização poderia ser adicionada aqui
      // Por enquanto, responde com sucesso simulado
      
      const response: ApiResponse<Project> = {
        success: true,
        data: {
          ...existingProject,
          ...projectData,
          updatedAt: new Date()
        }
      };
      
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao atualizar projeto'
      };
      res.status(500).json(response);
    }
  }

  static async deleteProject(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      const existingProject = db.getProjectById(id);
      
      if (!existingProject) {
        const response: ApiResponse<never> = {
          success: false,
          error: 'Projeto não encontrado'
        };
        res.status(404).json(response);
        return;
      }
      
      // Implementação da exclusão poderia ser adicionada aqui
      // Por enquanto, responde com sucesso simulado
      
      const response: ApiResponse<{ deleted: boolean }> = {
        success: true,
        data: { deleted: true }
      };
      
      res.json(response);
    } catch (error) {
      const response: ApiResponse<never> = {
        success: false,
        error: 'Erro ao excluir projeto'
      };
      res.status(500).json(response);
    }
  }
}
