import type { AutorId } from "../../shared/identifiers";

export type ResumoDoLivro = {
  numeroRegistro: string;
  isbn: string;
  titulo: string;
};

/** Contrato de leitura publicado pelo Acervo, no vocabulário do Acervo. */
export interface ConsultaDeLivros {
  /** Só o que está na estante: quem decide o que é "no acervo" é o Livro. */
  noAcervoDoAutor(autorId: AutorId): ResumoDoLivro[];
}