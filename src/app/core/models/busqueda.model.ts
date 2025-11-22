export interface Perfil {
    idPerfil: number;
    email: string;
    nombres: string;
    role: string;
    bloqueado: boolean;
}

export interface Grupo {
    id_grupo: number;
    nombre: string;
    deporte: string;
    descripcion: string;
    accionUnirseUrl: string;
    ubicacion: string;
    fecha_creacion: string;
    nroSeguidores: number;
}

export interface Reto {
    id_reto: number;
    grupoNombre: string;
    creadorNombre: string;
    unidad: string;
    titulo: string;
    descripcion: string;
    objetivoTotal: number;
    fechaPublicacion: string;
    fecha_inicio: string;
    fecha_fin: string;
    nroSeguidores: number;
}

export interface SearchResponse {
    grupos: Grupo[];
    perfiles: Perfil[];
    retos: Reto[];
}