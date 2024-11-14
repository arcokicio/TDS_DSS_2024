/* Importa o StrictMode do React. O StrictMode é um utilitário do React usado para detectar problemas na aplicação, como práticas de codificação antigas ou inseguras. Ele não renderiza nada na tela, mas ajuda a identificar potenciais problemas durante o desenvolvimento. */
import { StrictMode } from 'react'

/* Importa a função createRoot do pacote react-dom/client. O createRoot é uma nova forma de inicializar e renderizar a aplicação a partir do React 18, substituindo o ReactDOM.render() utilizado em versões anteriores. */
import { createRoot } from 'react-dom/client'

/* Importa o componente TheReal, que é o componente principal da aplicação. Esse componente será renderizado dentro da árvore DOM do HTML. */
import TheReal from './TheReal.jsx'

/* Cria um "root" (raiz) para a aplicação, vinculado ao elemento com id 'root' no HTML.
   O método createRoot é usado para inicializar a renderização do React no DOM. */
createRoot(document.getElementById('root')).render(
  
  /* O StrictMode é utilizado para envolver o componente TheReal. Ele ajuda a identificar problemas no código durante o desenvolvimento, como métodos de ciclo de vida obsoletos ou efeitos colaterais indesejados. 
     Isso não tem impacto no comportamento de produção da aplicação, mas é muito útil para detectar problemas enquanto se está desenvolvendo. */
  <StrictMode>
    <TheReal/>
  </StrictMode>,

)
