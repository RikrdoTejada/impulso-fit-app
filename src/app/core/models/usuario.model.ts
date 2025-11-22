export enum RoleType {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN'
}

//request

export interface RegisterRequestDTO {
  email: string;
  // backend expects 'contrasena' (Spanish) for password
  contrasena: string;
}

export interface LoginRequestDTO {
  email: string;
  // backend expects 'contrasena' (Spanish)
  contrasena: string;
}

//response

export interface PerfilResponseDTO {
    id: string;
    email: string;
    names: string;
    role: RoleType;
    bloqueado: boolean;
}

export interface AuthResponseDTO {
    token: string;
    type: string;
    email: string;
    name: string;
    role?: RoleType;
}