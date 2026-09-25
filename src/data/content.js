import experienceImage from '../imgs/Captura_de_tela_de_2026-05-15_00-10-04-removebg-preview.png'
import selectionImage from '../imgs/Captura_de_tela_de_2026-05-15_00-11-48-removebg-preview.png'
import preferencesImage from '../imgs/Captura_de_tela_de_2026-05-15_00-06-44-removebg-preview.png'
import cameraImage from '../imgs/Captura_de_tela_de_2026-05-15_00-13-33-removebg-preview.png'
import editImage from '../imgs/Captura_de_tela_de_2026-05-15_00-35-50-removebg-preview.png'

export const images = { experienceImage, selectionImage, preferencesImage, cameraImage, editImage }

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Solução', href: '#solucao' },
  { label: 'Público-Alvo', href: '#publico-alvo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Nossa Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export const features = [
  {
    title: 'Experiência Personalizada',
    text: 'Ao abrir a câmera pela primeira vez, o usuário pode escolher uma experiência adaptada às suas preferências ou manter o modo padrão do celular.',
    image: experienceImage,
    alt: 'Tela de escolha da experiência personalizada',
  },
  {
    title: 'Personalização Inteligente',
    text: 'O usuário seleciona os recursos da câmera que fazem mais sentido no dia a dia e adapta rapidamente o aplicativo ao seu estilo de uso.',
    image: selectionImage,
    alt: 'Tela de seleção dos recursos favoritos',
  },
  {
    title: 'Preferências Aplicadas',
    text: 'Os recursos selecionados recebem destaque em azul, indicando que foram ativados e adicionados à configuração personalizada da câmera.',
    image: preferencesImage,
    alt: 'Tela com recursos selecionados em destaque azul',
  },
  {
    title: 'Personalização Aplicada',
    text: 'A interface é reorganizada para destacar os recursos selecionados, tornando a captura mais rápida, prática e pessoal.',
    image: cameraImage,
    alt: 'Interface final reorganizada com os recursos favoritos',
  },
  {
    title: 'Editar Personalização',
    text: 'A opção “Mais” permite editar preferências a qualquer momento e modificar os recursos escolhidos de forma simples.',
    image: editImage,
    alt: 'Tela de edição das preferências salvas',
  },
]

export const audiences = [
  {
    title: 'Criadores de Conteúdo',
    text: 'Quem grava fotos e vídeos para redes sociais e precisa chegar rápido aos modos e ajustes que realmente usa.',
  },
  {
    title: 'Usuários do Dia a Dia',
    text: 'Pessoas que registram o cotidiano e preferem uma experiência simples, sem menus cheios de recursos desnecessários.',
  },
  {
    title: 'Fotógrafos Mobile',
    text: 'Usuários avançados que valorizam controle fino e uma interface configurada de acordo com o próprio fluxo de trabalho.',
  },
]

export const team = [
  { name: 'Leonardo Gonçalves Cardoso da Fonseca', rm: '569475', github: 'leonardog738' },
  { name: 'Kaue Fernando Jaques Lopes', rm: '571353', github: 'KaueLopes5' },
  { name: 'Matheus Martins Santos', rm: '570884', github: 'martinssoftwareengineer-hub' },
  { name: 'Kaio Nincao Maia Dias', rm: '568834', github: 'kdias1807-create' },
  { name: 'Kauã Miranda', rm: '569473', github: 'mirandakauan2007-hue' },
]

export const gallery = [
  { src: experienceImage, caption: 'Escolha da experiência', alt: 'Escolha entre experiência padrão e personalizada' },
  { src: selectionImage, caption: 'Seleção de recursos', alt: 'Seleção dos recursos favoritos da câmera' },
  { src: preferencesImage, caption: 'Preferências aplicadas', alt: 'Preferências selecionadas em azul' },
  { src: editImage, caption: 'Edição de preferências', alt: 'Edição das preferências salvas' },
]
